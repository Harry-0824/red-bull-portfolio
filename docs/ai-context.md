# AI Context

## 1. Project Overview

專案名稱：個人作品集網站

這是一個以「展示個人價值」為核心的作品集網站，目標是用清楚的資訊架構、強烈的視覺層次與順暢的互動體驗，快速向訪客傳達：我是誰、我會什麼、我做過什麼、如何聯絡我。

主要功能：

- 個人介紹（About Me）
- 專案展示（Projects / Case Studies）
- 技能列表（Skills / Tech Stack）
- 聯絡方式（Contact / Social Links）
- 可選擴充：履歷下載、時間軸、部落格、推薦語、作品集篩選

設計目標：

- 第一眼就建立專業感與記憶點
- 讓使用者在 10 秒內理解你的定位
- 用少量文字傳達高價值資訊，避免資訊過載
- 在手機、平板、桌機都維持一致且有質感的體驗
- 頁面可快速載入、易於維護、利於 SEO

內容策略：

- 首屏要能回答「你是誰」與「你能幫什麼」
- 專案區塊要顯示成果，而不只是技術名詞
- 技能列表要聚焦核心能力，不要塞滿所有曾碰過的技術
- 聯絡方式要明顯且低摩擦，讓對方容易採取下一步

---

## 2. Tech Stack（包含 Tailwind 使用規範）

### 核心技術

- Next.js
  - 主體框架，負責頁面路由、SEO、metadata、靜態產出與伺服器端能力
  - 適合作品集這種強 SEO、偏內容展示的網站
- React
  - 建構可重用 UI 與互動元件
- TypeScript
  - 增加型別安全，特別適合專案資料、區塊設定、導覽資料與表單資料
- TailwindCSS
  - 作為主要樣式工具，快速建立一致的設計系統
  - 適合高迭代、需要維持視覺一致性的作品集網站
- Vite
  - 若專案架構中另有獨立模組、設計系統、元件展示站或實驗頁，可用 Vite 作為輔助開發工具
  - 若實際專案以 Next.js 為主，則避免把 Next.js 與 Vite 的責任混在同一層級

### Tailwind 使用規範

- 優先使用 Tailwind utility classes，而不是大量自訂 CSS
- 反覆出現的組合樣式，應抽成：
  - 可重用 component
  - `cn()` / `clsx` 條件組合
  - `tailwind.config` 中的 theme extension
- 不要把一個 className 寫成無法維護的超長字串，若過長就拆元件
- 專案色彩、字體、圓角、陰影、spacing 應集中在設計 token 管理
- 避免在多處硬編碼同樣的顏色值或尺寸值
- 盡量使用一致的 spacing scale、radius scale、shadow scale
- 若需要客製 animation，優先用 Tailwind config 擴充，而不是每個元件都手寫 inline style
- dark mode、responsive、hover、focus、group-hover 等狀態應用要有一致規範

### 建議搭配工具

- `clsx` 或 `classnames`
  - 管理條件式 className
- `tailwind-merge`
  - 合併衝突的 Tailwind class
- `next/image`
  - 圖片最佳化
- `next/link`
  - 站內導覽
- `metadata` / `generateMetadata`
  - SEO 資訊設定
- icon 套件（例如 lucide-react）
  - 統一圖示風格

### 設計系統原則

- 作品集網站的重點不是技術堆疊，而是「品牌感」與「敘事感」
- 建議先定義：
  - Primary / secondary / accent color
  - Heading / body typography
  - Card / section / badge 樣式
  - 按鈕層級（primary, secondary, ghost）
  - 間距與 section 節奏

---

## 3. Folder Structure

以下是適合 Next.js + React + Tailwind + TypeScript 的實務型結構：

