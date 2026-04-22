// ContactSection.tsx

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-rbr-navy border-t border-white/5 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
        聯絡我
      </h2>
      <p className="text-gray-400 max-w-xl text-center mb-8">
        歡迎合作、交流或討論新想法！請透過下方方式聯繫。
      </p>
      {/* 聯絡資訊區塊 */}
      <div className="w-full max-w-md bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center py-8 gap-4">
        <a
          href="mailto:princ11290824@gmail.com"
          className="text-white font-bold underline underline-offset-2 hover:text-rbr-yellow transition"
          aria-label="Email"
        >
          princ11290824@gmail.com
        </a>

        <a
          href="https://github.com/Harry-0824"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold underline underline-offset-2 hover:text-rbr-yellow transition"
          aria-label="GitHub"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
