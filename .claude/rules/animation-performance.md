---
paths:
  - "src/components/**"
  - "src/app/**"
---

# 動畫效能規範

## 核心原則

所有動畫必須維持 **60fps**，僅使用 GPU 加速屬性：`transform`（translate, scale, rotate）和 `opacity`。

## Framer Motion 規範

### 進場動畫

```tsx
// ✅ 正確：GPU 友好
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
/>

// ❌ 禁止：觸發 layout 的屬性
<motion.div
  initial={{ height: 0 }}
  animate={{ height: 'auto' }}
/>

// ❌ 禁止：觸發 paint 的屬性
<motion.div
  initial={{ width: 0 }}
  animate={{ width: '100%' }}
/>
```

### Stagger 動畫

```tsx
// 列表項目的交錯進場
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}  // 每項延遲不超過 0.15s
    viewport={{ once: true }}
  />
))}
```

- `delay` 最大值：`index * 0.15`，超過則使用 `Math.min(index * 0.1, 0.6)` 封頂
- 必須設定 `viewport={{ once: true }}` 避免重複觸發

### Hover 效果

```tsx
// ✅ 正確：僅改變 transform / opacity / color
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: 'tween', duration: 0.2 }}
/>

// ❌ 禁止：hover 時改變 width/height/padding
<motion.div whileHover={{ height: '120px' }} />
```

### Racing Stripe 效果

```tsx
// 底邊紅色條紋 — 使用 height 動畫的唯一例外（元素極小）
<motion.div
  initial={{ height: 0 }}
  whileHover={{ height: '4px' }}
  className="absolute bottom-0 left-0 right-0 bg-rbr-red rounded-b-xl"
/>
```

## 無障礙支援

```tsx
import { useReducedMotion } from 'framer-motion';

export default function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    />
  );
}
```

- 所有含動畫的元件必須使用 `useReducedMotion()` hook
- 當使用者啟用「減少動態效果」時，動畫應立即完成或跳過

## CSS Transition 規範

- 使用 Tailwind 的 `transition-all`、`transition-colors`、`transition-opacity`
- 時長：`duration-150`（快速回饋）到 `duration-300`（狀態轉換）
- 禁止使用 `transition-[width]`、`transition-[height]`