```text
red-bull-portfolio/
├─ docs/
│  └─ ai-context.md
├─ public/
│  ├─ images/
│  ├─ projects/
│  ├─ avatars/
│  └─ resume/
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ (routes)/
│  │     ├─ projects/
│  │     │  └─ page.tsx
│  │     ├─ about/
│  │     │  └─ page.tsx
│  │     └─ contact/
│  │        └─ page.tsx
│  ├─ components/
│  │  ├─ ui/
│  │  ├─ sections/
│  │  ├─ layout/
│  │  └─ shared/
│  ├─ features/
│  │  ├─ projects/
│  │  │  ├─ components/
│  │  │  ├─ data/
│  │  │  ├─ types/
│  │  │  └─ utils/
│  │  ├─ about/
│  │  └─ contact/
│  ├─ content/
│  │  ├─ profile.ts
│  │  ├─ projects.ts
│  │  ├─ skills.ts
│  │  └─ social.ts
│  ├─ lib/
│  │  ├─ constants.ts
│  │  ├─ metadata.ts
│  │  └─ utils.ts
│  ├─ hooks/
│  ├─ types/
│  ├─ styles/
│  │  └─ globals.css
│  └─ assets/
│     ├─ icons/
│     └─ illustrations/
├─ .env.local
├─ next.config.ts
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ package.json
└─ README.md
```

### 結構說明

- `src/app/`
  - Next.js App Router 路由入口、頁面與 SEO 設定
- `src/components/`
  - 可重用 UI 元件，特別是跨頁通用的 layout 與 section 元件
- `src/features/`
  - 依功能領域拆分，適合專案、聯絡、關於我等 domain 邏輯
- `src/content/`
  - 靜態內容與資料來源，適合個人介紹、技能、專案資料
- `src/lib/`
  - 共用工具、常數、metadata helper
- `src/types/`
  - 共用型別
- `public/`
  - 直接靜態公開的圖片、履歷 PDF、logo、專案截圖

### 頁面建議

- `/`：主首頁，整合 Hero、About、Projects、Skills、Contact
- `/projects`：完整專案列表或案例頁
- `/about`：更完整的個人介紹
- `/contact`：聯絡資訊與表單（若需要）

---

## 4. Coding Rules（React + TS + Tailwind）

### React 原則

- 一個元件負責一個明確職責
- 頁面組合由 section 元件構成，不要把所有內容直接堆在 `page.tsx`
- 能靜態化的內容盡量靜態化，減少不必要的 client-side state
- 互動只放在需要互動的最小區域
- 避免過度使用 `useEffect`，尤其是純展示型內容

### TypeScript 原則

- 內容資料、專案資料、社群連結、履歷資料都要明確定義型別
- 避免 `any`
- 若資料來源來自 CMS / API / JSON，先做型別與資料驗證
- Props 型別先定義，再實作元件
- 不要讓型別漂浮在元件內部，應集中到 `types/` 或 feature 的 `types/`

### Tailwind 原則

- 優先使用語意清楚的 class 組合，例如：
  - `section-padding`
  - `container-width`
  - `text-balance`
- 重複出現的樣式要抽成元件，不要複製 className
- 使用 responsive utilities 時，要從 mobile-first 開始設計
- 狀態類別要一致：`hover:`, `focus-visible:`, `active:`, `disabled:`
- 可讀性高於極致壓縮，長 className 可透過拆元件改善
- 不要在同一區塊混用太多不同風格的卡片、按鈕、陰影

### Component 實作規則

- 組件命名使用 PascalCase
- 檔案名稱與元件名稱保持一致
- 頁面專屬邏輯不要塞進共用 UI 元件
- 內容展示元件與資料來源要分離
- 能純呈現就純呈現，不要把資料抓取與版型耦合

### 資料處理規則

- 資料格式轉換應集中在 helper 或 adapter
- 專案資料建議定義為陣列資料結構，方便排序、篩選與重用
- 履歷、技能、社群連結等內容應盡量資料化，而不是硬編碼在 JSX 裡

---

## 5. UI/UX Rules（作品集設計重點🔥）

### 設計目標

- 作品集不是展示你會多少技術，而是展示「你能解決什麼問題」
- 第一屏要快速建立印象與信任
- 內容層級要清楚，讓訪客可以快速掃描

### 首屏（Hero）規則

- 必須有明確標題，說明你的定位
- 副標題要補充你擅長的領域與價值
- 主要 CTA 至少一個：例如「查看作品」「聯絡我」「下載履歷」
- Hero 不要塞太多內容，保持簡潔與記憶點

### 專案區塊規則

- 專案卡片要有：
  - 專案名稱
  - 1 句摘要
  - 使用技術
  - 你負責的部分
  - 成果或亮點
- 比起列技術，更重要的是顯示成果與決策
- 若有 Demo / GitHub / Case Study，連結要清楚

