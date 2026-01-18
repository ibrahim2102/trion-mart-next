"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // For base64 encoding (stored in MongoDB)
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          stock,
          description: desc,
          image,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        router.push("/dashboard");
      } else {
        console.error("Error response:", data);
        alert(`Error: ${data.error}\n${data.message || ''}\n${data.details || ''}`);
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert(`Failed to create product: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-neutral-900">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-2">
          <label className="text-sm text-neutral-700">Name</label>
          <input
            className="rounded-lg border border-neutral-300 px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-700">Price</label>
          <input
            type="number"
            step="0.01"
            className="rounded-lg border border-neutral-300 px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-700">Stock</label>
          <input
            type="number"
            className="rounded-lg border border-neutral-300 px-3 py-2"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-700">Description</label>
          <textarea
            className="rounded-lg border border-neutral-300 px-3 py-2"
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-700">Image</label>
          <input
            type="file"
            accept="image/*"
            className="rounded-lg border border-neutral-300 px-3 py-2"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-32 w-32 rounded-lg object-cover"
              />
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm text-white hover:bg-neutral-800 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            type="button"
            className="rounded-full border border-neutral-300 px-5 py-2 text-sm text-neutral-900 hover:border-neutral-400"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

