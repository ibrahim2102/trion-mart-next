import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db('trion-mart');
    const products = await db
      .collection('products')
      .find({ userId: session.user.email })
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching user products:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}