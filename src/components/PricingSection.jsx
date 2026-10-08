"use client";

import { useState } from "react";
import { Cloud, Infinity, Check, Star, ArrowUpRight, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [pricingModel, setPricingModel] = useState("saas"); // 'saas' or 'lifetime'
  const [isAnnual, setIsAnnual] = useState(false);

  const saasPlans = [
    {
      name: "Starter Store",
      desc: "Perfect for 1 neighborhood laundry shop migrating from paper tickets.",
      monthlyPrice: "79.000",
      annualPrice: "790.000",
      popular: false,
      features: [
        "1 Store Outlet",
        "Unlimited Transactions & Customers",
        "Fast POS (Phone, Tablet, PC)",
        "Bluetooth Thermal Receipt Printing",
        "Automated WhatsApp Receipts",
        "Daily Cashier & Revenue Reports",
      ],
      highlight: "FREE Full Price List Setup",
      btnText: "Get Starter Plan",
      waText: "Hello Jipo POS, I am interested in the Starter Store Subscription Plan",
    },
    {
      name: "Pro Growth",
      desc: "Best for high-volume laundry stores with VIP discounts and prepaid bundles.",
      monthlyPrice: "149.000",
      annualPrice: "1.490.000",
      popular: true,
      features: [
        "1 Outlet (Multi-Cashier Ready)",
        "Promo, Voucher & VIP Member Engine",
        "Prepaid Kilo Packages & Deposits",
        "Specialty Care: Sneaker, Bag, Dry Clean",
        "Staff Shift Logs & Anti-Theft Audit",
        "1-Click Financial Export to Excel/PDF",
      ],
      highlight: "FREE Setup + 1-on-1 Staff Training",
      btnText: "Get Pro Growth Plan",
      waText: "Hello Jipo POS, I want to get the Pro Growth Plan",
    },
    {
      name: "Multi-Outlet HQ",
      desc: "Centralized control for growing chains with 2 to 5 store branches.",
      monthlyPrice: "299.000",
      annualPrice: "2.990.000",
      popular: false,
      features: [
        "Centralized Control Up to 5 Outlets",
        "Roles for Owner, Admin, Cashier & Driver",
        "Real-time Multi-Branch Analytics",
        "Chemical & Detergent Stock Audit",
        "Dedicated VIP WhatsApp Support",
      ],
      highlight: "Full VIP Setup for All Branches",
      btnText: "Consult Multi-Branch",
      waText: "Hello Jipo POS, I want to consult the Multi-Outlet Plan",
    },
  ];

  const lifetimePlans = [
    {
      name: "Lifetime Single Store",
      desc: "One-time payment, lifetime access for 1 outlet. Zero monthly or annual renewal fees.",
      price: "1.490.000",
      popular: true,
      features: [
        "Perpetual Lifetime License (1 Store)",
        "100% Free From Monthly Subscriptions",
        "Full Feature Suite: Kiloan, Shoes, VIP Tiers",
        "Dynamic Promo & Discount Engine",
        "Universal Bluetooth Thermal Printing",
        "Automated WhatsApp Gateway",
      ],
      highlight: "FREE Setup & Menu Input Included",
      btnText: "Buy Lifetime License",
      waText: "Hello Jipo POS, I am interested in the Lifetime Single Store License",
    },
    {
      name: "Lifetime Multi-Branch",
      desc: "Perpetual license for operators managing up to 3 laundry stores.",
      price: "2.990.000",
      popular: false,
      features: [
        "Perpetual License for Up to 3 Stores",
        "Centralized Multi-Store HQ Dashboard",
        "Staff Shift Logs & Anti-Theft Protection",
        "Consolidated Financial Reports",
        "Lifetime Updates & Priority Support",
      ],
      highlight: "VIP Setup for All 3 Stores",
      btnText: "Get Multi-Store License",
      waText: "Hello Jipo POS, I am interested in the Lifetime Multi-Branch License",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 atomato-grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>• TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Flexible plans designed <br />
            <span className="atomato-gradient-text">for your business stage</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Choose between affordable cloud subscription (SaaS) or 1-time lifetime purchase.
          </p>
        </div>

        {/* Model Switcher Pill Bar (SaaS vs Lifetime) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/80 shadow-2xs">
            <button
              type="button"
              onClick={() => setPricingModel("saas")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                pricingModel === "saas"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Cloud className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cloud Subscription (SaaS)</span>
            </button>

            <button
              type="button"
              onClick={() => setPricingModel("lifetime")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                pricingModel === "lifetime"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Infinity className="w-3.5 h-3.5 text-indigo-600" />
              <span>Lifetime License (1x Pay)</span>
              <span className="bg-indigo-100 text-indigo-800 text-[9px] font-bold px-2 py-0.5 rounded-full">
                HOT
              </span>
            </button>
          </div>
        </div>

        {/* SaaS Monthly/Annual Toggle */}
        {pricingModel === "saas" && (
          <div className="flex items-center justify-center gap-3 mb-10 text-xs font-medium text-slate-700">
            <span className={!isAnnual ? "text-slate-900 font-semibold" : "text-slate-400"}>Monthly Billing</span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                isAnnual ? "bg-emerald-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform shadow-sm ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={isAnnual ? "text-emerald-700 font-semibold flex items-center gap-1.5" : "text-slate-400 flex items-center gap-1.5"}>
              <span>Annual Billing</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                Save 2 Months
              </span>
            </span>
          </div>
        )}

        {/* Pricing Cards Container */}
        {pricingModel === "saas" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {saasPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-7 sm:p-8 border transition-all flex flex-col justify-between relative ${
                  plan.popular
                    ? "bg-emerald-50/40 border-emerald-300 ring-2 ring-emerald-500/20 shadow-xl shadow-emerald-600/5"
                    : "bg-slate-50/70 border-slate-200/80 atomato-card-glow"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="my-6 pb-6 border-b border-slate-200/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-medium text-slate-500">Rp</span>
                      <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-xs text-slate-500 font-normal">/{isAnnual ? "year" : "month"}</span>
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full inline-block">
                      ✨ {plan.highlight}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8 text-xs text-slate-700">
                    {plan.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/6281996307784?text=${encodeURIComponent(plan.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-semibold text-xs text-center transition-all ${
                    plan.popular
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] btn-glow"
                      : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-300"
                  }`}
                >
                  <span>{plan.btnText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {lifetimePlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 border transition-all flex flex-col justify-between relative ${
                  plan.popular
                    ? "bg-indigo-50/40 border-indigo-300 ring-2 ring-indigo-500/20 shadow-xl shadow-indigo-600/5"
                    : "bg-slate-50/70 border-slate-200/80 atomato-card-glow"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 right-6 bg-indigo-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Recommended Lifetime
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="my-6 pb-6 border-b border-slate-200/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-medium text-slate-500">Rp</span>
                      <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-normal"> / 1x Payment</span>
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-indigo-700 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
                      ✨ {plan.highlight}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8 text-xs text-slate-700">
                    {plan.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/6281996307784?text=${encodeURIComponent(plan.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-semibold text-xs text-center transition-all ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] btn-glow"
                      : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-300"
                  }`}
                >
                  <span>{plan.btnText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
