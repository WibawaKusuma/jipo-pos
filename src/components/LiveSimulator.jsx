"use client";

import { useState } from "react";
import {
  RotateCcw,
  User,
  Phone,
  Tags,
  Wallet,
  Send,
  CheckCircle2,
  Trash2,
  ArrowLeft,
  Store,
  Smile,
  Mic,
  CheckCheck,
  Wifi,
  Battery,
  Signal,
  Video,
  PhoneCall,
  MoreVertical,
  Paperclip,
  Camera,
  Printer,
  Sparkles,
  ExternalLink,
  Plus,
  ReceiptText,
} from "lucide-react";

export default function LiveSimulator() {
  const defaultServices = [
    { id: 1, name: "Wash & Iron Regular (4kg)", price: 32000, category: "Kiloan", qty: 4, unit: "kg" },
    { id: 2, name: "King Bed Cover (1pcs)", price: 30000, category: "Satuan", qty: 1, unit: "pcs" },
  ];

  const [customerName, setCustomerName] = useState("Maya Pratiwi");
  const [customerPhone, setCustomerPhone] = useState("+62 819-9630-7784");
  const [cart, setCart] = useState(defaultServices);
  const [selectedDiscount, setSelectedDiscount] = useState({ type: "percent", val: 10, label: "VIP Member (-10%)" });
  const [payMode, setPayMode] = useState("lunas"); // 'lunas', 'dp', 'nanti'

  const [isOrderProcessed, setIsOrderProcessed] = useState(true);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isSendingSync, setIsSendingSync] = useState(false);
  const [notificationToast, setNotificationToast] = useState(null);

  // Live AI WhatsApp Playground State
  const [activeAiQuery, setActiveAiQuery] = useState(null);
  const [isAiReplying, setIsAiReplying] = useState(false);

  const availableServices = [
    { name: "Wash & Iron Regular", price: 8000, unit: "kg", icon: "👕", category: "Kiloan", defaultQty: 4 },
    { name: "King Bed Cover", price: 30000, unit: "pcs", icon: "🛏️", category: "Satuan", defaultQty: 1 },
    { name: "Sneaker Deep Clean", price: 35000, unit: "pair", icon: "👟", category: "Shoes", defaultQty: 1 },
    { name: "6-Hour Express", price: 15000, unit: "kg", icon: "⚡", category: "Express", defaultQty: 2 },
  ];

  const formatCurrency = (num) => {
    return "Rp " + Math.max(0, num).toLocaleString("id-ID");
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  let discountAmount = 0;
  if (selectedDiscount.type === "percent") {
    discountAmount = (subtotal * selectedDiscount.val) / 100;
  } else if (selectedDiscount.type === "fixed") {
    discountAmount = Math.min(subtotal, selectedDiscount.val);
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  let payNow = finalTotal;
  let remainingBalance = 0;

  if (payMode === "dp") {
    payNow = Math.round(finalTotal * 0.5);
    remainingBalance = finalTotal - payNow;
  } else if (payMode === "nanti") {
    payNow = 0;
    remainingBalance = finalTotal;
  }

  const handleAddService = (srv) => {
    const itemTotal = srv.price * srv.defaultQty;
    const nameLabel = `${srv.name} (${srv.defaultQty}${srv.unit})`;
    setCart([...cart, { id: Date.now(), name: nameLabel, price: itemTotal, category: srv.category, qty: srv.defaultQty, unit: srv.unit }]);
  };

  const handleRemoveItem = (index) => {
    setCart(cart.filter((_, idx) => idx !== index));
  };

  const handleReset = () => {
    setCart(defaultServices);
    setCustomerName("Maya Pratiwi");
    setCustomerPhone("+62 819-9630-7784");
    setSelectedDiscount({ type: "percent", val: 10, label: "VIP Member (-10%)" });
    setPayMode("lunas");
    setIsOrderProcessed(true);
    setIsOrderCompleted(false);
    setNotificationToast(null);
    setActiveAiQuery(null);
    setIsAiReplying(false);
  };

  const triggerToast = (msg) => {
    setNotificationToast(msg);
    setTimeout(() => {
      setNotificationToast(null);
    }, 3500);
  };

  const handleProcessOrder = () => {
    setIsSendingSync(true);
    setTimeout(() => {
      setIsSendingSync(false);
      setIsOrderProcessed(true);
      setIsOrderCompleted(false);
      triggerToast("📱 New WhatsApp Message: Laundry Order Receipt #JP-2026-091");
    }, 400);
  };

  const handleCompleteOrder = () => {
    setIsSendingSync(true);
    setTimeout(() => {
      setIsSendingSync(false);
      setIsOrderCompleted(true);
      triggerToast("✨ WhatsApp Alert: Your Laundry is READY for Pickup!");
    }, 400);
  };

  const handleTriggerAiReply = (type) => {
    setActiveAiQuery(type);
    setIsAiReplying(true);
    setTimeout(() => {
      setIsAiReplying(false);
      triggerToast("🤖 Jipo AI WhatsApp: Automated customer reply sent!");
    }, 600);
  };

  return (
    <section id="demo" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Blur Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
            Live Interactive Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Experience the 15-Second Cashier & Instant WhatsApp Sync
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Click services, apply discounts, or switch payment terms on the POS terminal. Watch the realistic smartphone on the right receive WhatsApp receipts in real-time!
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: POS Tablet Screen Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col">
            {/* Tablet Top App Bar */}
            <div className="bg-slate-900 text-white px-5 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400 font-bold text-sm">
                  <ReceiptText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-slate-100">Jipo POS Terminal</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Station #1 Active
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">Branch Central - Cashier: Sarah</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                  <Printer className="w-3.5 h-3.5 text-teal-400" />
                  Thermal BT Ready
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
                  title="Reset Demo"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-teal-400" />
                  Reset
                </button>
              </div>
            </div>

            {/* POS Body Content */}
            <div className="p-5 sm:p-7 space-y-5 bg-white">
              {/* Customer Info Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Customer Name:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition-all"
                      placeholder="e.g. Maya Pratiwi"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Phone:
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-emerald-600 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition-all"
                      placeholder="e.g. +62 819-9630-7784"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Add Laundry Services */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    <span>Select Laundry Services</span>
                    <span className="text-[10px] font-normal text-slate-500">(Click to add item)</span>
                  </label>
                  <span className="text-[11px] font-semibold text-teal-700">Quick POS Grid</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {availableServices.map((srv, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleAddService(srv)}
                      className="p-3 bg-white hover:bg-teal-50/60 border border-slate-200 hover:border-teal-400 rounded-xl text-left transition-all active:scale-95 shadow-sm hover:shadow group flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between w-full">
                        <span className="text-xl mb-1">{srv.icon}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-teal-600 text-white rounded-full p-0.5">
                          <Plus className="w-3 h-3" />
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-teal-900 leading-tight">
                          {srv.name}
                        </div>
                        <div className="text-[11px] font-semibold text-teal-700 mt-1">
                          +{formatCurrency(srv.price * srv.defaultQty)}
                          <span className="text-[9px] text-slate-400 font-normal"> / {srv.defaultQty}{srv.unit}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Discounts & Promo Rules */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                  <Tags className="w-3.5 h-3.5 text-amber-600" /> Apply Discounts & Member Promo:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { type: "none", val: 0, label: "Standard Rate" },
                    { type: "percent", val: 10, label: "VIP Member (-10%)" },
                    { type: "fixed", val: 10000, label: "Coupon -Rp 10k" },
                    { type: "fixed", val: 5000, label: "Bulk Promo -Rp 5k" },
                  ].map((disc, idx) => {
                    const isSelected = selectedDiscount.label === disc.label;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDiscount(disc)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                          isSelected
                            ? "bg-amber-50 border-amber-500 text-amber-900 shadow-sm ring-2 ring-amber-400/30"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {disc.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Mode Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-cyan-600" /> Payment Terms:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "lunas", label: "Paid in Full (100%)", sub: "Lunas" },
                    { value: "dp", label: "50% Down Payment", sub: "Bayar DP" },
                    { value: "nanti", label: "Pay at Pickup", sub: "Bayar Nanti" },
                  ].map((term) => {
                    const isChecked = payMode === term.value;
                    return (
                      <button
                        key={term.value}
                        type="button"
                        onClick={() => setPayMode(term.value)}
                        className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                          isChecked
                            ? "bg-teal-50 border-teal-500 text-teal-950 ring-2 ring-teal-500/20 font-semibold"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 font-medium"
                        }`}
                      >
                        <span className="text-xs">{term.label}</span>
                        <span className="text-[10px] text-slate-400">{term.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live POS Cart Table */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 text-xs">
                <div className="flex justify-between items-center pb-2.5 mb-2.5 border-b border-slate-200 font-semibold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <span>Current Cart Items</span>
                  </span>
                  <span className="bg-teal-700 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold">
                    {cart.length} {cart.length === 1 ? "Item" : "Items"}
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <p className="text-center text-slate-400 py-3">Cart is empty. Click services above to add items.</p>
                  ) : (
                    cart.map((item, index) => (
                      <div key={item.id || index} className="flex justify-between items-center text-slate-800 bg-white p-2 rounded-lg border border-slate-100">
                        <div>
                          <span className="font-semibold text-slate-800">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{formatCurrency(item.price)}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(index)}
                            className="text-red-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Subtotal, Discounts & Final Calculations */}
                <div className="pt-3 mt-3 border-t border-slate-200 space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold">{formatCurrency(subtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-amber-700 font-bold">
                      <span>Discount ({selectedDiscount.label}):</span>
                      <span>-{formatCurrency(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-slate-900 pt-1 border-t border-dashed border-slate-200">
                    <span>Total Bill:</span>
                    <span className="text-teal-800 text-base font-bold">{formatCurrency(finalTotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold pt-1 bg-teal-50/80 p-2 rounded-lg border border-teal-100">
                    <span className="text-teal-900">Payment Collected Now:</span>
                    <span className={payMode === "lunas" ? "text-emerald-700 font-bold" : "text-cyan-800 font-bold"}>
                      {formatCurrency(payNow)} ({payMode === "lunas" ? "FULL (100%)" : payMode === "dp" ? "50% DEPOSIT" : "PAY AT PICKUP"})
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleProcessOrder}
                  disabled={isSendingSync}
                  className="group relative flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all active:scale-[0.98] shadow-md hover:shadow-xl hover:shadow-emerald-600/20 disabled:opacity-50 border border-emerald-500 text-left cursor-pointer btn-glow"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-800/60 px-1.5 py-0.5 rounded text-emerald-100">
                        Step 1
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white truncate">
                        Save &amp; Send Receipt
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-100/80 font-normal truncate">
                      Auto-send WhatsApp receipt
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handleCompleteOrder}
                  disabled={isSendingSync}
                  className="group relative flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white transition-all active:scale-[0.98] shadow-md hover:shadow-xl hover:shadow-slate-900/20 disabled:opacity-50 border border-slate-800 text-left cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-emerald-500/30">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
                        Step 2
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white truncate">
                        Mark Order Ready
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-normal truncate">
                      Notify customer laundry is ready
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Ultra-Realistic Smartphone Device Mockup (Titanium Frame + Dynamic Island + Real WhatsApp) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Real Smartphone Frame */}
            <div className="relative w-[340px] sm:w-[360px] mx-auto select-none">
              
              {/* Outer Hardware Chassis (Titanium Border & Glow) */}
              <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-[52px] p-[11px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] border border-slate-600/60 ring-1 ring-white/20">
                
                {/* Left Hardware Buttons (Volume & Action Button) */}
                <div className="absolute -left-[5px] top-24 w-[5px] h-7 bg-slate-700 rounded-l-sm shadow-inner" />
                <div className="absolute -left-[5px] top-36 w-[5px] h-12 bg-slate-700 rounded-l-sm shadow-inner" />
                <div className="absolute -left-[5px] top-52 w-[5px] h-12 bg-slate-700 rounded-l-sm shadow-inner" />
                
                {/* Right Hardware Button (Power / Side Button) */}
                <div className="absolute -right-[5px] top-32 w-[5px] h-16 bg-slate-700 rounded-r-sm shadow-inner" />

                {/* Smartphone Screen Inner Bezel */}
                <div className="bg-[#EFEAE2] rounded-[42px] overflow-hidden relative flex flex-col h-[650px] shadow-inner border border-black/30">
                  
                  {/* Top Status Bar & Dynamic Island */}
                  <div className="bg-[#008069] text-white pt-3 px-6 pb-1.5 flex items-center justify-between z-30 relative">
                    {/* Time */}
                    <span className="text-xs font-bold tracking-tight text-white/95">9:41</span>
                    
                    {/* Dynamic Island Pill */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-5 bg-black rounded-full flex items-center justify-between px-2 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-indigo-950/80" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                    </div>

                    {/* Status Icons */}
                    <div className="flex items-center gap-1.5 text-white/90">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <div className="flex items-center gap-0.5">
                        <span className="text-[10px] font-bold">98%</span>
                        <Battery className="w-3.5 h-3.5 text-emerald-300" />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp App Header Bar */}
                  <div className="bg-[#008069] text-white px-3.5 py-2.5 flex items-center justify-between shadow-md z-20">
                    <div className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4 text-white/90" />
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-[#075E54] border border-white/30 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                          <Store className="w-4 h-4 text-emerald-200" />
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#008069] absolute -bottom-0.5 -right-0.5" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-xs text-white leading-tight">Jipo Laundry</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300" />
                        </div>
                        <span className="text-[10px] text-emerald-100/90 font-light">Official Business Account</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-white/90">
                      <Video className="w-4 h-4" />
                      <PhoneCall className="w-3.5 h-3.5" />
                      <MoreVertical className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Push Notification Banner Toast (Triggered on click) */}
                  {notificationToast && (
                    <div className="absolute top-16 left-3 right-3 z-40 bg-slate-900/95 text-white p-3 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-md animate-in slide-in-from-top-4 duration-300">
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                          <Store className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-emerald-400">WHATSAPP NOTIFICATION</span>
                            <span className="text-[9px] text-slate-400">now</span>
                          </div>
                          <p className="text-[11px] text-slate-100 font-medium leading-snug mt-0.5">
                            {notificationToast}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Chat Conversation Canvas */}
                  <div
                    className="flex-1 p-3.5 space-y-3 overflow-y-auto text-xs relative"
                    style={{
                      backgroundColor: "#EFEAE2",
                      backgroundImage: `radial-gradient(#0000000d 1px, transparent 1px)`,
                      backgroundSize: "16px 16px",
                    }}
                  >
                    {/* Timestamp Date Pill */}
                    <div className="text-center my-1">
                      <span className="bg-white/90 text-slate-600 text-[10px] font-bold px-3 py-0.5 rounded-full shadow-sm border border-slate-200/50">
                        TODAY
                      </span>
                    </div>

                    {/* Encryption Notice */}
                    <div className="bg-[#FFEECD] text-[#54656F] text-[9px] p-2 rounded-lg text-center leading-tight shadow-xs border border-amber-200/50">
                      🔒 Messages and receipts are end-to-end encrypted. Sent automatically via Jipo POS.
                    </div>

                    {/* Chat Bubble 1: Order Confirmation & Receipt */}
                    {isOrderProcessed && (
                      <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 shadow-sm border border-slate-200/70 max-w-[94%] space-y-2 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {/* Header of message */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <div className="flex items-center gap-1.5 font-bold text-teal-800 text-[11px]">
                            <span>🧺</span>
                            <span>OFFICIAL ORDER RECEIPT</span>
                          </div>
                          <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                            #JP-2026-091
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-700 leading-snug">
                          Hi <strong>{customerName || "Valued Customer"}</strong>, thank you for trusting your laundry with <strong>Jipo Laundry Central</strong>!
                        </p>

                        {/* Order breakdown box */}
                        <div className="bg-slate-50/90 rounded-xl p-2.5 text-[10px] space-y-1 border border-slate-100 text-slate-700">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Items:</span>
                            <span className="font-semibold text-slate-900 text-right">
                              {cart.map((i) => i.name.split(" (")[0]).join(", ") || "Laundry Service"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Subtotal:</span>
                            <span className="font-semibold">{formatCurrency(subtotal)}</span>
                          </div>
                          {discountAmount > 0 && (
                            <div className="flex justify-between text-amber-700 font-bold">
                              <span>Promo ({selectedDiscount.label}):</span>
                              <span>-{formatCurrency(discountAmount)}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-slate-900 font-semibold pt-1 border-t border-slate-200">
                            <span>Total Bill:</span>
                            <span className="text-teal-800 font-bold">{formatCurrency(finalTotal)}</span>
                          </div>
                          <div className="flex justify-between font-medium pt-0.5">
                            <span className="text-slate-600">Payment Status:</span>
                            <span className={payMode === "lunas" ? "text-emerald-700 font-semibold" : "text-amber-700 font-semibold"}>
                              {payMode === "lunas"
                                ? "PAID IN FULL (LUNAS)"
                                : payMode === "dp"
                                ? `50% DP PAID (${formatCurrency(payNow)})`
                                : `UNPAID (${formatCurrency(finalTotal)})`}
                            </span>
                          </div>
                          {remainingBalance > 0 && (
                            <div className="flex justify-between text-red-600 font-bold">
                              <span>Remaining Balance:</span>
                              <span>{formatCurrency(remainingBalance)}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-slate-500 pt-0.5">
                            <span>Est. Ready:</span>
                            <span className="font-bold text-slate-800">Tomorrow, 4:00 PM</span>
                          </div>
                        </div>

                        {/* Live Tracking Link */}
                        <div className="pt-1">
                          <a
                            href="#demo"
                            className="inline-flex items-center gap-1 text-[10px] text-teal-700 hover:text-teal-900 font-bold bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Track Live Status: jipopos.com/track/JP-091
                          </a>
                        </div>

                        {/* Timestamp & Double Blue Check */}
                        <div className="text-[9px] text-slate-400 text-right flex items-center justify-end gap-1 pt-0.5">
                          <span>10:15</span>
                          <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                        </div>
                      </div>
                    )}

                    {/* Chat Bubble 2: Pickup Alert */}
                    {isOrderCompleted && (
                      <div className="bg-[#D9FDD3] rounded-2xl rounded-tl-sm p-3.5 shadow-sm border border-emerald-300/80 max-w-[94%] space-y-2 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex items-center justify-between border-b border-emerald-200/70 pb-1.5">
                          <div className="flex items-center gap-1 font-bold text-emerald-900 text-[11px]">
                            <span>✨</span>
                            <span>LAUNDRY READY FOR PICKUP!</span>
                          </div>
                          <span className="text-[9px] font-semibold bg-emerald-600 text-white px-1.5 py-0.5 rounded">
                            READY
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-800 leading-snug">
                          Great news <strong>{customerName || "Customer"}</strong>! Order <strong>#JP-2026-091</strong> is clean, freshly scented, and packed.
                        </p>

                        <div className="bg-white/80 rounded-xl p-2 text-[10px] space-y-0.5 border border-emerald-200 text-slate-700">
                          <div className="flex justify-between">
                            <span>Rack Location:</span>
                            <strong className="text-slate-900">Cabinet A - Slot #03</strong>
                          </div>
                          {remainingBalance > 0 ? (
                            <div className="flex justify-between text-red-700 font-bold">
                              <span>Amount Due at Pickup:</span>
                              <span>{formatCurrency(remainingBalance)}</span>
                            </div>
                          ) : (
                            <div className="flex justify-between text-emerald-800 font-bold">
                              <span>Payment:</span>
                              <span>LUNAS (No Balance Due)</span>
                            </div>
                          )}
                        </div>

                        <p className="text-[10px] text-slate-600">
                          Please show this message to our cashier upon pickup. Thank you! 🙏
                        </p>

                        <div className="text-[9px] text-slate-400 text-right flex items-center justify-end gap-1 pt-0.5">
                          <span>10:16</span>
                          <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                        </div>
                      </div>
                    )}

                    {/* Interactive Customer Inquiry (Triggered by AI Prompts) */}
                    {activeAiQuery && (
                      <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="bg-[#E7FFDB] text-slate-800 rounded-2xl rounded-tr-sm p-3 shadow-xs border border-emerald-200 max-w-[88%] text-[11px] space-y-1">
                          <p>
                            {activeAiQuery === "status" && "Halo admin, cucian atas nama Maya #JP-091 kira-kira selesai jam berapa ya?"}
                            {activeAiQuery === "delivery" && "Min, bisa tolong jadwalkan antar ke rumah saya jam 17:00 sore ini?"}
                            {activeAiQuery === "promo" && "Halo Jipo, ada promo voucher diskon untuk cucian kiloan minggu ini?"}
                          </p>
                          <div className="text-[9px] text-slate-400 text-right flex items-center justify-end gap-1">
                            <span>10:18</span>
                            <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* AI Smart Assistant Automated Response */}
                    {activeAiQuery && (
                      <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 shadow-sm border border-emerald-300/80 max-w-[94%] space-y-2 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                          <div className="flex items-center gap-1.5 font-bold text-teal-800 text-[10px]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>JIPO AI CONCIERGE (24/7 AUTO-REPLY)</span>
                          </div>
                          <span className="text-[9px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">
                            Instant AI
                          </span>
                        </div>

                        {isAiReplying ? (
                          <div className="flex items-center gap-1.5 py-2 text-slate-400 text-xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce delay-100" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce delay-200" />
                            <span className="text-[10px] text-slate-500 ml-1">Jipo AI is generating reply...</span>
                          </div>
                        ) : (
                          <>
                            {activeAiQuery === "status" && (
                              <div className="text-[11px] text-slate-700 space-y-1">
                                <p>Halo Kak <strong>{customerName}</strong>! Pesanan <strong>#JP-2026-091</strong> saat ini di tahap <strong>Ironing (Penyetrikaan)</strong>.</p>
                                <p className="bg-slate-50 p-2 rounded-lg text-[10px] border border-slate-100 text-slate-600">
                                  ⚡ Estimasi selesai: <strong>Hari ini, 16:00 WIB</strong> di Rak A-03. Kami kirim notifikasi otomatis saat siap!
                                </p>
                              </div>
                            )}

                            {activeAiQuery === "delivery" && (
                              <div className="text-[11px] text-slate-700 space-y-1">
                                <p>Siap Kak <strong>{customerName}</strong>! Jadwal antar jemput pukul <strong>17:00 WIB</strong> telah dicatat otomatis oleh sistem.</p>
                                <p className="bg-emerald-50 p-2 rounded-lg text-[10px] border border-emerald-100 text-emerald-800">
                                  🛵 Kurir ditugaskan: <strong>Rian Express</strong>. Live status: jipopos.com/track/JP-091
                                </p>
                              </div>
                            )}

                            {activeAiQuery === "promo" && (
                              <div className="text-[11px] text-slate-700 space-y-1">
                                <p>Tentu ada Kak! Karena Kak <strong>{customerName}</strong> adalah <strong>VIP Member</strong>, ini voucher eksklusif Anda:</p>
                                <div className="bg-amber-50 p-2 rounded-lg text-[10px] border border-amber-200 text-amber-900 font-bold flex justify-between items-center">
                                  <span>🎟️ KODE: JIPOWEEKEND</span>
                                  <span className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded text-[9px]">Diskon Rp 10.000</span>
                                </div>
                              </div>
                            )}

                            <div className="text-[9px] text-slate-400 text-right flex items-center justify-end gap-1 pt-0.5">
                              <span>10:18</span>
                              <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Bottom Reply Bar Mock */}
                  <div className="bg-[#F0F2F5] px-3 py-2 flex items-center gap-2 border-t border-slate-200/60 z-20">
                    <Smile className="w-5 h-5 text-slate-500 hover:text-slate-700 cursor-pointer" />
                    <Paperclip className="w-4 h-4 text-slate-500 hover:text-slate-700 cursor-pointer" />
                    <div className="bg-white text-slate-400 rounded-full px-3 py-1.5 text-xs flex-1 border border-slate-200 flex items-center justify-between">
                      <span className="text-[11px]">Type a reply...</span>
                      <Camera className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#008069] text-white flex items-center justify-center shadow-sm">
                      <Mic className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom iOS Home Bar Indicator */}
                  <div className="bg-[#F0F2F5] pb-2 pt-1 flex justify-center">
                    <div className="w-28 h-1 bg-slate-800/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive AI Customer Prompts Bar */}
            <div className="mt-4 w-full max-w-[360px] bg-white rounded-2xl p-3 border border-slate-200/90 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>Test 24/7 AI WhatsApp Bot:</span>
                </span>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                  Click to Ask AI
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleTriggerAiReply("status")}
                  className={`p-1.5 rounded-lg text-[10px] font-semibold border transition-all text-center cursor-pointer ${
                    activeAiQuery === "status"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  📍 Order Status
                </button>

                <button
                  type="button"
                  onClick={() => handleTriggerAiReply("delivery")}
                  className={`p-1.5 rounded-lg text-[10px] font-semibold border transition-all text-center cursor-pointer ${
                    activeAiQuery === "delivery"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  🛵 Pick-Up Time
                </button>

                <button
                  type="button"
                  onClick={() => handleTriggerAiReply("promo")}
                  className={`p-1.5 rounded-lg text-[10px] font-semibold border transition-all text-center cursor-pointer ${
                    activeAiQuery === "promo"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  🎟️ Promo Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
