export default function DashboardProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900">My Products</h1>
        <a
          href="/dashboard/products/new"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
        >
          Add Product
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <div className="aspect-[4/3] w-full rounded-lg bg-neutral-100" />
            <div className="mt-4">
              <div className="text-sm font-medium text-neutral-900">
                Product {i + 1}
              </div>
              <div className="mt-1 text-sm text-neutral-600">In stock</div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm font-semibold text-neutral-900">$39.00</div>
              <button className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

