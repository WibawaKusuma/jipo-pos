import { Wand2, Users, Printer, MessageSquare, ArrowUpRight, CheckCircle2, Smartphone, ShieldCheck } from "lucide-react";

export default function WhyJipo() {
  return (
    <section id="why-jipo" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 atomato-grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>• CORE VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            Engineered by laundry owners, <br />
            <span className="atomato-gradient-text">built for high daily volume</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Everything you need to eliminate laundry bottlenecks, prevent missing garments, and automate customer receipts.
          </p>
        </div>

        {/* Bento Grid Layout (2x2 Asymmetric High Impact Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Bento Card 1: 100% Done-For-You Setup */}
          <div className="rounded-3xl bg-slate-50/80 p-7 sm:p-8 border border-slate-200/80 atomato-card-glow transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                  <Wand2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-emerald-100/70 text-emerald-800 px-3 py-1 rounded-full">
                  100% Done-For-You
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">White-Glove Price List Setup</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Don&apos;t waste hours typing dozens of services and price tiers. Send us a photo of your menu, and our concierge team inputs everything into your cloud account.
              </p>

              {/* Floating Mini UI Preview */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">📸 Menu Photo Uploaded</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Verified</span>
                </div>
                <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  ⚡ 24 Price Tiers & Kilo Rules auto-configured by Jipo Team
                </div>
              </div>
            </div>

            {/* Pill Tag Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ Ready Day 1
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ Free Price Revisions
              </span>
            </div>
          </div>

          {/* Bento Card 2: WhatsApp Notification Gateway */}
          <div className="rounded-3xl bg-slate-50/80 p-7 sm:p-8 border border-slate-200/80 atomato-card-glow transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full">
                  Automated Gateway
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Automated WhatsApp Receipts</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Deliver instant order receipts, pickup alerts, and uncollected laundry reminders with one tap. No need for cashiers to save customer numbers on personal phones.
              </p>

              {/* Floating Mini UI Preview */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">💬 Customer Alert Sent</span>
                  <span className="text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded text-[10px]">1.2s Delivery</span>
                </div>
                <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  &ldquo;Laundry #JP-091 is washed & ready in Rack A-03.&rdquo;
                </div>
              </div>
            </div>

            {/* Pill Tag Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ No Contact Saving
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ Live Web Tracking
              </span>
            </div>
          </div>

          {/* Bento Card 3: Universal Bluetooth Thermal Printer */}
          <div className="rounded-3xl bg-slate-50/80 p-7 sm:p-8 border border-slate-200/80 atomato-card-glow transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
                  <Printer className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-indigo-100/70 text-indigo-800 px-3 py-1 rounded-full">
                  Zero Hardware Lock-in
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Universal Bluetooth Printing</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Works seamlessly with standard 58mm / 80mm wireless thermal printers. Use your existing Android phone, iPad, tablet, or Windows computer without buying expensive POS hardware.
              </p>

              {/* Floating Mini UI Preview */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs space-y-1.5 mb-6 text-xs">
                <div className="flex justify-between items-center text-slate-700">
                  <span>🖨️ Printer Support:</span>
                  <span className="font-semibold text-slate-900">58mm / 80mm ESC/POS</span>
                </div>
                <div className="flex justify-between items-center text-slate-700">
                  <span>📱 Compatible Devices:</span>
                  <span className="font-semibold text-indigo-700">Android, iOS, PC, Mac</span>
                </div>
              </div>
            </div>

            {/* Pill Tag Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ Auto Garment Tags
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ QR Tracking Code
              </span>
            </div>
          </div>

          {/* Bento Card 4: Free Cashier & Staff Training */}
          <div className="rounded-3xl bg-slate-50/80 p-7 sm:p-8 border border-slate-200/80 atomato-card-glow transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-600/20">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-cyan-100/70 text-cyan-800 px-3 py-1 rounded-full">
                  Staff Friendly
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Free Staff Training & 1-on-1 Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Hiring new staff? Our team provides guided video walkthroughs and dedicated WhatsApp support so any cashier can master the checkout workflow in under 10 minutes.
              </p>

              {/* Floating Mini UI Preview */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs space-y-1.5 mb-6 text-xs">
                <div className="flex justify-between items-center text-slate-700">
                  <span>🎓 Onboarding Time:</span>
                  <span className="font-semibold text-emerald-700">&lt; 10 Minutes</span>
                </div>
                <div className="flex justify-between items-center text-slate-700">
                  <span>🛡️ Staff Anti-Theft:</span>
                  <span className="font-semibold text-slate-900">Encrypted Shift Audit</span>
                </div>
              </div>
            </div>

            {/* Pill Tag Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ Video Guides
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 rounded-full px-3 py-1 text-xs font-medium">
                ✓ Priority WhatsApp Help
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
