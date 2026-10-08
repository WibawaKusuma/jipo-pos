"use client";

import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Bot,
  X,
  Send,
  RotateCcw,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

// Extensive Laundry Knowledge Base
const LAUNDRY_KNOWLEDGE_BASE = [
  {
    keywords: ["luntur", "kelunturan", "warna luntur", "baju putih"],
    topic: "Noda Luntur pada Pakaian",
    diagnosis: "Migrasi zat pewarna tekstil reaktif ke serat kain lain saat perendaman atau pencucian basah.",
    steps: [
      "PENTING: Jangan disetrika atau dimasukkan dryer! Panas akan mengunci pigmen luntur ke serat secara permanen.",
      "Rendam pakaian di air hangat suam-suam kuku bersama Oxygen Bleach (Sodium Percarbonate) + deterjen liquid konsentrat selama 45-60 menit.",
      "Untuk noda membandel pada pakaian berwarna: gunakan Color Catcher Sheet & deterjen enzim khusus pereduksi warna.",
      "Bilas tuntas dengan air mengalir hingga air bilasan benar-benar bening, lalu angin-anginkan di tempat teduh.",
    ],
    posTip: "Di Jipo POS: Aktifkan tag 'Special Care / Retreatment' pada order agar tim setrika tidak langsung mem-press pakaian sebelum lolos QC noda.",
  },
  {
    keywords: ["darah", "blood", "luka", "haid", "menstruasi"],
    topic: "Penanganan Noda Darah",
    diagnosis: "Noda organik berbasis protein (hemoglobin & albumin) yang rentan terkoagulasi oleh suhu panas.",
    steps: [
      "JANGAN PERNAH gunakan air panas! Suhu >40°C mematangkan protein darah sehingga mengikat serat kain selamanya.",
      "Aliri noda dengan air dingin mengalir dari sisi belakang kain untuk mendorong darah keluar dari anyaman benang.",
      "Teteskan cairan Hidrogen Peroksida (H2O2 3%) atau sabun empedu sapi (Gall Soap) langsung ke titik noda, diamkan 10 menit hingga timbul busa reaksi.",
      "Kucek lembut menggunakan sikat berbulu halus, lalu bilas dan cuci menggunakan deterjen enzim protease.",
    ],
    posTip: "Di Jipo POS: Foto noda darah saat penerimaan di kasir & catat 'Noda Darah Bawaan' di struk WhatsApp untuk menghindari tuduhan noda baru dari pelanggan.",
  },
  {
    keywords: ["suede", "sepatu suede", "sepatu", "sneaker", "unyellowing"],
    topic: "SOP Perawatan Sepatu Suede & Sneakers",
    diagnosis: "Kulit suede memiliki serat halus (nap) yang mudah kaku, pudar, dan berjamur jika terkena air berlebihan.",
    steps: [
      "JANGAN direndam dalam ember air! Gunakan metode dry cleaning foam.",
      "Jika terkena lumpur basah: biarkan lumpur mengering 100% terlebih dahulu, lalu sikat kering menggunakan Suede Crepe Brush / Horsehair Brush.",
      "Aplikasikan shoe foam cleaner secukupnya ke sikat, sikat searah nap secara lembut, dan lap segera dengan microfiber lembap (bukan basah).",
      "Keringkan di ruangan ber-AC atau blower angin (hindari terik matahari). Setelah kering, sisir kembali serat suede dan semprotkan Water Repellent Spray.",
    ],
    posTip: "Di Jipo POS: Pilih menu 'Sneaker Specialty Care'. Set SLA pengerjaan 2-3 hari kerja dan kirim notifikasi WhatsApp otomatis saat sepatu selesai di-treatment.",
  },
  {
    keywords: ["minyak", "oli", "lemak", "gorengan", "kecap", "saus"],
    topic: "Noda Minyak, Lemak & Makanan",
    diagnosis: "Noda lipid hidrofobik yang menolak molekul air biasa dan melekat kuat pada serat sintetis poliester.",
    steps: [
      "Beri spot treatment saat kain KERING: teteskan cairan degreaser khusus laundry atau sabun pencuci piring konsentrat langsung pada titik minyak.",
      "Taburkan sedikit tepung maizena atau bedak tabur untuk menyerap sisa residu minyak berlebih, diamkan 15 menit.",
      "Kucek lembut dengan air hangat kuku (45°C) menggunakan deterjen berenzim Lipase (pemecah lemak).",
      "Periksa noda sebelum proses pengeringan. Jika masih berbayang, ulangi proses spot remover.",
    ],
    posTip: "Di Jipo POS: Berikan stiker tag noda oranye pada hanger pakaian agar checker pencucian memisahkan dari cucian reguler.",
  },
  {
    keywords: ["dp", "down payment", "bayar setengah", "diskon", "promo", "voucher", "member"],
    topic: "Alur Input Kasir: DP 50% & Diskon Member di Jipo POS",
    diagnosis: "Pencatatan uang muka dan diskon harus akurat agar laporan tutup kas harian kasir tidak selisih/minus.",
    steps: [
      "Di layar kasir Jipo POS: Masukkan nomor HP pelanggan. Jika sudah terdaftar VIP, sistem otomatis memotong diskon member (misal: 10%).",
      "Jika ada voucher promo tambahan (contoh: CLEAN10K), klik tombol 'Kupon' dan ketik kode voucher.",
      "Pada pilihan metode pembayaran: Klik opsi '50% Down Payment (DP)'. Sistem otomatis membagi dua total tagihan.",
      "Klik 'Simpan & Kirim Struk'. Nota digital WhatsApp terkirim ke HP pelanggan dengan rincian: DP diterima + Sisa Saldo yang wajib dilunasi saat pengambilan.",
    ],
    posTip: "Sistem Jipo POS otomatis mengunci status 'Belum Lunas' dan kasir dilarang serah terima pakaian sebelum sisa saldo dilunasi di meja kasir.",
  },
  {
    keywords: ["takaran", "deterjen", "dosis", "mesin cuci", "softener", "parfum"],
    topic: "Standar Takaran Kimia Laundry (Mesin 7-10 kg)",
    diagnosis: "Penggunaan deterjen berlebih meninggalkan noda putih kapur & bau apek, sementara kekurangan deterjen membuat pakaian kusam.",
    steps: [
      "Mesin Front Loading 7-10kg: Gunakan 30-40ml deterjen liquid rendah busa (Low Foam Matic). Busa berlebih dapat merusak motor mesin dan meninggalkan residu sabun.",
      "Tambahkan 15ml Alkali Booster hanya jika cucian sangat kotor/berminyak (sprei atau seragam kerja bengkel).",
      "Pada bilasan terakhir: Masukkan 20-30ml Softener + 5ml Sour (penetral pH). Sour mencegah pakaian terasa gatal di kulit pelanggan.",
      "Penyemprotan Parfum Laundry: Semprotkan saat pakaian sudah dingin setelah disetrika, jarak 20cm, lalu langsung masukkan ke plastik packing kedap udara.",
    ],
    posTip: "Di Jipo POS: Manfaatkan modul 'Chemical Inventory' untuk melacak sisa stok literan deterjen dan mendeteksi pemborosan staf operasional.",
  },
  {
    keywords: ["bedcover", "king", "sprei", "selimut", "boneka", "karpet"],
    topic: "SOP Cuci Bedcover & Pori-Pori Tebal",
    diagnosis: "Bedcover king size memiliki dakron tebal yang jika salah cuci dapat menggumpal, robek, atau bagian dalamnya tetap basah/apek.",
    steps: [
      "Wajib gunakan mesin cuci berkapasitas minimal 14-20kg agar bedcover memiliki ruang gerak sirkulasi air yang cukup.",
      "Lipat bedcover dengan teknik accordion (lipatan zig-zag) saat dimasukkan ke tabung mesin agar drum mesin cuci tetap seimbang (tidak error unbalance).",
      "Gunakan siklus putaran rendah (Delicate / Wool) dan deterjen cair non-alkali agar serat dakron tidak getas.",
      "Saat pengeringan di mesin dryer: Masukkan 3-4 bola wol pengering (Dryer Balls) untuk menepuk-nepuk dakron agar kembali mengembang empuk dan kering merata.",
    ],
    posTip: "Di Jipo POS: Input layanan 'Bedcover King Satuan'. Masukkan kode nomor rak/lemari khusus barang besar pada sistem agar tidak tertumpuk kiloan.",
  },
  {
    keywords: ["karat", "tinta", "pulpen", "keringat", "kuning", "ketiak", "jamur", "apek"],
    topic: "Noda Khusus: Karat, Tinta & Jamur Apek",
    diagnosis: "Noda anorganik & jamur mikroskopis yang membutuhkan formula penetrasi kimia asam atau alkali terukur.",
    steps: [
      "Noda Karat: Gunakan Rust Remover (Asam Oksalat) secara tetes pada titik noda, diamkan 2-3 menit hingga karat terangkat, bilas tuntas segera.",
      "Noda Tinta Pulpen: Larutkan dengan alkohol 70% atau cairan hand sanitizer berbasis alkohol sebelum kain terkena air. Serap tinta dengan tisu kering.",
      "Kuning Ketiak (Keringat & Deodoran): Oleskan pasta baking soda + hidrogen peroksida 3%, diamkan 30 menit, lalu kucek dengan air hangat.",
      "Noda Jamur / Bintik Hitam: Rendam dengan larutan Chlorine Bleach (hanya untuk katun putih 100%) atau Oxygen Bleach pekat pada suhu 50°C untuk pakaian berwarna.",
    ],
    posTip: "Selalu konfirmasi risiko pada pelanggan melalui WhatsApp Jipo POS sebelum mengaplikasikan chemical keras pada kain sensitif.",
  },
];

