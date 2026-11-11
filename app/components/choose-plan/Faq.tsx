"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const faqs = [
  {
    question: "How does the free 7-day trial work?",
    answer:
      "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.",
  },
  {
    question: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
    answer:
      "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
  },
  {
    question: "What's included in the Premium plan?",
    answer:
      "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.",
  },
  {
    question: "Can I cancel during my trial or subscription?",
    answer:
      "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.",
  },
];
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div>
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={faq.question}
            className="border-b border-[#ddd] mb-2 last:mb-0"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex justify-between items-center gap-2 w-full py-6 text-left cursor-pointer text-2xl font-medium text-navy"
              >
                {faq.question}
                <BsChevronDown
                  className={`size-6 min-w-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            {isOpen && <p className="pb-6 text-ink leading-normal">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
