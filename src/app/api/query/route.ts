import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface QueryRequest {
  query: string;
}

interface Source {
  id: string;
  content: string;
  similarity: number;
  metadata?: Record<string, any>;
}

interface QueryResponse {
  answer: string;
  sources: Source[];
  metadata?: {
    processingTime: number;
    model: string;
  };
}

// Simulated vector embeddings function
async function embedQuery(query: string): Promise<number[]> {
  // In production, use OpenAI, Cohere, or similar embedding API
  // For demo, return a mock embedding vector
  return Array(1536).fill(0).map(() => Math.random());
}

// Simulated vector database retrieval
async function retrieveRelevantDocuments(embedding: number[], topK: number = 5): Promise<Source[]> {
  // In production, use Pinecone, Weaviate, ChromaDB, etc.
  // For demo, return mock documents
  const mockDocuments: Source[] = [
    {
      id: 'doc_1',
      content: 'Next.js is a React framework for building full-stack web applications. It provides features like server-side rendering and static site generation.',
      similarity: 0.92,
      metadata: { category: 'framework', date: '2024-01-15' }
    },
    {
      id: 'doc_2',
      content: 'React is a JavaScript library for building user interfaces. It uses a component-based architecture and virtual DOM for efficient rendering.',
      similarity: 0.88,
      metadata: { category: 'library', date: '2024-02-10' }
    },
    {
      id: 'doc_3',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming.',
      similarity: 0.85,
      metadata: { category: 'language', date: '2024-03-05' }
    },
    {
      id: 'doc_4',
      content: 'API routes in Next.js allow you to build your API with serverless functions. They run on the server and can access databases and external APIs.',
      similarity: 0.79,
      metadata: { category: 'feature', date: '2024-04-20' }
    },
    {
      id: 'doc_5',
      content: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS.',
      similarity: 0.73,
      metadata: { category: 'styling', date: '2024-05-12' }
    }
  ];

  // Sort by similarity and return top K
  return mockDocuments.sort((a, b) => b.similarity - a.similarity).slice(0, topK);
}

// Simulated LLM response generation
async function generateAnswer(query: string, context: Source[]): Promise<string> {
  // In production, use OpenAI GPT, Anthropic Claude, or similar LLM API
  // For demo, create a mock response based on context
  
  const contextText = context.map(doc => doc.content).join('\n\n');
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock answer generation
  return `Based on the provided context, here's an answer to "${query}":\n\n` +
         `The relevant information suggests that ${context[0].content.substring(0, 100)}... ` +
         `This is supported by multiple sources in our knowledge base. ` +
         `For more detailed information, please refer to the sources provided.`;
}

// Input validation
function validateQueryRequest(body: any): { valid: boolean; error?: string } {
  if (!body) {
    return { valid: false, error: 'Request body is required' };
  }

  if (typeof body.query !== 'string') {
    return { valid: false, error: 'Query must be a string' };
  }

  if (body.query.trim().length === 0) {
    return { valid: false, error: 'Query cannot be empty' };
  }

  if (body.query.length > 1000) {
    return { valid: false, error: 'Query must be less than 1000 characters' };
  }

  return { valid: true };
}

// Main POST handler
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    // Parse request body
    let body: QueryRequest;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate input
    const validation = validateQueryRequest(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { query } = body;

    // Step 1: Embed the query
    const embedding = await embedQuery(query);

    // Step 2: Retrieve relevant documents from vector database
    const relevantDocuments = await retrieveRelevantDocuments(embedding, 5);

    // Step 3: Build context from retrieved documents
    // (Context is implicitly the relevantDocuments)

    // Step 4: Generate answer using LLM with context
    const answer = await generateAnswer(query, relevantDocuments);

    // Calculate processing time
    const processingTime = Date.now() - startTime;

    // Step 5: Return structured response with answer and sources
    const response: QueryResponse = {
      answer,
      sources: relevantDocuments,
      metadata: {
        processingTime,
        model: 'mock-rag-v1'
      }
    };

    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    // Handle errors gracefully
    console.error('Error processing query:', error);
    
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST instead.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST instead.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST instead.' },
    { status: 405 }
  );
}