### 個人介紹規則

- 用短段落講清楚你是誰、做什麼、為什麼與眾不同
- 避免太空泛的形容詞堆疊
- 若有職涯故事、專長方向，可用時間軸或亮點卡呈現

### 技能區塊規則

- 技能應分類：前端、框架、工具、設計協作、其他
- 不要只列 logo，最好有等級/熟練度/應用場景
- 以「能做什麼」來表達，不只是「知道什麼」

### 聯絡區塊規則

- 聯絡方式要明顯且少摩擦
- Email、GitHub、LinkedIn、X、作品集表單可依實際情況選配
- 若有表單，送出成功與失敗都要有明確回饋

### 視覺規則

- 保持一致的間距系統與字級系統
- 使用少量但有辨識度的 accent color
- 背景與文字對比要足夠
- 卡片、按鈕、標籤、連結應有清楚層級
- 適當留白比塞滿內容更重要

### 行動版規則

- Mobile-first
- 首屏內容不要被過高的 Hero 擠掉
- 導覽列在小螢幕要好操作
- 卡片內容要易於掃讀，避免過長段落

---

## 6. Component 設計原則

### 分層原則

- `ui`：最小型可重用基礎元件，例如 Button、Badge、Card、SectionTitle
- `sections`：頁面大區塊，例如 HeroSection、ProjectsSection、SkillsSection
- `shared`：跨頁共用但不屬於單一 domain 的元件
- `features`：功能領域元件，例如 ProjectCard、ContactForm、SkillList

### 設計原則

- 元件 API 要簡潔，避免 props 爆炸
- 一個元件最好只表達一種變化面
- 讓高層元件組合低層元件，而不是相反
- 資料驅動優先，避免大量 hard-coded JSX
- 元件應可在不同頁面重用，至少在色彩與內容上保留彈性

### 建議元件類型

- `Button`
- `SectionHeading`
- `Container`
- `Navbar`
- `Footer`
- `ProjectCard`
- `SkillChip`
- `SocialLink`
- `ContactItem`
- `TimelineItem`
- `ThemeToggle`（如果有深色模式）

### 元件資料模式

- Props 名稱語意化，例如 `title`, `description`, `href`, `tags`, `image`
- 若卡片內容很多，考慮把資料型別抽出來
- 若元件要支援 variant，使用 `variant` 而不是多個布林值亂堆

---

## 7. Animation / Interaction（如果適合）

### 使用原則

- 動畫要服務內容，不要搶戲
- 以輕量、節制、精準為主
- 作品集適合有質感的微互動，但不適合過度炫技

### 適合的動畫

- Hero 進場淡入 / 位移
- 卡片 hover 提升、陰影或邊框變化
- 按鈕 hover 與 focus state
- Section scroll reveal（輕量即可）
- 專案卡片圖片 hover zoom
- 導覽切換的平滑過渡

### 避免的動畫

- 過長的動畫時間
- 大範圍位移導致閱讀不穩
- 會干擾文字閱讀的背景動畫
- 多層複雜 parallax 造成性能與可讀性問題

### 實作建議

- Tailwind transition utility 足夠時，不必額外加動畫套件
- 若需要更細緻的 motion，可考慮 Framer Motion，但只在必要處使用
- 動畫應尊重 `prefers-reduced-motion`
- 互動狀態要有清楚回饋：hover、focus-visible、active、disabled

### UX 互動重點

- CTA 按鈕要明顯
- 導覽切換要順
- 外部連結要有視覺提示
- 卡片可點擊區域要夠大

---

## 8. SEO / Performance（Next.js 重點🔥）

### SEO 原則

- 每個頁面都要有清楚的 title 與 description
- 首頁 metadata 要具體描述你的定位與專長
- 使用語意化 HTML：`main`, `section`, `article`, `header`, `nav`, `footer`
- H1 只保留一個，且必須與頁面主題一致
- 圖片要有 `alt`
- 連結文字要語意清楚，不要只寫「點我」

### Next.js SEO 重點

- 使用 `metadata` 或 `generateMetadata`
- 若有多頁，設定 Open Graph 與 Twitter Card
- 建立 `sitemap` 與 `robots`
- 若有多語系，規劃 canonical 與 locale
- 若有區塊式內容，優先用 Server Component 或靜態輸出

