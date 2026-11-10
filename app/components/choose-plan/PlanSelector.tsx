"use client";

import { useState } from "react";
import PlanCard from "./PlanCard";
import OrDivider from "../UI/OrDivider";
import { getCheckoutUrl, PRICE_IDS } from "../../lib/stripe/checkout";
import { app } from "../../lib/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { openModal } from "../../Redux/slices/modalSlice";
import { ImSpinner8 } from "react-icons/im";

type Plan = "yearly" | "monthly";
export default function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("yearly");
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const handleCheckout = async () => {
    if (!user) {
      dispatch(openModal());
      return;
    }

    setIsRedirecting(true);
    try {
      const url = await getCheckoutUrl(app, PRICE_IDS[selectedPlan]);
      window.location.assign(url);
    } catch (error) {
      console.error(error);
      setIsRedirecting(false);
    }
  };

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
          onClick={handleCheckout}
          disabled={isRedirecting}
        >
          {isRedirecting ? (
            <ImSpinner8
              aria-label="Loading"
              className="size-6 text-white animate-spin"
            />
          ) : selectedPlan === "yearly" ? (
            "Start your free 7-day trial"
          ) : (
            "Start your first month"
          )}
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
