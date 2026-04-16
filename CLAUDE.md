# Red Bull Racing Portfolio

## 專案概要

個人作品集網站，以 Red Bull Racing 賽車遙測（Telemetry）審美為核心設計語言。強調高對比、速度感、碳纖維質感與資料儀表板風格的 UI 呈現。

## 技術棧

- **框架**: Next.js 16 (App Router) + React 19
- **語言**: TypeScript（嚴格模式）
- **樣式**: Tailwind CSS 4 + 自訂 F1 設計變數
- **動畫**: Framer Motion 12
- **圖示**: Lucide React
- **建置**: Turbopack (Next.js 內建)
- **部署**: Vercel

## 目錄結構

```
src/
├── app/              # Next.js App Router 頁面
│   ├── layout.tsx    # 根佈局（字體、Metadata）
│   ├── page.tsx      # 首頁
│   └── globals.css   # Tailwind 全域樣式 + F1 設計變數
└── components/       # 可複用元件
    ├── Hero.tsx                  # 首屏視覺
    ├── Navbar.tsx                # 導航列
    ├── PerformanceDashboard.tsx  # 遙測儀表板
    ├── ProjectGallery.tsx        # 專案展示區（碳纖維卡片）
    ├── ProjectModal.tsx          # 專案詳情 Modal
    └── RaceHistory.tsx           # 經歷時間線
public/
├── projects/         # 專案截圖
└── *.svg             # 圖示素材
```

## 常用指令

| 指令            | 說明                       |
| --------------- | -------------------------- |
| `npm run dev`   | 啟動開發伺服器 (Turbopack) |
| `npm run build` | 生產環境建置               |
| `npm run start` | 啟動生產伺服器             |
| `npm run lint`  | ESLint 檢查                |

## F1 設計系統變數

| 變數名稱              | 色碼      | 用途             |
| --------------------- | --------- | ---------------- |
| `rbr-navy`            | `#0a0e1a` | 主要背景色       |
| `rbr-red`             | `#e11d48` | 強調色、CTA      |
| `rbr-yellow`          | `#facc15` | Hover 狀態、高亮 |
| `white`               | `#ffffff` | 主要文字         |
| `gray-400`            | `#9ca3af` | 次要文字         |
| `white/5`, `white/10` | —         | 邊框、背景透明層 |

## 開發規範

- 所有檔案使用 `.tsx` / `.ts` 副檔名
- 禁止使用 `any` 型別，一律使用明確型別或泛型
- 樣式優先使用 Tailwind CSS 工具類，不使用 inline style 物件
- 動畫必須使用 GPU 加速屬性（`transform`、`opacity`），避免觸發 layout/paint
- 元件預設為 Server Component，需要互動或狀態時才加上 `'use client'`
- 圖片使用 Next.js `<Image>` 元件，必須設定 `width`、`height` 或 `fill`
- 碳纖維紋理效果統一使用 `repeating-linear-gradient(45deg, ...)` 模式

## 開發禁忌

- ❌ 禁止使用 `React.FC` 型別標註（直接用函式參數型別）
- ❌ 禁止在 Server Component 中使用 `useState`、`useEffect`
- ❌ 禁止 inline style 物件（`style={{}}` 僅限動態計算背景等特殊情況）
- ❌ 禁止未經壓縮的圖片直接放入 `public/`
- ❌ 禁止動畫使用 `width`、`height`、`top`、`left` 等觸發 layout 的屬性
