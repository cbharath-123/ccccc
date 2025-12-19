# Test Health Check Endpoint
# Make sure the dev server is running first: npm run dev

Write-Host "`n=== HEALTH CHECK ENDPOINT TESTS ===" -ForegroundColor Cyan
Write-Host ""

# Test 1: Basic GET request
Write-Host "Test 1: GET /api/health (Basic Health Check)" -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/health" -Method GET -ErrorAction SilentlyContinue
    if ($null -eq $response) {
        $webResponse = Invoke-WebRequest -Uri "http://localhost:3000/api/health" -Method GET -UseBasicParsing 2>$null
        $response = $webResponse.Content | ConvertFrom-Json
    }
    Write-Host "SUCCESS" -ForegroundColor Green
    Write-Host "Status: $($response.status)"
    Write-Host "Timestamp: $($response.timestamp)"
    $uptimeRounded = [math]::Round($response.uptime, 2)
    Write-Host "Uptime: $uptimeRounded seconds"
    $dbStatus = $response.checks.database.status
    $dbTime = $response.checks.database.responseTime
    Write-Host "Database: $dbStatus - Response time: $dbTime ms"
    $aiStatus = $response.checks.vertexAI.status
    $aiTime = $response.checks.vertexAI.responseTime
    Write-Host "Vertex AI: $aiStatus - Response time: $aiTime ms"
    Write-Host "Environment: $($response.metadata.environment)"
    Write-Host "Version: $($response.metadata.version)"
} catch {
    $errorMsg = $_.Exception.Message
    Write-Host "FAILED: $errorMsg" -ForegroundColor Red
}

Write-Host ""

# Test 2: Check response headers
Write-Host "Test 2: Check Response Headers" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/api/health" -Method GET -UseBasicParsing
    Write-Host "SUCCESS" -ForegroundColor Green
    Write-Host "Status Code: $($response.StatusCode)"
    Write-Host "Response Time: $($response.Headers['X-Response-Time'])"
    Write-Host "Cache-Control: $($response.Headers['Cache-Control'])"
} catch {
    Write-Host "✗ FAILED: $_" -ForegroundColor Red
}

Write-Host ""

# Test 3: POST request (should fail)
Write-Host "Test 3: POST Request (should return 405)" -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/health" -Method POST
    Write-Host "✗ FAILED: Should have returned error" -ForegroundColor Red
} catch {
    Write-Host "✓ SUCCESS: Correctly rejected POST method" -ForegroundColor Green
    Write-Host "Error: Method not allowed"
}

Write-Host ""

# Test 4: Multiple requests to test logging
Write-Host "Test 4: Multiple Requests (Testing Logging)" -ForegroundColor Yellow
Write-Host "Making 3 requests... Check server logs for output" -ForegroundColor Gray
$successCount = 0
for ($i = 1; $i -le 3; $i++) {
    try {
        $response = Invoke-RestMethod -Uri "http://localhost:3000/api/health" -Method GET
        $successCount++
        Write-Host "  Request $i : ✓ Status=$($response.status)" -ForegroundColor Green
        Start-Sleep -Milliseconds 500
    } catch {
        Write-Host "  Request $i : ✗ Failed" -ForegroundColor Red
    }
}
Write-Host "$successCount/3 requests successful"

Write-Host ""
Write-Host "=== Tests Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Check your terminal running 'npm run dev' to see:" -ForegroundColor Gray
Write-Host "  - Request timestamps" -ForegroundColor Gray
Write-Host "  - User agent and IP logging" -ForegroundColor Gray
Write-Host "  - Response times for each check" -ForegroundColor Gray
Write-Host "  - Overall processing times" -ForegroundColor Gray
Write-Host ""
