# Task

Portfolio Section Anchor Alignment V1

## Context

本專案已完成首頁 Hero 區塊第一版優化，以及 Navbar 響應式優化。
目前首頁中的 CTA 與導覽連結已具備基本結構，但對應的 section anchor 是否與頁面實際區塊一致，仍需整理與對齊。

## Goal

整理首頁主要導覽與 CTA 的 anchor 目標，讓使用者點擊後能正確跳轉到對應區塊，建立更完整的單頁導覽體驗。

## Scope

本次任務僅處理首頁 section anchor 對齊，包含：

- 檢查 Navbar 內各導覽連結的 href target
- 檢查 Hero CTA 的 href target
- 確認首頁對應 section 是否存在
- 為對應區塊補上正確且一致的 id
- 在不破壞現有版面的前提下，完成基本導覽對齊

## Non-goals

本次任務不包含：

- 全站重新命名 section 結構
- 重寫 Hero 或 Navbar 視覺樣式
- 大規模重構首頁 layout
- 新增動畫庫或平滑捲動套件
- 串接真實表單、後端或資料來源
- SEO 優化或 metadata 調整

## UX / UI Notes

使用者點擊以下入口時，應能合理對應到頁面中已有區塊：

- Hero 主 CTA
- Hero 次要 CTA
- Navbar links

若某些對應區塊目前僅為骨架，仍應保留清楚的 section id，確保之後擴充時不需重做導覽結構。

命名需保持清楚、可讀且一致，例如：

- `projects`
- `contact`
- `performance`
- `stats`

## Technical Constraints

- 優先沿用目前既有元件與首頁結構
- 不新增不必要依賴
- 不修改與 anchor 對齊無關的樣式
- 僅修改與 section id、href target 對齊直接相關的最小範圍檔案
- 若需修改超出最小範圍，需先說明原因
- 保持 TypeScript 與 Next.js 既有結構穩定

## Acceptance Criteria

- Hero 主 CTA 與次要 CTA 對應到正確 section
- Navbar links 對應到正確 section
- 對應 section 在首頁中實際存在
- section id 命名一致、可讀且可維護
- 本次修改不應破壞既有版面或元件結構
- 修改後首頁可正常執行與基本導覽操作
- 不引入新的版面錯誤或不必要依賴

## Test Cases

1. 點擊 Hero 主 CTA，確認可跳到正確 section
2. 點擊 Hero 次要 CTA，確認可跳到正確 section
3. 點擊 Navbar 各導覽項目，確認可跳到正確 section
4. 檢查手機版 Navbar 展開後點擊連結仍可正常跳轉
5. 檢查本次修改未破壞首頁既有排版
6. 執行 lint / build，確認未新增明顯錯誤

## Risks

- 若目前 section 結構命名不清楚，可能需要少量整理
- 若某些區塊由多層元件組成，id 放置位置需避免影響 layout
- 若首頁仍有骨架型區塊，可能需要先決定暫時性的 section 對應方式

## Done Definition

當以下條件成立時，視為完成：

- Hero 與 Navbar 的 anchor 全部對齊完成
- 首頁主要 section 已具備一致且正確的 id
- 基本人工驗收通過
- 本次任務可寫回 Tasks 與 Learnings
