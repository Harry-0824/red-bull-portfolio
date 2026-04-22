# Task

Portfolio Project Gallery Information Cleanup V1

## Context

本專案已完成首頁基礎結構、導覽、Contact section 與 Footer 的第一輪整理。
目前 ProjectGallery 已作為首頁核心作品展示區塊之一，但其資訊呈現若仍偏骨架或內容層級不足，會影響作品集的整體說服力，因此需要先進行第一版資訊整理。

## Goal

優化 ProjectGallery 的資訊呈現，使專案卡片或展示區塊能更清楚傳達每個作品的定位、類型與重點，提升作品集的可讀性與專業感。

## Scope

本次任務僅處理 ProjectGallery 的資訊整理，包含：

- 檢查目前專案展示區塊的資訊結構
- 整理專案名稱、描述與輔助資訊
- 提升不同專案之間的資訊一致性
- 改善內容層級與可讀性
- 在不重構整體 layout 的前提下，完成第一版資訊整理

## Non-goals

本次任務不包含：

- 完整重做 ProjectGallery 視覺設計
- 新增複雜動畫
- 後端串接
- 真實資料來源串接
- 大規模卡片結構重構
- Modal 重做
- 新增套件

## UX / UI Notes

ProjectGallery 第一版資訊整理建議至少包含：

- 每個專案有清楚名稱
- 每個專案有簡短描述
- 若已有輔助資訊（技術棧、類型、狀態），需更一致
- 避免某些卡片資訊過多、某些卡片資訊過少
- 使用者應能快速理解每個專案是做什麼的

優先改善資訊內容與層級，而不是優先追求花俏效果。

## Technical Constraints

- 優先沿用現有 ProjectGallery 結構
- 不新增不必要依賴
- 不修改與 ProjectGallery 無關的區塊
- 不重構整體 page 結構
- 僅修改與 ProjectGallery 直接相關的最小範圍檔案
- 若需修改超出範圍，需先說明原因

## Acceptance Criteria

- ProjectGallery 的專案資訊比目前更清楚
- 至少改善名稱、描述或輔助資訊的一致性
- 使用者可更快理解各專案內容
- 本次修改不應破壞其他首頁區塊
- 不引入新的依賴或不必要互動
- 修改後專案可正常執行與 build

## Test Cases

1. 檢查各專案名稱與描述是否清楚
2. 檢查不同專案卡片的資訊層級是否一致
3. 檢查桌機與手機版下內容是否仍可讀
4. 檢查本次修改未破壞其他首頁區塊
5. 執行 lint / build，確認未新增明顯錯誤

## Risks

- 若現有專案資料本身不完整，整理效果會受限
- 若某些卡片內容寫法差異太大，可能需先統一格式
- 若資訊加太多，反而會降低掃讀效率

## Done Definition

當以下條件成立時，視為完成：

- ProjectGallery 第一版資訊整理完成
- 基本人工驗收通過
- 本次任務可寫回 Tasks 與 Learnings
