import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const { summary, description, startTime, endTime, attendeeEmail, timeZone } = await request.json();

    // Validate required fields
    if (!summary || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'Missing required fields: summary, startTime, and endTime are required' },
        { status: 400 }
      );
    }

    // Set up Google Calendar API client with OAuth2
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    // Set credentials using refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Create event object
    const event = {
      summary: summary,
      description: description || '',
      start: {
        dateTime: startTime,
        timeZone: timeZone || 'America/New_York',
      },
      end: {
        dateTime: endTime,
        timeZone: timeZone || 'America/New_York',
      },
      attendees: attendeeEmail ? [{ email: attendeeEmail }] : [],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 30 }, // 30 minutes before
        ],
      },
    };

    // Insert event into calendar
    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all', // Send email notifications to attendees
    });

    return NextResponse.json({
      success: true,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
      message: 'Event created successfully',
    });
  } catch (error: any) {
    console.error('Error creating calendar event:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create calendar event', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}
