import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

// GET single product by ID
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('trion-mart');
    const product = await db.collection('products').findOne({ 
      _id: new ObjectId(id) 
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product', details: error.message },
      { status: 500 }
    );
  }
}
