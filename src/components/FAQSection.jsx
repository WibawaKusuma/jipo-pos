"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is the difference between Cloud Subscription (SaaS) and Lifetime License?",
      a: "Cloud Subscription is ideal if you prefer low upfront costs (starting at only Rp 79.000/month), with automated cloud backups and continuous feature updates. Lifetime License is designed for operators who dislike recurring software bills—pay once upfront and use the software forever with zero monthly charges!",
    },
    {
      q: "Do I need to purchase expensive computer hardware or specialized cash registers?",
      a: "Not at all! Jipo POS is lightweight and responsive. You can use any Android phone, iPhone, iPad, tablet, or laptop you already own. For receipt printing, any standard portable Bluetooth thermal printer (priced around Rp 150.000) works seamlessly.",
    },
    {
      q: "What if my cashiers or I are not tech-savvy?",
      a: "You are in good hands! This is Jipo POS's biggest differentiator. Our team inputs all your menu data and prices for you. Your staff simply taps the service icon and hits print. We also provide short video tutorials and responsive WhatsApp support until your staff is 100% confident.",
    },
    {
      q: "How does the automated discount and promo engine work at checkout?",
      a: "It's completely automated! You can configure VIP member discounts, coupon codes (e.g. flat Rp 10.000 off), volume promos (orders over 10kg), and 50% deposit terms. The cashier taps the promo button and the system calculates everything instantly without manual calculator mistakes.",
    },
    {
      q: "How do WhatsApp notifications reach my customers?",
      a: "Whenever your cashier saves a new order or marks an order 'Completed', the system automatically triggers a formatted WhatsApp message to the customer's phone with order details, payment balance, and a digital tracking link. Your staff never needs to type or save numbers manually.",
    },
    {
      q: "Does Jipo POS support sneaker care, bag cleaning, and dry cleaning?",
      a: "Yes, absolutely! Jipo POS handles all measurement units: weight (kg), piece count (pcs), area meterage (m² for carpets), and premium specialty treatments like sneaker deep cleaning, unyellowing, handbag restoration, and king bed covers.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 atomato-grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>• FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            Common questions about <br />
            <span className="atomato-gradient-text">Jipo POS &amp; setup</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Everything you need to know about our system, onboarding process, and hardware compatibility.
          </p>
        </div>

        {/* Bento Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden transition-all border ${
                  isOpen
                    ? "bg-slate-50/80 border-emerald-300 ring-2 ring-emerald-500/20 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left font-semibold text-sm sm:text-base text-slate-900 flex justify-between items-center gap-4 hover:text-emerald-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-emerald-600 text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
