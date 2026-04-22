# Task

Portfolio Footer Information Cleanup V1

## Context

本專案已完成 Hero、Navbar、anchor 對齊與 Contact section 骨架。
目前首頁底部已存在基本 Footer，但內容仍偏簡略，尚未形成清楚的資訊收尾區塊，因此需要先進行第一版 Footer 整理。

## Goal

優化 Footer 的內容與資訊層級，使其能作為首頁結尾區塊，提供基本品牌識別、版權資訊與必要的輔助導覽或聯絡資訊。

## Scope

本次任務僅處理 Footer 區塊，包含：

- 整理 Footer 文案內容
- 規劃基本資訊層級
- 提升可讀性與收尾完整度
- 視需要加入簡單的輔助連結或聯絡資訊
- 與目前作品集視覺風格保持一致

## Non-goals

本次任務不包含：

- 全站重新設計
- Contact form 串接
- 新增社群 API 或第三方元件
- SEO / metadata 優化
- 大規模版面重構
- 動畫庫導入或複雜互動設計

## UX / UI Notes

Footer 第一版可考慮至少包含：

- 品牌名稱或個人名稱
- 簡短版權文字
- 可選的輔助導覽，例如：
  - 回到頂部
  - GitHub
  - Email
- 清楚但不喧賓奪主的排版

若目前尚未決定最終資訊，可先做簡潔版本，但結構需清楚且方便後續擴充。

## Technical Constraints

- 優先沿用現有專案結構與樣式方式
- 不新增不必要依賴
- 僅修改與 Footer 直接相關的最小範圍檔案
- 若需修改超出最小範圍，需先說明原因
- 不重構其他首頁區塊

## Acceptance Criteria

- Footer 內容比目前更清楚完整
- 至少具備品牌/名稱與版權資訊
- 若有輔助連結，其語意與排版合理
- Footer 與整體首頁風格不衝突
- 本次修改不應破壞其他區塊
- 修改後專案可正常執行與 build
- 不引入新的依賴或不必要的複雜互動

## Test Cases

1. 檢查 Footer 文案與資訊層級是否清楚
2. 檢查桌機與手機版 Footer 可讀性
3. 若有連結，確認可正常點擊
4. 檢查本次修改未破壞其他首頁區塊
5. 執行 lint / build，確認未新增明顯錯誤

## Risks

- 若資訊加太多，Footer 可能失去簡潔性
- 若內容太少，則無法形成有效收尾
- 若加入過多連結，可能與 Navbar/Contact 區塊功能重疊

## Done Definition

當以下條件成立時，視為完成：

- Footer 第一版整理完成
- 基本人工驗收通過
- 本次任務可寫回 Tasks 與 Learnings
