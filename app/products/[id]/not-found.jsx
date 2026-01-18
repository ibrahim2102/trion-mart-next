import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-neutral-900">Product Not Found</h1>
        <p className="mt-4 text-neutral-600">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm text-white hover:bg-neutral-800"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
