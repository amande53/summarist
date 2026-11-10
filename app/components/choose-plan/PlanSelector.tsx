"use client";

import { useState } from "react";
import PlanCard from "./PlanCard";
import OrDivider from "../UI/OrDivider";

type Plan = "yearly" | "monthly";
export default function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("yearly");
  return (
    <div>
      <PlanCard
        title="Premium Plus Yearly"
        price="$99.99/year"
        trial="7-day free trial included"
        isActive={selectedPlan === "yearly"}
        onClick={() => {
          setSelectedPlan("yearly");
        }}
      />
      <div className="max-w-60 mx-auto py-2">
        <OrDivider />
      </div>
      <PlanCard
        title="Premium Monthly"
        price="$9.99/month"
        trial="No trial included"
        isActive={selectedPlan === "monthly"}
        onClick={() => {
          setSelectedPlan("monthly");
        }}
      />
      <div className="flex flex-col items-center gap-4 py-8 bg-white sticky bottom-0 z-1">
        <button
          type="button"
          className="btn w-75"
        >
          {selectedPlan === "yearly" ? "Start your 7-day free trial " : "Start your first month"}
        </button>
        <p className="text-xs text-muted text-center">
          {selectedPlan === "yearly"
            ? "Cancel your trial at any time before it ends, and you won't be charged."
            : "30-day money back guarantee, no questions asked."}
        </p>
      </div>
    </div>
  );
}
