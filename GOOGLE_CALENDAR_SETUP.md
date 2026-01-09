# Google Calendar Integration Setup Guide

This guide will help you set up Google Calendar API integration for your Next.js application.

## Prerequisites
- A Google account
- Access to Google Cloud Console

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "My Website Calendar")
4. Click "Create"

## Step 2: Enable Google Calendar API

1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google Calendar API"
3. Click on it and press "Enable"

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - User Type: External (for testing) or Internal (if you have a Google Workspace)
   - App name: Your app name
   - User support email: Your email
   - Developer contact: Your email
   - Click "Save and Continue" through the scopes and test users sections
4. Back to Create OAuth client ID:
   - Application type: "Web application"
   - Name: "My Website OAuth"
   - Authorized redirect URIs: Add these:
     - `http://localhost:3000/api/auth/callback` (for development)
     - `https://yourdomain.com/api/auth/callback` (for production)
   - Click "Create"
5. **IMPORTANT**: Copy the Client ID and Client Secret - you'll need these!

## Step 4: Get Your Refresh Token

You need to authorize your application and get a refresh token. Here's how:

### Option A: Using a Node.js Script (Recommended)

1. Create a file called `get-refresh-token.js` in your project root:

```javascript
const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'http://localhost:3000/api/auth/callback'
);

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  prompt: 'consent'
});

console.log('Authorize this app by visiting this url:', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', async (code) => {
  rl.close();
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n=== Your Refresh Token ===');
    console.log(tokens.refresh_token);
    console.log('\nAdd this to your .env.local file as GOOGLE_REFRESH_TOKEN');
  } catch (error) {
    console.error('Error retrieving access token', error);
  }
});
```

2. Replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with your actual credentials
3. Run the script:
   ```bash
   node get-refresh-token.js
   ```
4. Visit the URL shown in the terminal
5. Authorize the application
6. Copy the code from the redirect URL and paste it into the terminal
7. Copy the refresh token that's displayed

### Option B: Using OAuth Playground

1. Go to [Google OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Click the gear icon (⚙️) in the top right
3. Check "Use your own OAuth credentials"
4. Enter your Client ID and Client Secret
5. In the left sidebar, find "Calendar API v3"
6. Select `https://www.googleapis.com/auth/calendar`
7. Click "Authorize APIs"
8. Sign in and allow access
9. Click "Exchange authorization code for tokens"
10. Copy the "Refresh token"

## Step 5: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your credentials in `.env.local`:
   ```env
   GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your-client-secret
   GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback
   GOOGLE_REFRESH_TOKEN=your-refresh-token
   ```

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your website and click the "Call us" button
3. Fill in the meeting form
4. Submit the form
5. Check your Google Calendar - the event should be created!
6. Check the attendee's email - they should receive a calendar invite

## Troubleshooting

### Error: "invalid_grant"
- Your refresh token may have expired or been revoked
- Generate a new refresh token using the steps above
- Make sure `access_type: 'offline'` and `prompt: 'consent'` are set when generating the auth URL

### Error: "insufficient_permissions"
- Make sure you authorized the correct scope: `https://www.googleapis.com/auth/calendar`
- The refresh token must have calendar access

### Calendar event not appearing
- Check the API response in the browser console
- Verify your credentials in `.env.local`
- Make sure the Google Calendar API is enabled in your Google Cloud project

### Email notifications not sent
- The API parameter `sendUpdates: 'all'` should send notifications
- Check spam folders
- Verify the attendee email is correct

## Production Deployment

When deploying to production:

1. Update the redirect URI in Google Cloud Console:
   - Add `https://yourdomain.com/api/auth/callback`

2. Add environment variables to your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Other platforms: Follow their documentation

3. **SECURITY**: Never commit `.env.local` to version control!
   - It's already in `.gitignore`
   - Store sensitive credentials securely

## Calendar Features

The current implementation:
- ✅ Creates calendar events with title, description, date/time
- ✅ Sends email invitations to attendees
- ✅ Sets reminders (1 day before via email, 30 minutes before via popup)
- ✅ Uses the user's local timezone
- ✅ Supports custom meeting duration

## Next Steps

Consider adding:
- Meeting video conferencing links (Google Meet integration)
- Recurring events support
- Multiple attendees
- Custom calendar selection (not just "primary")
- Availability checking before scheduling
- Calendar event updates/cancellations

## Resources

- [Google Calendar API Documentation](https://developers.google.com/calendar/api/guides/overview)
- [Google Cloud Console](https://console.cloud.google.com/)
- [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