### Performance 原則

- 優先靜態化內容，減少 client-side JS
- 大圖必須最佳化，避免原圖直上
- 使用 `next/image` 時，設定合理尺寸與優先載入策略
- 避免整頁都變成 client component
- 避免在首頁載入不必要的大型套件

### 效能優先順序

1. 首屏速度
2. 關鍵內容可見
3. 互動延遲低
4. 次要內容懶載入

### 實務建議

- 首頁主要內容應盡量由伺服器渲染
- 非必要動畫與第三方腳本延後載入
- 社群 icon、圖片、背景素材要壓縮
- 若有大量專案資料，可考慮分頁、懶載入或區塊分段

---

## 9. Naming Convention

### 檔名規則

- React 元件：`PascalCase.tsx`
- 工具函式：`camelCase.ts`
- 資料檔：`projects.ts`, `skills.ts`, `social.ts`
- 頁面檔：`page.tsx`, `layout.tsx`, `not-found.tsx`
- 若採用 feature-based 結構，feature 內檔名需保持一致性

### 變數命名

- 一般變數與函式：`camelCase`
- 型別與介面：`PascalCase`
- 常數：`UPPER_SNAKE_CASE`
- 布林值：`isOpen`, `hasLoaded`, `canContact`

### 元件命名

- 區塊元件：`HeroSection`, `ProjectsSection`, `SkillsSection`
- UI 元件：`Button`, `Badge`, `Card`, `Container`
- 功能元件：`ProjectCard`, `ContactForm`, `SkillGrid`

### 資料命名

- 用詞一致：Project / Skill / Social / Contact / Profile
- 不要同時混用 `work`, `case`, `portfolioItem` 來表示同一概念
- 外部資料進入專案後，統一轉成內部 domain naming

---

## 10. Notes

### 內容與品牌

- 作品集的核心不是「我做了很多」，而是「我為什麼值得被看見」
- 把最重要的內容放前面
- 優先展示最有代表性的 3–6 個專案
- 每個專案應有明確脈絡：問題、做法、結果

### 開發原則

- 先定義內容資料，再做 UI
- 先建立設計 token，再大量撰寫 Tailwind class
- 不要讓版面過度依賴特定圖片或文字長度
- 保持頁面結構清晰，便於日後加內容

### 維護原則

- 專案內容應資料化，方便更新
- 技能與專案資料應與 UI 解耦
- 若未來要改版，應盡量只改 theme 與 section 組合，不重寫整頁

### 產品化提醒

- 如果這個作品集要拿去求職，請確保：
  - 聯絡方式可用
  - 履歷可下載
  - 作品連結可點
  - 網站在手機上可正常閱讀
  - Lighthouse 分數不要太差

### 最後原則

- 這份 `ai-context.md` 的目標是讓 AI 和人都能快速理解這個作品集網站的設計標準、內容優先順序與實作規則，方便後續擴充、維護與重構。

---

# AI EXECUTION RULES (CRITICAL)

When generating code, you MUST follow these rules:

## General

- ALWAYS read this ai-context before coding
- ALWAYS follow folder structure strictly
- NEVER create random files outside defined structure

## Component Design

- MUST split components if file > 150 lines
- MUST separate UI and logic (use hooks or services)
- MUST NOT put API calls directly inside UI components

## Data Flow

- API → service → hook → component
- NEVER skip layers

## Type Safety

- MUST define types for all API responses
- MUST NOT use `any`

## Error Handling

- MUST handle:
  - loading
  - empty
  - error

## Reusability

- If code is repeated twice → MUST refactor

## Naming

- MUST follow naming convention exactly

---

# AI DECISION GUIDE

When implementing features:

## When to create a new component

- If UI block is reusable → create component
- If JSX > 30 lines → split

## When to create a hook

- If logic involves:
  - API call
  - state management
  - reuse across components

## When to use service

- All API calls MUST go into services

## When to use client component

- ONLY if:
  - user interaction needed
  - uses state or event

## When unsure

- Choose simpler solution first
- Avoid over-engineering

---

# CODE OUTPUT RULES

When generating code:

- MUST show full file path
- MUST show complete file content
- MUST NOT output partial code

Example:

/src/components/WeatherCard.tsx

```tsx
// full code here
```

MUST explain what files were modified
