"use client";

import { useState } from "react";

type DonationType = "one-time" | "monthly";

const oneTimeAmounts = [
  { amount: 25, label: "Reading materials toward a box" },
  { amount: 50, label: "A start toward a complete box" },
  { amount: 100, label: "Over half a complete box" },
  { amount: 250, label: "A full box, with extra to spare" },
];

const monthlyAmounts = [
  { amount: 15, label: "About one box a year" },
  { amount: 30, label: "About two boxes a year" },
  { amount: 50, label: "A new box every few months" },
  { amount: 100, label: "Six or more boxes a year" },
];

// Standard Stripe rate (2.9% + 30¢). Grossing up by this guarantees the full
// intended gift lands after fees; the nonprofit discount only ever leaves a surplus.
const stripePercentageFee = 0.029;
const stripeFixedFeeCents = 30;

function calculateProcessingFeeCents(netAmountCents: number): number {
  const grossedUpCents = Math.round((netAmountCents + stripeFixedFeeCents) / (1 - stripePercentageFee));
  return grossedUpCents - netAmountCents;
}

export function DonateAmountPicker() {
  const [type, setType] = useState<DonationType>("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [coverFees, setCoverFees] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amounts = type === "monthly" ? monthlyAmounts : oneTimeAmounts;
  const baseAmountCents = customAmount ? Math.round(parseFloat(customAmount) * 100) : selectedAmount * 100;
  const feeCents = coverFees && baseAmountCents >= 100 ? calculateProcessingFeeCents(baseAmountCents) : 0;
  const finalAmount = baseAmountCents + feeCents;
  const buttonAmountLabel = feeCents > 0 ? `$${(finalAmount / 100).toFixed(2)}` : `$${customAmount || selectedAmount}`;

  async function handleDonate() {
    if (finalAmount < 100) {
      setError("Minimum donation is $1.00");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountCents: finalAmount, mode: type, coverFees }),
      });

      if (!response.ok) throw new Error("Failed to create session");

      const { url } = await response.json() as { url: string };
      window.location.href = url;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto">
      {/* Toggle */}
      <div className="flex rounded-full bg-cream p-1 mb-8" role="group" aria-label="Donation frequency">
        <button
          onClick={() => setType("monthly")}
          className={`flex-1 py-2 rounded-full font-body font-semibold text-sm transition-colors focus-ring ${
            type === "monthly"
              ? "bg-navy text-white"
              : "text-navy hover:bg-cream-dark"
          }`}
          aria-pressed={type === "monthly"}
        >
          Give Monthly
        </button>
        <button
          onClick={() => setType("one-time")}
          className={`flex-1 py-2 rounded-full font-body font-semibold text-sm transition-colors focus-ring ${
            type === "one-time"
              ? "bg-navy text-white"
              : "text-navy hover:bg-cream-dark"
          }`}
          aria-pressed={type === "one-time"}>
          Give Once
        </button>
      </div>

      {type === "monthly" && (
        <p className="font-body text-navy/60 text-sm text-center -mt-4 mb-6">
          Monthly donors are the backbone of our mission. Cancel anytime.
        </p>
      )}

      {/* Amount grid */}
      <div className="grid grid-cols-2 gap-3 mb-4" role="group" aria-label="Donation amount">
        {amounts.map(({ amount, label }) => (
          <button
            key={amount}
            onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
            className={`p-4 rounded-xl border-2 text-left transition-all focus-ring ${
              selectedAmount === amount && !customAmount
                ? "border-orange bg-orange/5"
                : "border-cream-dark hover:border-orange/40"
            }`}
            aria-pressed={selectedAmount === amount && !customAmount}
          >
            <span className="font-display text-2xl font-semibold text-navy block">
              ${amount}{type === "monthly" && <span className="text-sm font-body font-normal text-navy/50">/mo</span>}
            </span>
            <span className="font-body text-xs text-navy/60 mt-1 block">{label}</span>
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="mb-6">
        <label htmlFor="custom-amount" className="sr-only">Custom donation amount in dollars</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-navy/50 text-lg" aria-hidden="true">$</span>
          <input
            id="custom-amount"
            type="number"
            min="1"
            step="1"
            value={customAmount}
            onChange={(event) => { setCustomAmount(event.target.value); setSelectedAmount(0); }}
            placeholder="Other amount"
            className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-cream-dark bg-white font-body text-navy placeholder:text-navy/40 focus-ring focus:border-orange outline-none transition-colors"
          />
        </div>
      </div>

      {/* Cover the processing fee */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <input
          type="checkbox"
          checked={coverFees}
          onChange={(event) => setCoverFees(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-cream-dark accent-orange focus-ring"
        />
        <span className="font-body text-sm text-navy/70 leading-snug">
          Cover the payment processing fee{feeCents > 0 && ` (+$${(feeCents / 100).toFixed(2)})`} so 100% of my gift reaches women in need.
        </span>
      </label>

      {error && <p className="text-red-600 font-body text-sm mb-4">{error}</p>}

      <button
        onClick={handleDonate}
        disabled={loading}
        className="w-full bg-orange hover:bg-orange-light disabled:opacity-60 text-white font-body font-semibold py-4 rounded-full transition-colors focus-ring text-lg"
      >
        {loading
          ? "Redirecting…"
          : type === "monthly"
          ? `Give ${buttonAmountLabel}/month`
          : `Donate ${buttonAmountLabel}`}
      </button>

      <p className="font-body text-xs text-navy/40 text-center mt-4">
        Secure payment via Stripe. Your donation is tax-deductible.
      </p>
    </div>
  );
}
