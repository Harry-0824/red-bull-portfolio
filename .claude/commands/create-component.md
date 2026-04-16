---
description: "建立新的 Next.js 元件。自動產生 TypeScript 元件檔案，包含 Framer Motion 動畫與 F1 設計系統樣式。"
argument-hint: "元件名稱，例如: TelemetryCard"
---

# 建立新 Next.js 元件

## 使用時機

- 需要在 `src/components/` 下新增一個可複用元件

## 流程

### 1. 確認元件資訊

向使用者確認：

- 元件名稱（PascalCase，例如 `TelemetryCard`）
- 是否需要互動（決定 Server / Client Component）
- 元件用途簡述
- 需要哪些 props

### 2. 判斷元件類型

| 條件                          | 類型             |
| ----------------------------- | ---------------- |
| 純展示、無 hook               | Server Component |
| 使用 useState / Framer Motion | Client Component |

### 3. 建立檔案

`src/components/ComponentName.tsx`

### 4. Client Component 範本

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ComponentNameProps {
  // 定義 props
}

export default function ComponentName({ ...props }: ComponentNameProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      viewport={{ once: true }}
      className="py-24 px-4 bg-rbr-navy"
    >
      <div className="max-w-6xl mx-auto">{/* 元件內容 */}</div>
    </motion.section>
  );
}
```

### 5. Server Component 範本

```tsx
interface ComponentNameProps {
  // 定義 props
}

export default function ComponentName({ ...props }: ComponentNameProps) {
  return (
    <section className="py-24 px-4 bg-rbr-navy">
      <div className="max-w-6xl mx-auto">{/* 元件內容 */}</div>
    </section>
  );
}
```

### 6. 完成後

- 確認元件已在頁面中正確引用
- 建議呼叫 @design-critic 進行視覺審查
