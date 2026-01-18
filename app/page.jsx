import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                Shop smarter with Trion Mart
              </h1>
              <p className="text-neutral-600 md:text-lg">
                Discover curated products, seamless checkout, and personalized recommendations built with modern web technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Browse Products
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400"
                >
                  Go to Dashboard
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  <span className="inline-block h-9 w-9 rounded-full border border-white bg-gradient-to-br from-pink-300 to-pink-500" />
                  <span className="inline-block h-9 w-9 rounded-full border border-white bg-gradient-to-br from-blue-300 to-blue-500" />
                  <span className="inline-block h-9 w-9 rounded-full border border-white bg-gradient-to-br from-amber-300 to-amber-500" />
                </div>
                <p className="text-sm text-neutral-600">
                  Trusted by shoppers worldwide
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="grid h-full w-full grid-cols-3 gap-2 p-4">
                  <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-2xl">💻</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-2xl">📱</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <div className="text-white text-2xl">⌚</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <div className="text-white text-2xl">🎧</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <div className="text-white text-2xl">🖥️</div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                    <div className="text-white text-2xl">⌨️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-xl">🚚</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">Fast delivery</h3>
            <p className="text-neutral-600">
              Reliable shipping options ensure your items arrive quickly and securely.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <span className="text-xl">🔒</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">Secure payments</h3>
            <p className="text-neutral-600">
              Industry‑standard security protects your transactions at every step.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <span className="text-xl">⭐</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">Quality products</h3>
            <p className="text-neutral-600">
              Curated catalog featuring trusted brands and top-rated items.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-neutral-900">Featured Products</h2>
            <p className="mt-2 text-neutral-600">
              Explore our handpicked selection of trending tech products
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Laptops", icon: "💻", desc: "High-performance laptops" },
              { name: "Smartphones", icon: "📱", desc: "Latest mobile devices" },
              { name: "Wearables", icon: "⌚", desc: "Smart watches & bands" },
              { name: "Audio", icon: "🎧", desc: "Headphones & speakers" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">{item.name}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-neutral-900">Shop by Category</h2>
          <p className="mt-2 text-neutral-600">
            Find exactly what you're looking for
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Computers & Laptops", icon: "🖥️", count: "50+ items" },
            { name: "Mobile Phones", icon: "📱", count: "30+ items" },
            { name: "Accessories", icon: "⌨️", count: "100+ items" },
            { name: "Audio Devices", icon: "🎧", count: "40+ items" },
            { name: "Smart Home", icon: "🏠", count: "25+ items" },
            { name: "Gaming Gear", icon: "🎮", count: "35+ items" },
          ].map((category, index) => (
            <Link
              key={index}
              href="/products"
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-400 hover:shadow-md"
            >
              <div className="mb-3 text-3xl">{category.icon}</div>
              <h3 className="mb-1 text-lg font-semibold text-neutral-900 group-hover:text-neutral-700">
                {category.name}
              </h3>
              <p className="text-sm text-neutral-600">{category.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold">10K+</div>
              <div className="mt-2 text-neutral-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="mt-2 text-neutral-400">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2 text-neutral-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">24/7</div>
              <div className="mt-2 text-neutral-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-neutral-900">What Our Customers Say</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "Tech Enthusiast",
              text: "Amazing selection of products and super fast delivery. Highly recommended!",
              rating: "⭐⭐⭐⭐⭐",
            },
            {
              name: "Mike Chen",
              role: "Developer",
              text: "Great prices and excellent customer service. Found everything I needed.",
              rating: "⭐⭐⭐⭐⭐",
            },
            {
              name: "Emily Davis",
              role: "Designer",
              text: "Love the quality of products here. My go-to store for all tech needs!",
              rating: "⭐⭐⭐⭐⭐",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-lg">{testimonial.rating}</div>
              <p className="mb-4 text-neutral-700">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900">
                  Start shopping today
                </h2>
                <p className="mt-2 text-neutral-600">
                  Sign in to personalize your experience and access your dashboard.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-end">
                <Link
                  href="/login"
                  className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Sign in
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

