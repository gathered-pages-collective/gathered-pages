"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="font-display text-2xl text-navy mb-2">Message Sent!</p>
        <p className="font-body text-navy/70">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block font-body font-semibold text-navy mb-2">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block font-body font-semibold text-navy mb-2">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block font-body font-semibold text-navy mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 font-body text-sm">
          Something went wrong. Please try again or email jamie@gatheredpages.org directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-orange hover:bg-orange-light disabled:opacity-60 text-white font-body font-semibold py-3 rounded-full transition-colors focus-ring"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
