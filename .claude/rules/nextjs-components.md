---
paths:
  - "src/components/**"
  - "src/app/**"
---

# Next.js 元件開發規範

## Server vs Client Component

| 情境                              | 類型              | 標記                |
| --------------------------------- | ----------------- | ------------------- |
| 純展示、無狀態、無事件            | Server Component  | 無需標記（預設）    |
| 使用 `useState`、`useEffect`      | Client Component  | `'use client'`      |
| 使用 Framer Motion `motion.*`     | Client Component  | `'use client'`      |
| 使用瀏覽器 API（`window` 等）     | Client Component  | `'use client'`      |
| 只接收 props 渲染                 | Server Component  | 無需標記            |

## TypeScript Props 定義

```tsx
// ✅ 正確：使用 interface
interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  onClick?: () => void;
}

export default function ProjectCard({ title, category, tags, onClick }: ProjectCardProps) { ... }

// ❌ 禁止：React.FC
const ProjectCard: React.FC<Props> = () => { ... }

// ❌ 禁止：any
function ProjectCard({ data }: { data: any }) { ... }
```

## 樣式規則

- 使用 Tailwind CSS 工具類，不使用 `style={{}}` 物件（動態背景等特殊情況除外）
- 色系必須引用 F1 設計變數：`bg-rbr-navy`、`text-rbr-red`、`hover:text-rbr-yellow`
- 響應式使用 Tailwind 斷點：`md:` (768px)、`lg:` (1024px)
- 容器最大寬度使用 `max-w-6xl mx-auto`

## Import 順序

```tsx
// 1. React / Next.js
import { useState } from 'react';
import Image from 'next/image';

// 2. 第三方套件
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// 3. 本地元件
import ProjectModal from './ProjectModal';

// 4. 型別（如需）
import type { Project } from '@/types';
```

## 效能注意事項

- 大型列表使用 `React.memo` 避免不必要的重渲染
- 事件處理函式使用 `useCallback` 包裹（當傳遞給子元件時）
- 避免在 render 中建立新物件/陣列（提取為常數或 `useMemo`）
