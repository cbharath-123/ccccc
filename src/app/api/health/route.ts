import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  checks: {
    database: {
      status: 'connected' | 'disconnected' | 'error';
      responseTime?: number;
      message?: string;
    };
    vertexAI: {
      status: 'connected' | 'disconnected' | 'error';
      responseTime?: number;
      message?: string;
    };
  };
  metadata: {
    version: string;
    environment: string;
  };
}

// Check Supabase connection
async function checkSupabaseConnection(): Promise<{
  status: 'connected' | 'disconnected' | 'error';
  responseTime: number;
  message?: string;
}> {
  const startTime = Date.now();
  
  try {
    // In production, use actual Supabase client
    // Example: const { data, error } = await supabase.from('health_check').select('count').single();
    
    // For demo, simulate connection check
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return {
        status: 'disconnected',
        responseTime: Date.now() - startTime,
        message: 'Supabase credentials not configured'
      };
    }

    // Simulate connection check
    await new Promise(resolve => setTimeout(resolve, 50));
    
    return {
      status: 'connected',
      responseTime: Date.now() - startTime,
      message: 'Supabase connection successful'
    };
  } catch (error) {
    return {
      status: 'error',
      responseTime: Date.now() - startTime,
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Check Vertex AI connection
async function checkVertexAIConnection(): Promise<{
  status: 'connected' | 'disconnected' | 'error';
  responseTime: number;
  message?: string;
}> {
  const startTime = Date.now();
  
  try {
    // In production, use actual Vertex AI client
    // Example: Test API authentication and availability
    
    const vertexProjectId = process.env.VERTEX_PROJECT_ID;
    const vertexLocation = process.env.VERTEX_LOCATION;
    
    if (!vertexProjectId || !vertexLocation) {
      return {
        status: 'disconnected',
        responseTime: Date.now() - startTime,
        message: 'Vertex AI credentials not configured'
      };
    }

    // Simulate connection check
    await new Promise(resolve => setTimeout(resolve, 50));
    
    return {
      status: 'connected',
      responseTime: Date.now() - startTime,
      message: 'Vertex AI connection successful'
    };
  } catch (error) {
    return {
      status: 'error',
      responseTime: Date.now() - startTime,
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Main GET handler
export async function GET(request: NextRequest) {
  const requestStartTime = Date.now();
  const timestamp = new Date().toISOString();
  
  // Log incoming request
  console.log('='.repeat(60));
  console.log(`[HEALTH CHECK] ${timestamp}`);
  console.log(`Method: GET`);
  console.log(`URL: ${request.url}`);
  console.log(`User-Agent: ${request.headers.get('user-agent') || 'Unknown'}`);
  console.log(`IP: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}`);
  console.log('='.repeat(60));

  try {
    // Perform health checks in parallel
    const [databaseCheck, vertexAICheck] = await Promise.all([
      checkSupabaseConnection(),
      checkVertexAIConnection()
    ]);

    // Determine overall health status
    let overallStatus: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';
    
    if (databaseCheck.status === 'error' || vertexAICheck.status === 'error') {
      overallStatus = 'unhealthy';
    } else if (databaseCheck.status === 'disconnected' || vertexAICheck.status === 'disconnected') {
      overallStatus = 'degraded';
    }

    // Calculate uptime (in production, track actual server start time)
    const uptime = process.uptime();

    // Build response
    const response: HealthCheckResponse = {
      status: overallStatus,
      timestamp,
      uptime,
      checks: {
        database: databaseCheck,
        vertexAI: vertexAICheck
      },
      metadata: {
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development'
      }
    };

    // Calculate and log response time
    const responseTime = Date.now() - requestStartTime;
    
    console.log(`[HEALTH CHECK RESPONSE] Status: ${overallStatus}`);
    console.log(`Database: ${databaseCheck.status} (${databaseCheck.responseTime}ms)`);
    console.log(`Vertex AI: ${vertexAICheck.status} (${vertexAICheck.responseTime}ms)`);
    console.log(`Total Response Time: ${responseTime}ms`);
    console.log(`Timestamp: ${timestamp}`);
    console.log('='.repeat(60));

    // Return appropriate status code based on health
    const statusCode = overallStatus === 'healthy' ? 200 : overallStatus === 'degraded' ? 503 : 500;

    return NextResponse.json(response, { 
      status: statusCode,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Response-Time': `${responseTime}ms`
      }
    });

  } catch (error) {
    const responseTime = Date.now() - requestStartTime;
    
    console.error(`[HEALTH CHECK ERROR] ${timestamp}`);
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(`Response Time: ${responseTime}ms`);
    console.error('='.repeat(60));

    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp,
        error: 'Health check failed',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        responseTime
      },
      { 
        status: 500,
        headers: {
          'X-Response-Time': `${responseTime}ms`
        }
      }
    );
  }
}

// Handle unsupported methods
export async function POST() {
  const timestamp = new Date().toISOString();
  console.log(`[HEALTH CHECK] ${timestamp} - Rejected POST request`);
  
  return NextResponse.json(
    { error: 'Method not allowed. Use GET instead.' },
    { status: 405 }
  );
}

export async function PUT() {
  const timestamp = new Date().toISOString();
  console.log(`[HEALTH CHECK] ${timestamp} - Rejected PUT request`);
  
  return NextResponse.json(
    { error: 'Method not allowed. Use GET instead.' },
    { status: 405 }
  );
}

export async function DELETE() {
  const timestamp = new Date().toISOString();
  console.log(`[HEALTH CHECK] ${timestamp} - Rejected DELETE request`);
  
  return NextResponse.json(
    { error: 'Method not allowed. Use GET instead.' },
    { status: 405 }
  );
}
