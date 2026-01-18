"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    if (res?.error) {
      setError("Invalid credentials");
      return;
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <button
          type="button"
          onClick={handleGoogleLogin}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "9999px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "4px",
              background:
                "conic-gradient(from 0deg, #4285f4, #34a853, #fbbc05, #ea4335, #4285f4)",
            }}
          />
          <span>Continue with Google</span>
        </button>

        <div style={{ textAlign: "center", color: "#666" }}>or</div>

        <form
          onSubmit={handleCredentialsLogin}
          style={{
            display: "grid",
            gap: "0.75rem",
            padding: "1rem",
            border: "1px solid #eee",
            borderRadius: "0.75rem",
          }}
        >
          <h2 style={{ marginBottom: "0.25rem" }}>Sign in</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "0.6rem 0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #ddd",
            }}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "0.6rem 0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #ddd",
            }}
          />
          {error && (
            <div style={{ color: "#b00020", fontSize: "0.9rem" }}>{error}</div>
          )}
          <button
            type="submit"
            style={{
              padding: "0.6rem 0.75rem",
              borderRadius: "9999px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
