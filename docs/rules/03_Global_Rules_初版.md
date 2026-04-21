# Global Rules 初版 v1

> 此文件定義所有個人專案共用的開發規則。
> 所有規則應區分為 Global Rules、Project Rules 與 Candidate Rules。

---

## 1. 規則分層原則

### Global Rules
適用所有專案。

### Project Rules
只適用單一專案。

### Candidate Rules
尚未證明穩定，需觀察 2–3 次以上再升級。

---

## 2. 任務管理規則

1. 所有功能開發、bug 修復與重構任務都必須建立任務記錄。
2. `feature` 與 `refactor` 任務必須先寫規格，才可進入實作。
3. `bug` 任務至少要寫出重現條件與預期行為。
4. 任務狀態必須使用統一狀態機，不得只靠聊天訊息追蹤。
5. 任務結束後必須回填 learnings。

---

## 3. Git 與分支規則

1. 每一個任務必須對應一個 branch。
2. 每一個任務必須對應一個獨立 git worktree。
3. 不允許多個代理共用同一個 worktree。
4. branch 命名規則：
   - `feat/<slug>`
   - `fix/<slug>`
   - `refactor/<slug>`
   - `chore/<slug>`
   - `research/<slug>`
5. worktree 命名規則：
   - `feature-<slug>`
   - `bug-<slug>`
   - `refactor-<slug>`
6. 完成功能後需移除對應 worktree。
7. 不可直接在 main / master 上開發。

Git 官方文件指出，同一 repository 可同時掛載多個 working trees，適合讓多分支並行開發，因此此規則為強制。 citeturn426605search1

---

## 4. Commit 與變更規則

1. 每次 commit 應聚焦單一目的。
2. 不可把無關格式化與功能修改混在同一 commit。
3. Commit 訊息建議採用：
   - `feat: ...`
   - `fix: ...`
   - `refactor: ...`
   - `docs: ...`
   - `test: ...`
4. 大型改動需先拆任務再拆 commit。
5. 每次提交前至少先跑 lint 與 build。

---

## 5. 開發規則

1. 先理解需求與影響範圍，再開始修改。
2. 優先局部改動，避免無關檔案大面積重寫。
3. 元件與函式命名應表意清楚。
4. 不因短期方便而寫難以維護的硬編碼邏輯。
5. 新增抽象前，先確認是否真的有重複需求。
6. 不新增無必要依賴。
7. 共用元件要先確認是否會破壞其他頁面。

---

## 6. 程式品質規則

1. 所有專案都需具備 lint 與 build 檢查。
2. TypeScript 專案應避免 `any` 濫用。
3. 表單與使用者輸入需做基本驗證。
4. API 呼叫需處理 loading / success / error 三種狀態。
5. 不允許將 production secrets 寫入前端程式碼。
6. 必要時補最小測試案例，而非全面追求高覆蓋率。

---

## 7. UI / UX 規則

1. 響應式行為需在手機與桌機檢查。
2. 互動元件應具備清楚 hover / active / disabled 狀態。
3. 文案、間距、元件層級應保持一致。
4. 若改動首頁或核心流程，需補基本可用性檢查。
5. 能用設計 token 或共用樣式管理者，不做重複散落定義。

---

## 8. 驗證規則

每次任務至少應完成：

- lint
- type check（若專案支援）
- build
- 必要功能測試

若任務涉及：
- 表單：需測輸入錯誤與成功送出
- 響應式：需檢查 mobile / desktop
- API：需測失敗 fallback
- 部署：需檢查 env 與 build output

---

## 9. 記憶與規則更新規則

1. 每次任務完成後都應整理 learnings。
2. 同一模式至少重複出現 2 次，才考慮升級為 Project Rule。
3. 跨專案穩定成立的規則，才可升級為 Global Rule。
4. 新技術只可先進入 Candidate Rules。
5. 不允許 R&D 結果直接覆蓋既有 Global Rules。

---

## 10. 免費模型使用規則

1. 任務需拆小，避免單次上下文過大。
2. 優先使用模板化規格，減少模型重複理解成本。
3. 固定流程應封裝成工作流，不要每次都重規劃。
4. 先做人審核後再更新規則庫。
5. 複雜重構優先人工主導，agent 輔助。

Hermes 與 Lobster 的公開定位，都支持這種設計方向：Hermes 偏長期記憶與技能演化；Lobster 偏多步驟流程封裝與減少 re-planning。 citeturn828048search0turn828048search1turn828048search4turn828048search5

---

## 11. 免費部署規則

1. 前端預設部署於 Netlify Free。
2. 資料與認證優先 Supabase Free。
3. 後端 API 優先無常駐、可 scale-to-zero 的方案。
4. 優先靜態站點與輕量 API。
5. 媒體資產需壓縮與分層管理，避免免費額度浪費。
6. 若可不用獨立後端，就不新增後端服務。

公開文件顯示：Netlify free plan 為 always-free 且有月度硬性限制；Supabase Free 提供 2 個 free projects；Cloud Run 提供每月重置的 free tier。 citeturn828048search2turn828048search7turn426605search0

---

## 12. 汽車官網額外全域約束

由於汽車官網已有 Netlify + Supabase + Cloud Run 部署前提，因此新增以下共通規範：

1. 前端與 API 端點需明確分環境設定。
2. `.env.example` 必須維持可用。
3. 禁止將 service-role key 用於前端。
4. API 若可改為 serverless / edge function，優先評估。
5. 合併前必須檢查前後端部署是否一致。

---

## 13. 規則維護節奏

- 每週一次：整理 Candidate Rules
- 每兩週一次：回顧失敗任務
- 每月一次：檢查是否有應淘汰的 Global Rules

