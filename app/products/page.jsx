import Link from "next/link";

async function getProducts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
      (process.env.NODE_ENV === 'production' 
        ? 'https://your-domain.com' 
        : 'http://localhost:3000');
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900">Products</h1>
        <div className="text-sm text-neutral-600">
          {products.length} products available
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              ) : (
                <div className="aspect-[4/3] w-full rounded-lg bg-neutral-100" />
              )}
              <div className="mt-4">
                <div className="text-sm font-medium text-neutral-900">
                  {product.name}
                </div>
                <div className="mt-1 text-sm text-neutral-600 line-clamp-2">
                  {product.description}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-semibold text-neutral-900">
                  ${product.price.toFixed(2)}
                </div>
                <Link
                  href={`/products/${product._id}`}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400"
                >
                  View
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-neutral-600">
            No products available
          </div>
        )}
      </div>
    </div>
  );
}

