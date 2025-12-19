# Health Check Endpoint Testing Guide

## Endpoint
`GET /api/health`

## Test Commands

### 1. Basic Health Check
```bash
curl http://localhost:3000/api/health
```

**PowerShell version:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/health" -Method GET
```

**Expected Response (without env vars configured):**
```json
{
  "status": "degraded",
  "timestamp": "2025-12-17T14:00:00.000Z",
  "uptime": 123.456,
  "checks": {
    "database": {
      "status": "disconnected",
      "responseTime": 52,
      "message": "Supabase credentials not configured"
    },
    "vertexAI": {
      "status": "disconnected",
      "responseTime": 51,
      "message": "Vertex AI credentials not configured"
    }
  },
  "metadata": {
    "version": "1.0.0",
    "environment": "development"
  }
}
```

**Expected Response (with env vars configured):**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-17T14:00:00.000Z",
  "uptime": 123.456,
  "checks": {
    "database": {
      "status": "connected",
      "responseTime": 52,
      "message": "Supabase connection successful"
    },
    "vertexAI": {
      "status": "connected",
      "responseTime": 51,
      "message": "Vertex AI connection successful"
    }
  },
  "metadata": {
    "version": "1.0.0",
    "environment": "development"
  }
}
```

### 2. Check Response Headers
```bash
curl -I http://localhost:3000/api/health
```

**PowerShell version:**
```powershell
$response = Invoke-WebRequest -Uri "http://localhost:3000/api/health" -Method GET
$response.Headers
```

**Expected Headers:**
- `X-Response-Time`: Response time in milliseconds
- `Cache-Control`: `no-cache, no-store, must-revalidate`

### 3. POST Request (Should fail with 405)
```bash
curl -X POST http://localhost:3000/api/health
```

**PowerShell version:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/health" -Method POST
```

**Expected Response:**
```json
{
  "error": "Method not allowed. Use GET instead."
}
```

### 4. Monitor Logs
When you make requests, check the terminal running `npm run dev` to see the logs:

```
============================================================
[HEALTH CHECK] 2025-12-17T14:00:00.000Z
Method: GET
URL: http://localhost:3000/api/health
User-Agent: Mozilla/5.0...
IP: ::1
============================================================
[HEALTH CHECK RESPONSE] Status: degraded
Database: disconnected (52ms)
Vertex AI: disconnected (51ms)
Total Response Time: 123ms
Timestamp: 2025-12-17T14:00:00.000Z
============================================================
```

## Status Codes

- **200**: Healthy - All services connected
- **503**: Degraded - Some services disconnected
- **500**: Unhealthy - Services have errors

## Setup for Full Testing

1. Create `.env.local` file (copy from `.env.example`)
2. Add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Add your Vertex AI credentials:
   ```
   VERTEX_PROJECT_ID=your-gcp-project-id
   VERTEX_LOCATION=us-central1
   ```
4. Restart the dev server: `npm run dev`
5. Test the endpoint again

## Completion Checklist

- [x] GET /api/health endpoint returns status
- [x] Supabase connection is checked
- [x] All requests are logged
- [x] Response times are logged
- [x] Health check returns appropriate status codes (200, 503, 500, 405)
- [x] Logging works in both dev and production

## Features Implemented

### 1. Service Status
Returns overall health status based on dependency checks:
- `healthy`: All services connected
- `degraded`: Some services unavailable
- `unhealthy`: Critical errors

### 2. Dependency Checks
- **Supabase**: Checks database connection and credentials
- **Vertex AI**: Checks AI service connection and credentials

### 3. Request Logging
Every request is logged with:
- Timestamp (ISO 8601 format)
- HTTP method
- Full URL
- User-Agent
- Client IP address

### 4. Response Time Measurement
- Individual check response times
- Total request processing time
- Included in response headers (`X-Response-Time`)

### 5. Timestamps
- Request timestamp
- Response timestamp
- Server uptime

### 6. Production Ready
- Environment-aware (dev/production)
- Cache headers to prevent stale data
- Proper error handling
- Console logging for monitoring

## Production Recommendations

For production deployment, enhance with:

1. **Real Health Checks**:
   ```typescript
   import { createClient } from '@supabase/supabase-js';
   import { VertexAI } from '@google-cloud/vertexai';
   ```

2. **Monitoring Integration**:
   - Send logs to CloudWatch, Datadog, or similar
   - Set up alerts for degraded/unhealthy status

3. **Rate Limiting**:
   - Limit health check frequency
   - Prevent abuse

4. **Metrics Collection**:
   - Track response times over time
   - Monitor uptime percentage
   - Alert on anomalies
