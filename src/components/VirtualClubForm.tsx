"use client";

import { useState } from "react";

const affinityGroups = [
  "First responder",
  "Nurse / healthcare worker",
  "Teacher / educator",
  "Cancer survivor",
  "New mom",
  "In recovery",
  "Domestic-violence survivor",
  "Veteran / military",
  "Caregiver",
  "Other",
];

export function VirtualClubForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      affinityGroup: formData.get("affinityGroup") as string,
      note: formData.get("note") as string,
    };

    try {
      const response = await fetch("/api/virtual-club", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8 bg-cream rounded-2xl p-8">
        <p className="font-display text-2xl text-navy mb-2">You&apos;re on the list!</p>
        <p className="font-body text-navy/70 leading-relaxed">
          Thank you for your interest in a Gathered Pages virtual book club. We&apos;ll reach out
          with next steps as we form groups.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="vc-name" className="block font-body font-semibold text-navy mb-2">
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="vc-name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="vc-email" className="block font-body font-semibold text-navy mb-2">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="vc-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="vc-affinity" className="block font-body font-semibold text-navy mb-2">
          Which group do you most identify with?
        </label>
        <select
          id="vc-affinity"
          name="affinityGroup"
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy focus-ring focus:border-orange outline-none transition-colors"
        >
          <option value="">Select one…</option>
          {affinityGroups.map((group) => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
        <p className="font-body text-navy/50 text-sm mt-2">
          We use this to group you with women who share a similar story. This is optional.
        </p>
      </div>

      <div>
        <label htmlFor="vc-note" className="block font-body font-semibold text-navy mb-2">
          Anything you&apos;d like us to know? (optional)
        </label>
        <textarea
          id="vc-note"
          name="note"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors resize-none"
          placeholder="Tell us a little about yourself or what you're hoping to find in a book club…"
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
        className="w-full bg-orange hover:bg-orange-light disabled:opacity-60 text-white font-body font-semibold py-3 rounded-full transition-colors focus-ring text-lg"
      >
        {status === "loading" ? "Submitting…" : "Join a Virtual Book Club"}
      </button>
    </form>
  );
}
