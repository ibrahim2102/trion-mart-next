import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

// GET all products
export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('trion-mart');
    const products = await db.collection('products').find({}).toArray();
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products', details: error.message },
      { status: 500 }
    );
  }
}

// POST create new product
export async function POST(req) {
  try {
    // Get session with proper headers for App Router
    const headersList = await req.headers;
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, price, stock, description, image } = body;

    if (!name || !price || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('trion-mart');
    
    const product = {
      name,
      price: parseFloat(price),
      stock: parseInt(stock) || 0,
      description,
      image: image || '',
      userId: session.user.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection('products').insertOne(product);
    
    return NextResponse.json(
      { success: true, product: { ...product, _id: result.insertedId } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    // Return more detailed error for debugging
    return NextResponse.json(
      { 
        error: 'Failed to create product',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
