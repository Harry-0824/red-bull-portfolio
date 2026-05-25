// ContactSection.tsx

import { ArrowUpRight, Github, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    title: "直接聯絡",
    description: "適合職缺邀約、合作討論與面試時程安排。",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=princ11290824%40gmail.com",
    value: "princ11290824@gmail.com",
    icon: Mail,
    isExternal: true,
  },
  {
    label: "GitHub",
    title: "查看原始碼",
    description: "瀏覽作品 repo、實作紀錄與前端工程能力證明。",
    href: "https://github.com/Harry-0824",
    value: "Harry-0824",
    icon: Github,
    isExternal: true,
  },
];

// LinkedIn、Cake 與履歷 PDF 目前沒有 repo 內可驗證 URL 或檔案；補齊後再加入 contactLinks，避免顯示壞連結。
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-rbr-navy border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-rbr-red">
              Contact / Hiring
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black italic tracking-tight text-white">
              讓作品成為下一次面試的起跑點
            </h2>
            <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-gray-400">
              如果你正在尋找前端工程師，這裡提供目前可驗證的聯絡入口。歡迎透過 Email
              安排面試，也可以先從 GitHub 檢視實作方式與專案脈絡。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`${link.label}: ${link.value}`}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-rbr-red/70 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-rbr-yellow"
                >
                  <div className="relative flex min-h-[210px] flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-black/30 text-rbr-yellow">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="text-gray-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-rbr-yellow"
                      />
                    </div>

                    <div className="mt-6">
                      <p className="text-[10px] font-black tracking-[0.25em] uppercase text-rbr-red">
                        {link.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-black italic tracking-tight text-white">
                        {link.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        {link.description}
                      </p>
                    </div>

                    <span className="mt-auto pt-6 text-sm font-bold text-white underline decoration-rbr-red underline-offset-4 break-all transition group-hover:text-rbr-yellow">
                      {link.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
