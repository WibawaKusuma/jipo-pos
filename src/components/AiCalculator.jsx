"use client";

import { useState } from "react";
import { Sparkles, Calculator, TrendingUp, Clock, ShieldCheck, ArrowUpRight, CheckCircle2, MessageCircle, DollarSign, Bot } from "lucide-react";

export default function AiCalculator() {
  const [dailyKg, setDailyKg] = useState(70);
  const [pricePerKg, setPricePerKg] = useState(8000);
  const [branches, setBranches] = useState(1);

  // Calculations
  const monthlyRevenue = dailyKg * pricePerKg * 30 * branches;
  const leakageSaved = Math.round(monthlyRevenue * 0.045); // 4.5% prevented from unrecorded orders & math errors
  const hoursSaved = Math.round(((dailyKg / 4) * 2 * 30 * branches) / 60); // 2 min saved per drop-off transaction in hours
  const repeatBoost = Math.round(monthlyRevenue * 0.16); // 16% extra revenue from automated WhatsApp VIP retargeting
  const totalMonthlyImpact = leakageSaved + repeatBoost;
  const subscriptionCost = 149000 * branches;
  const netRoiMultiplier = (totalMonthlyImpact / subscriptionCost).toFixed(1);

  const formatRupiah = (num) => {
    return "Rp " + Math.round(num).toLocaleString("id-ID");
  };

  return (
    <section id="ai-calculator" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 atomato-grid-bg relative overflow-hidden">
      {/* Ambient AI Glow Blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>• INTERACTIVE AI ROI ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            See how much revenue <br />
            <span className="atomato-gradient-text">Jipo AI unlocks for your laundry</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Slide your daily laundry metrics below. Our AI model estimates cash leakage prevention, staff hours saved, and repeat customer growth.
          </p>
        </div>

        {/* Bento Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Sliders Controller Card */}
          <div className="lg:col-span-6 bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-900">Your Store Parameters</h3>
                    <p className="text-[11px] text-slate-500 font-normal">Adjust to simulate your store size</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold bg-emerald-100/70 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Live AI Sync
                </span>
              </div>

              {/* Slider 1: Daily Volume (kg) */}
              <div className="space-y-2.5 mb-7">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-slate-700">Daily Laundry Volume:</span>
                  <span className="text-emerald-700 font-bold bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    {dailyKg} kg / day
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="300"
                  step="5"
                  value={dailyKg}
                  onChange={(e) => setDailyKg(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-normal">
                  <span>Small (15 kg)</span>
                  <span>Medium (100 kg)</span>
                  <span>High Volume (300+ kg)</span>
                </div>
              </div>

              {/* Slider 2: Price per kg */}
              <div className="space-y-2.5 mb-7">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-slate-700">Average Price Rate:</span>
                  <span className="text-emerald-700 font-bold bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    {formatRupiah(pricePerKg)} / kg
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="20000"
                  step="500"
                  value={pricePerKg}
                  onChange={(e) => setPricePerKg(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-normal">
                  <span>Rp 5.000 (Standard)</span>
                  <span>Rp 10.000 (Express)</span>
                  <span>Rp 20.000 (Premium Care)</span>
                </div>
              </div>

              {/* Selector 3: Number of Outlets */}
              <div className="space-y-2 mb-2">
                <label className="text-xs font-medium text-slate-700 block">Number of Active Stores:</label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 5].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setBranches(count)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        branches === count
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-xs ring-2 ring-emerald-500/20"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {count} {count === 1 ? "Store" : "Stores"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Gross Baseline */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Estimated Monthly Gross Revenue:</span>
              <strong className="text-slate-900 font-semibold">{formatRupiah(monthlyRevenue)} / mo</strong>
            </div>
          </div>

          {/* RIGHT: Projected Results Card (Clean Light Mode) */}
          <div className="lg:col-span-6 bg-emerald-50/40 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-200/60">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
                    Monthly Impact Projection
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-300">
                  {netRoiMultiplier}x Estimated ROI
                </span>
              </div>

              {/* Big Impact Metric Headline */}
              <div className="mb-6">
                <span className="text-xs text-slate-500 font-normal">Total Estimated Monthly Value Unlocked:</span>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
                  <span className="text-emerald-700">+{formatRupiah(totalMonthlyImpact)}</span>
                  <span className="text-xs font-normal text-slate-500 ml-2">/ month</span>
                </div>
              </div>

              {/* 3 Breakdown Cards */}
              <div className="space-y-3 mb-6">
                {/* 1. Cash Leakage Prevented */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Prevented Manual Cash Leakage</div>
                      <div className="text-[10px] text-slate-500 font-normal">Math &amp; unrecorded order prevention</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 shrink-0">
                    +{formatRupiah(leakageSaved)}
                  </span>
                </div>

                {/* 2. Staff Time Saved */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Staff Productive Hours Saved</div>
                      <div className="text-[10px] text-slate-500 font-normal">15s checkout &amp; auto WhatsApp alert</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-700 shrink-0">
                    {hoursSaved} Hours / mo
                  </span>
                </div>

                {/* 3. Retargeting Repeat Boost */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Repeat Customer Growth</div>
                      <div className="text-[10px] text-slate-500 font-normal">Automated VIP reminders &amp; vouchers</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-700 shrink-0">
                    +{formatRupiah(repeatBoost)}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-4 border-t border-emerald-200/70">
              <a
                href={`https://wa.me/6281996307784?text=${encodeURIComponent(
                  `Hello Jipo POS Team, I simulated my store handling ${dailyKg}kg/day across ${branches} store(s). I want to activate Jipo POS and claim free setup!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs text-center shadow-sm hover:shadow transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Claim Free Setup for {dailyKg}kg/day Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