const QUICK_PROMPTS = [
  "👕 Noda luntur di baju putih",
  "🩸 Noda darah membandel",
  "👟 SOP cuci sepatu suede",
  "🧈 Noda minyak & kecap",
  "💰 Cara catat DP 50% di POS",
  "🧴 Takaran deterjen mesin 10kg",
  "🛏️ Cuci bedcover king size",
];

export default function FloatingAiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Halo bos laundry! 👋 Saya **Jipo AI Copilot**. Butuh bantuan SOP noda membandel, jenis bahan kain, takaran kimia, atau alur kasir POS? Tanyakan langsung di sini!",
      topics: null,
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isTyping]);

  const findBestAnswer = (query) => {
    const q = query.toLowerCase();
    
    // Find matching topic
    for (const item of LAUNDRY_KNOWLEDGE_BASE) {
      const match = item.keywords.some((kw) => q.includes(kw));
      if (match) {
        return item;
      }
    }

    // Default intelligent fallback
    return {
      topic: "Panduan Operasional & Konsultasi SOP",
      diagnosis:
        "Pertanyaan Anda berkaitan dengan optimasi operasional dan standar pencucian laundry.",
      steps: [
        "Identifikasi jenis serat kain (Katun, Poliester, Sutra, Wol, atau Campuran) melalui label care tag pakaian.",
        "Uji ketahanan warna (*spot test*) pada bagian lipatan tersembunyi sebelum menggunakan zat pembersih khusus.",
        "Gunakan siklus pencucian terpisah antara pakaian berpewarna gelap, pakaian putih, dan cucian berbahan sensitif.",
        "Standarisasi alur kerja kasir dan pencatatan noda di meja depan untuk menghindari komplain dan ganti rugi pakaian.",
      ],
      posTip:
        "Tim ahli Jipo POS siap membantu mengonfigurasi SOP dan daftar harga khusus toko Anda secara gratis via WhatsApp.",
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuestion.trim();
    if (!query) return;

    // Add user message
    const userMsgId = Date.now().toString();
    const newMessages = [
      ...messages,
      { id: userMsgId, role: "user", content: query },
    ];
    setMessages(newMessages);
    setInputQuestion("");
    setIsTyping(true);

    // Simulate AI parsing and response
    setTimeout(() => {
      const result = findBestAnswer(query);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: null,
          data: result,
        },
      ]);
    }, 800);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Halo bos laundry! 👋 Chat telah di-reset. Ada kendala noda pakaian, bahan kain, takaran kimia, atau alur kasir POS yang ingin ditanyakan?",
        topics: null,
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button (Stacked above WhatsApp at bottom-24 right-6) */}
      <div className="fixed bottom-20 sm:bottom-22 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center gap-2.5 px-4 py-3 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer border ${
            isOpen
              ? "bg-slate-900 text-white border-slate-800"
              : "bg-white text-slate-900 border-slate-200/90 hover:border-emerald-300"
          }`}
          aria-label="Buka Jipo AI Laundry Copilot"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span>Tanya AI Copilot</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </button>
      </div>

      {/* Floating Chat Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[420px] max-h-[85vh] sm:max-h-[640px] h-[580px] bg-white border border-slate-200/90 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-slate-50/90 border-b border-slate-200 px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-slate-900">Jipo AI Copilot</h3>
                  <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded-full">
                    SOP Laundry
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-normal">
                  Asisten Pintar Penanganan Noda &amp; Kasir
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
                title="Reset Percakapan"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
                title="Tutup Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Carousel Bar */}
          <div className="bg-slate-100/70 border-b border-slate-200/70 px-3 py-2 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider shrink-0 pl-1">
              💡 Topik Cepat:
            </span>
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="text-[11px] font-medium bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 rounded-full px-2.5 py-1 shrink-0 transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                {msg.role === "user" ? (
                  <div className="bg-emerald-700 text-white text-xs rounded-2xl rounded-tr-xs px-4 py-2.5 max-w-[85%] shadow-xs leading-relaxed font-normal">
                    {msg.content}
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl rounded-tl-xs p-4 max-w-[95%] shadow-2xs space-y-3">
                    {/* Plain Text Greeting Message */}
                    {msg.content && (
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {msg.content}
                      </p>
                    )}

                    {/* Structured Knowledge Response */}
                    {msg.data && (
                      <div className="space-y-3 text-xs">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                          <span className="font-semibold text-slate-900 text-sm">
                            {msg.data.topic}
                          </span>
                        </div>

                        {/* Diagnosis */}
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                          <span className="font-semibold text-slate-800 block mb-1 text-[11px]">
                            🔍 Diagnosa Masalah:
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">
                            {msg.data.diagnosis}
                          </p>
                        </div>

                        {/* Step by Step Treatment */}
                        <div>
                          <span className="font-semibold text-slate-800 block mb-1.5 text-[11px]">
                            🧪 Langkah Penanganan (SOP):
                          </span>
                          <ol className="space-y-1.5 pl-1">
                            {msg.data.steps.map((st, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2 text-[11px] text-slate-700 leading-relaxed">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                                  {sIdx + 1}
                                </span>
                                <span>{st}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* POS & Cashier Note */}
                        {msg.data.posTip && (
                          <div className="bg-emerald-50/70 border border-emerald-200 p-2.5 rounded-xl text-[11px] text-emerald-900 leading-relaxed">
                            <span className="font-semibold block mb-0.5 text-emerald-950">
                              💡 Catatan Kasir Jipo POS:
                            </span>
                            <span>{msg.data.posTip}</span>
                          </div>
                        )}

                        {/* Direct WhatsApp Call to Action */}
                        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                          <span className="text-[10px] text-slate-500">Butuh bantuan setup outlet?</span>
                          <a
                            href={`https://wa.me/6281996307784?text=${encodeURIComponent(
                              `Halo Tim Jipo POS, saya tadi tanya AI Copilot soal "${msg.data.topic}" dan mau konsultasi gratis untuk outlet laundry saya.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 hover:text-emerald-800 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-2xs hover:bg-slate-50"
                          >
                            <MessageCircle className="w-3 h-3 text-emerald-600" />
                            <span>Konsul WhatsApp</span>
                            <ArrowUpRight className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* AI Typing State Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 border border-slate-200/70 rounded-2xl px-4 py-2.5 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
                <span className="text-[11px] font-medium">Menganalisis jenis noda &amp; SOP tekstil...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <div className="p-3 bg-slate-50/90 border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                placeholder="Tanya noda, bahan, takaran, SOP kasir..."
                className="flex-1 bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-2xs"
              />
              <button
                type="submit"
                disabled={!inputQuestion.trim() || isTyping}
                className="w-9 h-9 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-sm transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
                title="Kirim Pertanyaan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-1.5 text-center">
              <span className="text-[10px] text-slate-400">
                ⚡ Powered by Jipo Operations Intelligence • Jawaban instan 24/7
              </span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
