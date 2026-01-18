import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

async function getProduct(id) {
  try {
    if (!id || !ObjectId.isValid(id)) {
      return null;
    }

    const client = await clientPromise;
    const db = client.db('trion-mart');
    const product = await db.collection('products').findOne({ 
      _id: new ObjectId(id) 
    });

    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}


export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link
        href="/products"
        className="mb-6 inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900"
      >
        ← Back to Products
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="aspect-square w-full rounded-lg object-cover"
            />
          ) : (
            <div className="aspect-square w-full rounded-lg bg-neutral-100" />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-neutral-900">
            {product.name}
          </h1>
          
          <div className="mt-4">
            <div className="text-3xl font-semibold text-neutral-900">
              ${product.price.toFixed(2)}
            </div>
            <div className="mt-2 text-sm text-neutral-600">
              {product.stock > 0 ? (
                <span className="text-green-600">In Stock ({product.stock} available)</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-neutral-900">Description</h2>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              disabled={product.stock === 0}
              className={`flex-1 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors ${
                product.stock > 0
                  ? 'bg-neutral-900 hover:bg-neutral-800'
                  : 'bg-neutral-400 cursor-not-allowed'
              }`}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-400">
              Add to Wishlist
            </button>
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-6">
            <div className="space-y-3 text-sm text-neutral-600">
              <div className="flex justify-between">
                <span>Product ID:</span>
                <span className="font-mono text-neutral-900">{product._id.toString()}</span>
              </div>
              {product.createdAt && (
                <div className="flex justify-between">
                  <span>Added:</span>
                  <span className="text-neutral-900">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
