import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

let client;
let clientPromise;

if (!uri) {
  // Don't throw error at module load time - throw when actually used
  clientPromise = Promise.reject(new Error('MONGODB_URI is not defined in environment variables'));
} else {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect().catch((error) => {
        console.error('MongoDB connection error:', error.message);
        throw error;
      });
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect().catch((error) => {
      console.error('MongoDB connection error:', error.message);
      throw error;
    });
  }
}

export default clientPromise;