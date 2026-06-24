"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to subscribe");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-body text-navy text-center">
        Thank you for subscribing! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-full border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-orange hover:bg-orange-light disabled:opacity-60 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors focus-ring whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm font-body text-center w-full">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
