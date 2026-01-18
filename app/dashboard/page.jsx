"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/products/my-products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    }
  }, [status]);

  if (status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">Dashboard</h1>
          {session?.user?.email && (
            <p className="text-sm text-neutral-600">Signed in as {session.user.email}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/products/new"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Add Product
          </Link>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-neutral-600">Products</div>
          <div className="mt-2 text-2xl font-semibold">{products.length}</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-neutral-600">Sales</div>
          <div className="mt-2 text-2xl font-semibold">0</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-neutral-600">Revenue</div>
          <div className="mt-2 text-2xl font-semibold">$0</div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">My Products</h2>
          {/* <Link
            href="/dashboard/products"
            className="text-sm text-neutral-700 hover:text-neutral-900"
          >
            View all
          </Link> */}
        </div>
        {loading ? (
          <div className="text-center text-neutral-600">Loading products...</div>
        ) : products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <div
                key={product._id}
                className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={225}
                    className="aspect-4/3 w-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="aspect-4/3 w-full rounded-lg bg-neutral-100" />
                )}
                <div className="mt-4">
                  <div className="text-sm font-medium text-neutral-900">
                    {product.name}
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Stock: {product.stock}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-900">
                    ${product.price.toFixed(2)}
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-900 hover:border-neutral-400">
                      Edit
                    </button>
                    <button className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-900 hover:border-neutral-400">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-neutral-600">
            No products yet. <Link href="/dashboard/products/new" className="text-neutral-900 underline">Add your first product</Link>
          </div>
        )}
      </div>
    </div>
  );
}