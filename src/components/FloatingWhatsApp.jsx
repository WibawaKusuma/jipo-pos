import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20want%20to%20consult%20and%20get%20help%20setting%20up%20my%20laundry%20app"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group"
      aria-label="Chat with Jipo POS on WhatsApp"
    >
      <div className="flex items-center gap-1.5 text-xs font-semibold">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="hidden sm:inline">Online • Ready to Setup</span>
      </div>
      <MessageCircle className="w-6 h-6 fill-white" />
    </a>
  );
}
