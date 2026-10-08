"use client";

import { useState } from "react";
import { Sparkles, Scan, CheckCircle2, Camera, ShieldCheck, Eye, Zap, Layers, RefreshCw, FileText } from "lucide-react";

export default function AiScannerShowcase() {
  // OCR Scanner State
  const [isScanningOcr, setIsScanningOcr] = useState(false);
  const [ocrSuccess, setOcrSuccess] = useState(true);

  // Vision AI Garment State
  const [activeGarment, setActiveGarment] = useState("shirt"); // 'shirt' or 'shoes'

  const handleTriggerOcr = () => {
    setIsScanningOcr(true);
    setOcrSuccess(false);
    setTimeout(() => {
      setIsScanningOcr(false);
      setOcrSuccess(true);
    }, 1200);
  };

  return (
    <section id="ai-vision" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 atomato-grid-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>• JIPO VISION &amp; OCR INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            Automate data entry &amp; protect garments <br />
            <span className="atomato-gradient-text">with built-in Computer Vision</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Experience next-generation AI tools designed specifically to simplify everyday laundry intake and eliminate customer disputes.
          </p>
        </div>

        {/* 2 Big Asymmetric Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Bento Card 1: AI Magic Price List OCR Scanner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 atomato-card-glow transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shadow-2xs border border-teal-100">
                    <Scan className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">AI Price List OCR Scanner</h3>
                    <p className="text-xs text-slate-500 font-normal">Photo to digital POS menu in 2 seconds</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full border border-teal-200">
                  Zero Manual Input
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Take a photo of your existing price board or brochure. Jipo OCR AI automatically extracts items, categories, and rates into your cloud catalog.
              </p>

              {/* Interactive OCR Simulation Box */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 relative overflow-hidden mb-6">
                
                {/* Laser Scanning Animation Bar */}
                {isScanningOcr && (
                  <div className="absolute inset-0 bg-emerald-500/10 z-20 flex flex-col items-center justify-center">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent absolute top-0 animate-bounce" />
                    <div className="bg-slate-900/90 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                      <span>AI Parsing 24 Price Tiers...</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 font-semibold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Scanned Menu Extract (#JP-OCR)</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleTriggerOcr}
                    disabled={isScanningOcr}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${isScanningOcr ? "animate-spin" : ""}`} />
                    Test Scan Again
                  </button>
                </div>

                {/* Parsed Result List */}
                <div className="space-y-2 pt-3 text-xs">
                  {[
                    { name: "Wash & Iron Regular", category: "Kiloan", price: "Rp 8.000 / kg", confidence: "99.8%" },
                    { name: "King Bed Cover Deep Clean", category: "Satuan", price: "Rp 30.000 / pcs", confidence: "99.4%" },
                    { name: "Sneaker Care & Unyellowing", category: "Shoes", price: "Rp 35.000 / pair", confidence: "99.1%" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                      <div>
                        <div className="font-semibold text-slate-800">{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-normal">Category: {item.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-700">{item.price}</div>
                        <div className="text-[9px] text-emerald-600 font-medium">✓ {item.confidence} match</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>⚡ Supported: Printed boards, WhatsApp photos, handwritten cards</span>
            </div>
          </div>

          {/* Bento Card 2: Jipo Vision AI Garment & Defect Scanner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 atomato-card-glow transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shadow-2xs border border-indigo-100">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Jipo Vision AI Garment Scanner</h3>
                    <p className="text-xs text-slate-500 font-normal">Pre-wash defect logging &amp; dispute shield</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full border border-indigo-200">
                  Anti-Dispute Shield
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Snap drop-off photos on your phone. Vision AI highlights pre-existing stains, fabric care tags, and condition logs directly into the customer&apos;s digital receipt.
              </p>

              {/* Garment Selector Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveGarment("shirt")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    activeGarment === "shirt"
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  👔 Premium Linen Shirt
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGarment("shoes")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    activeGarment === "shoes"
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  👟 Suede Leather Sneakers
                </button>
              </div>

              {/* Interactive Vision AI Inspection Tagging Visual */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 relative overflow-hidden mb-6">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-xs">
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Vision AI Neural Inspection Log</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Timestamp: 10:15:02</span>
                </div>

                {activeGarment === "shirt" ? (
                  <div className="space-y-2.5 text-xs">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-emerald-500/40 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-300">✓ Fabric Detected: 100% Linen / Silk</div>
                        <div className="text-[10px] text-slate-300 font-normal">Recommended Cycle: Delicate 30°C Cold Wash</div>
                      </div>
                      <span className="bg-emerald-500/20 text-emerald-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                        98.7% Conf.
                      </span>
                    </div>

                    <div className="bg-white/10 p-2.5 rounded-xl border border-amber-500/40 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-amber-300">⚠️ Pre-Existing Collar Discoloration</div>
                        <div className="text-[10px] text-slate-300 font-normal">Condition stamped to WhatsApp receipt #JP-091</div>
                      </div>
                      <span className="bg-amber-500/20 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                        Defect Logged
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-emerald-500/40 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-emerald-300">✓ Upper Material: Suede / Mesh Blend</div>
                        <div className="text-[10px] text-slate-300 font-normal">Treatment: Soft Horsehair Brush + Foam Care</div>
                      </div>
                      <span className="bg-emerald-500/20 text-emerald-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                        99.2% Conf.
                      </span>
                    </div>

                    <div className="bg-white/10 p-2.5 rounded-xl border border-amber-500/40 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-amber-300">⚠️ Midsole Oxidation &amp; Mud Scuffs</div>
                        <div className="text-[10px] text-slate-300 font-normal">Pre-treatment condition photo sent to customer</div>
                      </div>
                      <span className="bg-amber-500/20 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                        Photo Saved
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-700 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero customer liability disputes guaranteed</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
