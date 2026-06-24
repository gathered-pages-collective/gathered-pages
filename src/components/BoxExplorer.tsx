"use client";

import { useState } from "react";

type BoxItem = {
  icon: string;
  name: string;
  detail: string;
};

const items: BoxItem[] = [
  {
    icon: "📖",
    name: "A thoughtfully chosen book",
    detail: "Selected to spark meaningful conversation and connection",
  },
  {
    icon: "📓",
    name: "A journal guide",
    detail: "For personal reflection and processing",
  },
  {
    icon: "✏️",
    name: "Pens",
    detail: "Quality writing tools from women-owned suppliers",
  },
  {
    icon: "🎨",
    name: "Women Art",
    detail: "Painted by women artists in the area to support local women artists",
  },
  {
    icon: "💬",
    name: "Discussion guide",
    detail: "Questions and prompts to guide group conversation",
  },
  {
    icon: "🏷️",
    name: "Business spotlights",
    detail: "Cards featuring the women-owned businesses in the box",
  },
];

export function BoxExplorer() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? items[active] : null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* The box — an open tray of compartments */}
      <div className="rounded-3xl bg-orange/10 border border-orange/20 p-3 sm:p-4 shadow-inner">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.name}
                type="button"
                aria-label={item.name}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                onClick={() => setActive((current) => (current === index ? null : index))}
                className={`flex flex-col items-center justify-center text-center rounded-2xl bg-white px-3 py-7 transition-all duration-200 focus-ring ${
                  isActive
                    ? "ring-2 ring-orange -translate-y-1 shadow-lg"
                    : "shadow-sm hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                <span className="text-4xl" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="font-display text-navy font-semibold text-sm mt-3 leading-snug">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Shared caption */}
      <div
        aria-live="polite"
        className="mt-6 min-h-[4.5rem] flex items-center justify-center px-4 text-center"
      >
        {current ? (
          <p className="font-body text-navy/70 text-lg max-w-xl">
            <span className="font-display text-navy font-bold">{current.name}</span>
            {" — "}
            {current.detail}
          </p>
        ) : (
          <p className="font-body text-navy/50 text-sm">
            Hover or tap a compartment to see what&apos;s inside.
          </p>
        )}
      </div>
    </div>
  );
}
