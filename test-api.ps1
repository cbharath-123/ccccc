# Test script for /api/query endpoint
# Make sure the dev server is running first: npm run dev

Write-Host "Testing /api/query endpoint..." -ForegroundColor Cyan
Write-Host ""

# Test 1: Valid query
Write-Host "Test 1: Valid Query" -ForegroundColor Yellow
try {
    $body = @{ query = "What is Next.js?" } | ConvertTo-Json
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/query" -Method POST -Body $body -ContentType "application/json"
    Write-Host "✓ SUCCESS" -ForegroundColor Green
    Write-Host "Answer: $($response.answer.Substring(0, 100))..."
    Write-Host "Sources: $($response.sources.Count)"
    Write-Host "Processing Time: $($response.metadata.processingTime)ms"
} catch {
    Write-Host "✗ FAILED: $_" -ForegroundColor Red
}

Write-Host ""

# Test 2: Empty query (should fail)
Write-Host "Test 2: Empty Query (should return 400)" -ForegroundColor Yellow
try {
    $body = @{ query = "" } | ConvertTo-Json
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/query" -Method POST -Body $body -ContentType "application/json"
    Write-Host "✗ FAILED: Should have returned error" -ForegroundColor Red
} catch {
    Write-Host "✓ SUCCESS: Correctly rejected empty query" -ForegroundColor Green
    Write-Host "Error: $($_.Exception.Message)"
}

Write-Host ""

# Test 3: Missing query parameter (should fail)
Write-Host "Test 3: Missing Query Parameter (should return 400)" -ForegroundColor Yellow
try {
    $body = @{ } | ConvertTo-Json
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/query" -Method POST -Body $body -ContentType "application/json"
    Write-Host "✗ FAILED: Should have returned error" -ForegroundColor Red
} catch {
    Write-Host "✓ SUCCESS: Correctly rejected missing parameter" -ForegroundColor Green
    Write-Host "Error: $($_.Exception.Message)"
}

Write-Host ""

# Test 4: GET request (should fail with 405)
Write-Host "Test 4: GET Request (should return 405)" -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/query" -Method GET
    Write-Host "✗ FAILED: Should have returned error" -ForegroundColor Red
} catch {
    Write-Host "✓ SUCCESS: Correctly rejected GET method" -ForegroundColor Green
    Write-Host "Error: $($_.Exception.Message)"
}

Write-Host ""
Write-Host "Tests complete!" -ForegroundColor Cyan
