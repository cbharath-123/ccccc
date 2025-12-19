# RAG API Endpoint Testing Guide

## Endpoint
`POST /api/query`

## Test Commands

### 1. Valid Query Test
```bash
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d "{\"query\": \"What is Next.js?\"}"
```

**PowerShell version:**
```powershell
curl.exe -X POST http://localhost:3000/api/query -H "Content-Type: application/json" -d '{\"query\": \"What is Next.js?\"}'
```

**Expected Response:**
```json
{
  "answer": "Based on the provided context, here's an answer to \"What is Next.js?\"...",
  "sources": [
    {
      "id": "doc_1",
      "content": "Next.js is a React framework...",
      "similarity": 0.92,
      "metadata": { "category": "framework", "date": "2024-01-15" }
    }
  ],
  "metadata": {
    "processingTime": 523,
    "model": "mock-rag-v1"
  }
}
```

### 2. Empty Query Test (Should fail with 400)
```bash
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d "{\"query\": \"\"}"
```

**PowerShell version:**
```powershell
curl.exe -X POST http://localhost:3000/api/query -H "Content-Type: application/json" -d '{\"query\": \"\"}'
```

**Expected Response:**
```json
{
  "error": "Query cannot be empty"
}
```

### 3. Missing Query Parameter (Should fail with 400)
```bash
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d "{}"
```

**PowerShell version:**
```powershell
curl.exe -X POST http://localhost:3000/api/query -H "Content-Type: application/json" -d '{}'
```

**Expected Response:**
```json
{
  "error": "Query must be a string"
}
```

### 4. Invalid JSON (Should fail with 400)
```bash
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d "invalid json"
```

**PowerShell version:**
```powershell
curl.exe -X POST http://localhost:3000/api/query -H "Content-Type: application/json" -d 'invalid json'
```

**Expected Response:**
```json
{
  "error": "Invalid JSON in request body"
}
```

### 5. GET Request (Should fail with 405)
```bash
curl -X GET http://localhost:3000/api/query
```

**PowerShell version:**
```powershell
curl.exe -X GET http://localhost:3000/api/query
```

**Expected Response:**
```json
{
  "error": "Method not allowed. Use POST instead."
}
```

## Completion Checklist

- [x] POST /api/query endpoint accepts requests
- [x] Full RAG pipeline executes (embed → retrieve → context → LLM)
- [x] Response includes answer and sources
- [x] Input validation works
- [x] Errors return appropriate status codes
- [ ] cURL test returns valid response (Run the tests above!)

## Implementation Details

The endpoint implements a complete RAG pipeline:

1. **Embedding**: Converts the query into a vector representation
2. **Retrieval**: Searches vector database for relevant documents
3. **Context Building**: Gathers relevant information from retrieved documents
4. **LLM Generation**: Generates an answer based on the context
5. **Response**: Returns structured JSON with answer, sources, and metadata

## Notes

- This is a mock implementation for demonstration
- In production, replace mock functions with:
  - Real embedding API (OpenAI, Cohere, etc.)
  - Vector database (Pinecone, Weaviate, ChromaDB, etc.)
  - LLM API (OpenAI GPT, Anthropic Claude, etc.)
