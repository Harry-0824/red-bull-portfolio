# Task

Portfolio Project Type Extraction V1

## Context

本專案在 ProjectGallery 與 ProjectModal 之間共用同一批 project 資料，但目前資料結構與型別定義未集中管理。此前在清理 placeholder 連結時，已暴露出 links 欄位型別假設不一致的問題，因此需要將 project 型別抽離為共用定義。

## Goal

建立可共用的 Project 型別，讓 ProjectGallery 與 ProjectModal 使用一致的資料結構，降低型別漂移、重複維護與後續修改風險。

## Scope

本次任務僅處理 project 型別抽離與引用整理，包含：

- 建立共用的 Project 型別定義
- 讓 ProjectGallery 使用共用型別
- 讓 ProjectModal 使用共用型別
- 確保 links 等可選欄位定義一致
- 在不改動現有 UI 行為的前提下完成型別整理

## Non-goals

本次任務不包含：

- ProjectGallery 視覺重構
- Modal UI 重寫
- 新增專案資料欄位
- 重做資料來源架構
- 新增套件
- 調整首頁其他 section

## UX / UI Notes

本任務屬於結構整理任務，不應改變使用者可見的 UI 行為。
若任務完成後畫面有變動，應視為額外變更，需重新檢查是否超出範圍。

## Technical Constraints

- 優先採用最小範圍修改
- 不新增不必要依賴
- 不修改與 project 型別無關的元件
- 可新增型別檔案，例如 `src/types/project.ts`
- 僅調整與 ProjectGallery / ProjectModal 直接相關的型別引用
- 不重構整個資料流

## Acceptance Criteria

- Project 型別有單一共用來源
- ProjectGallery 與 ProjectModal 均引用同一份 Project 型別
- links 欄位的 optional 定義一致
- 專案可正常通過 TypeScript 檢查
- 修改不應改變既有 UI 行為
- 不引入新的依賴

## Test Cases

1. 檢查 ProjectGallery 與 ProjectModal 均成功引用共用型別
2. 檢查 TypeScript 不再出現 links 欄位不一致錯誤
3. 檢查 ProjectGallery 卡片與 ProjectModal 顯示行為與修改前一致
4. 執行 lint / build，確認未新增明顯錯誤

## Risks

- 若共用型別抽取不完整，可能只把重複問題移到別處
- 若現有資料結構其實已有隱性差異，抽型別時可能需要做最小的欄位協調
- 若順手重構過多，容易超出本次任務範圍

## Done Definition

當以下條件成立時，視為完成：

- 共用 Project 型別建立完成
- ProjectGallery 與 ProjectModal 型別引用已統一
- TypeScript 檢查通過
- 本次任務可寫回 Tasks 與 Learnings
