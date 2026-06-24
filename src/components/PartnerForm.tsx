"use client";

import { useState } from "react";

const organizationTypes = [
  "Women's Shelter",
  "Recovery / Rehabilitation Center",
  "Mental Health Facility",
  "Women's Prison / Correctional Facility",
  "Transitional Housing Program",
  "School / Educational Institution",
  "Yoga Studio / Wellness Center",
  "First Responder Organization",
  "Cancer Support Group",
  "New Mothers Group",
  "Other",
];

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const data = {
      organizationName: formData.get("organizationName") as string,
      organizationType: formData.get("organizationType") as string,
      location: formData.get("location") as string,
      contactName: formData.get("contactName") as string,
      email: formData.get("email") as string,
      womenServed: formData.get("womenServed") as string,
      description: formData.get("description") as string,
    };

    try {
      const response = await fetch("/api/partner", {
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
        <p className="font-display text-2xl text-navy mb-2">Application Received!</p>
        <p className="font-body text-navy/70 leading-relaxed">
          Thank you for applying to receive book club boxes. We&apos;ll review your application
          and reach out within 2–3 weeks.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="org-name" className="block font-body font-semibold text-navy mb-2">
            Organization Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="org-name"
            name="organizationName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
            placeholder="e.g. Hope House Women's Shelter"
          />
        </div>
        <div>
          <label htmlFor="org-type" className="block font-body font-semibold text-navy mb-2">
            Organization Type <span aria-hidden="true">*</span>
          </label>
          <select
            id="org-type"
            name="organizationType"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy focus-ring focus:border-orange outline-none transition-colors"
          >
            <option value="">Select a type…</option>
            {organizationTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="org-location" className="block font-body font-semibold text-navy mb-2">
          City, State <span aria-hidden="true">*</span>
        </label>
        <input
          id="org-location"
          name="location"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
          placeholder="e.g. Denver, CO"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block font-body font-semibold text-navy mb-2">
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="contactName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
            placeholder="Contact person name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-body font-semibold text-navy mb-2">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
            placeholder="you@organization.org"
          />
        </div>
      </div>

      <div>
        <label htmlFor="women-served" className="block font-body font-semibold text-navy mb-2">
          Approximately how many women does your organization serve?
        </label>
        <input
          id="women-served"
          name="womenServed"
          type="text"
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
          placeholder="e.g. 20–30 residents at a time"
        />
      </div>

      <div>
        <label htmlFor="org-description" className="block font-body font-semibold text-navy mb-2">
          Tell us about your organization and the women you serve
        </label>
        <textarea
          id="org-description"
          name="description"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors resize-none"
          placeholder="Share how your organization supports women and how a book club experience would benefit them…"
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
        {status === "loading" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
