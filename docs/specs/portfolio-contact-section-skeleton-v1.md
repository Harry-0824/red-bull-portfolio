# Task

Portfolio Contact Section Skeleton V1

## Context

本專案已完成 Hero、Navbar 與首頁 anchor 對齊的前幾輪優化。
目前首頁導覽與 Hero CTA 已包含 `#contact` 目標，但實際上尚未有對應的 Contact section，因此需要先建立一個可維護的聯絡區塊骨架。

## Goal

建立首頁 Contact section 的第一版骨架，使其具備基本資訊層級與可擴充性，並能作為 `#contact` 的正確 anchor target。

## Scope

本次任務僅處理 Contact section 骨架，包含：

- 建立 Contact section 的最外層容器
- 加上正確且一致的 `id="contact"`
- 建立 section 標題與簡短說明
- 建立基本聯絡資訊或聯絡入口的展示骨架
- 與現有首頁風格保持一致
- 不破壞現有首頁其他區塊結構

## Non-goals

本次任務不包含：

- 真實表單串接
- Email 發送功能
- 後端 API 串接
- 第三方表單服務整合
- 驗證邏輯
- CAPTCHA
- 完整 UI 精修
- 動畫系統新增或重構

## UX / UI Notes

Contact section 第一版應至少包含：

- 區塊標題
- 區塊簡短描述
- 一至兩個聯絡入口骨架，例如：
  - Email
  - GitHub
  - LinkedIn
- 清楚可讀的排版
- 與目前作品集風格一致的視覺語言

若目前尚未決定正式聯絡資訊，可先使用 placeholder，但結構必須清楚且未來容易替換。

## Technical Constraints

- 優先沿用現有專案結構與樣式方式
- 不新增不必要依賴
- 保持 TypeScript 與 Next.js 結構穩定
- 僅修改與 Contact section 直接相關的最小範圍檔案
- 若需修改超出最小範圍，需先說明原因
- 不重構其他首頁區塊

## Acceptance Criteria

- 首頁中存在可作為 anchor target 的 `id="contact"`
- Contact section 至少具備標題、描述與基本聯絡入口骨架
- 區塊排版清楚、可讀、與現有首頁風格不衝突
- Hero 與 Navbar 的 `#contact` 導覽可對應到此區塊
- 本次修改不應破壞既有版面與元件結構
- 修改後專案可正常執行與 build
- 不引入新的依賴或不必要的複雜互動

## Test Cases

1. 點擊 Hero 的次要 CTA，確認可跳轉到 Contact section
2. 點擊 Navbar 的 `聯絡我`，確認可跳轉到 Contact section
3. 檢查 Contact section 在桌機與手機版皆可讀
4. 檢查本次修改未破壞其他首頁區塊
5. 執行 lint / build，確認未新增明顯錯誤

## Risks

- 若聯絡資訊尚未定稿，placeholder 內容需避免過度承諾
- 若 Contact section 位置安排不當，可能影響首頁節奏
- 若區塊結構寫死過深，後續串接表單時可能需要重整

## Done Definition

當以下條件成立時，視為完成：

- Contact section 第一版骨架完成
- `#contact` 對應成立
- 基本人工驗收通過
- 本次任務可寫回 Tasks 與 Learnings
