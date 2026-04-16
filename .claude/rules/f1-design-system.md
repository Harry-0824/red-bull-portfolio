---
paths:
  - "src/**/*.tsx"
  - "src/**/*.css"
---

# F1 設計系統規範

## 色系定義

### 主要色票

| Token               | 色碼         | 用途                        |
| -------------------- | ------------ | --------------------------- |
| `rbr-navy`           | `#0a0e1a`    | 頁面背景、卡片背景          |
| `rbr-red`            | `#e11d48`    | CTA 按鈕、強調邊框、stripe  |
| `rbr-yellow`         | `#facc15`    | Hover 高亮、焦點狀態        |
| `white`              | `#ffffff`    | 主要標題文字                |
| `gray-400`           | `#9ca3af`    | 次要文字、描述              |
| `[#080808]`          | `#080808`    | 卡片深層背景                |

### 透明層

| Token         | 用途                  |
| ------------- | --------------------- |
| `white/5`     | 卡片邊框、標籤背景    |
| `white/10`    | 標籤邊框、分隔線      |
| `rbr-red/50`  | Hover 時邊框亮度提升  |

## 排版系統

### 標題層級

| 層級       | 樣式類別                                            | 使用場景          |
| ---------- | --------------------------------------------------- | ----------------- |
| Section H2 | `text-4xl font-black italic tracking-tighter`       | 區塊主標題        |
| Card H3    | `text-2xl font-black italic`                        | 卡片標題          |
| Subtitle   | `text-gray-400 font-bold uppercase tracking-widest text-xs` | 區塊副標          |
| Category   | `text-[10px] font-bold tracking-widest uppercase text-rbr-red` | 分類標籤        |
| Body       | `text-gray-400 text-sm leading-relaxed`             | 描述文字          |

### 標題裝飾

- Section H2 必須搭配 `border-b-4 border-rbr-red` 底線裝飾
- 底線寬度跟隨文字長度（使用 `inline-block`）

## 碳纖維紋理

### 標準實作

```tsx
<div
  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
  style={{
    backgroundImage: `repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
                     repeating-linear-gradient(45deg, #000 25%, #151515 25%, #151515 75%, #000 75%, #000)`,
    backgroundSize: '4px 4px',
    backgroundPosition: '0 0, 2px 2px'
  }}
/>
```

- 固定參數：角度 `45deg`、尺寸 `4px`、偏移 `2px`
- 預設透明度 `opacity-10`，hover `opacity-20`
- 過渡使用 `transition-opacity`

## 卡片元件規範

### 標準卡片結構

```
卡片容器 (relative group cursor-pointer)
├── 深層背景 (#080808, border white/5, hover:border rbr-red/50)
│   └── 碳纖維紋理層
├── 內容層 (relative p-8)
│   ├── 頂部：分類標籤 (left) + 圖示 (right, hover 顯示)
│   ├── 標題 (hover → rbr-yellow)
│   ├── 描述文字
│   └── 底部標籤列
└── Racing Stripe (absolute bottom-0, bg-rbr-red, hover:height 4px)
```

### 標籤樣式

```tsx
<span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-sm font-mono text-gray-400">
  {tag}
</span>
```

## 間距系統

- Section 間距：`py-24 px-4`
- 容器：`max-w-6xl mx-auto`
- 標題與內容間距：`mb-16`（區塊標題下方）
- Grid 間距：`gap-8`
- 卡片內邊距：`p-8`

## 陰影

- 卡片陰影：`shadow-2xl`
- 不使用淺色陰影（與深色主題衝突）
