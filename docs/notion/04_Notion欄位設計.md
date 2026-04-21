# Notion 欄位設計 v1

> 目標：建立一套可支援個人專案 AI 開發閉環的 Notion 結構。
> 本版先以作品集網站為第一個驗證樣板。

---

# 一、建議建立的資料庫

至少建立以下 4 個資料庫：

1. **需求追蹤（Tasks）**
2. **規則庫（Rules）**
3. **技術研究（R&D / Tech Radar）**
4. **專案清單（Projects）**

建議之後再補：

5. **Learnings / Task Logs**

---

# 二、資料庫 1：需求追蹤（Tasks）

## 用途

集中管理所有任務、規格、狀態、驗收、部署與 learnings。

## 建議欄位

| 欄位名稱 | 類型 | 說明 |
|---|---|---|
| Task Name | Title | 任務名稱 |
| Task ID | Text | 例如 `PORT-001` |
| Project | Relation | 關聯 Projects 資料庫 |
| Type | Select | Feature / Bug / Refactor / Content / Research / Ops |
| Priority | Select | P0 / P1 / P2 / P3 |
| Status | Status | Inbox / Triaged / Spec Draft / Ready for Dev / In Progress / In Review / Test Failed / Human Review Required / Approved / Deployed / Learned |
| Owner | Select | Human / Director / PM / Dev / Test / R&D |
| Summary | Text | 任務摘要 |
| Goal | Text | 任務目標 |
| Scope | Text | 本次包含內容 |
| Non-goals | Text | 本次不包含內容 |
| Acceptance Criteria | Text | 驗收標準 |
| Test Cases | Text | 測試項目 |
| Risks | Text | 風險說明 |
| Branch | Text | 例如 `feat/home-hero` |
| Worktree Path | Text | 例如 `../worktrees/feature-home-hero` |
| Repo | URL | 對應 repo |
| Spec Doc | URL | 規格頁或文件連結 |
| Related Rules | Relation | 關聯 Rules |
| Learning Log | Relation | 關聯 Learnings |
| Need Deploy Check | Checkbox | 是否需部署驗證 |
| Deployment Target | Multi-select | Netlify / Supabase / Cloud Run / App Store / Other |
| Created At | Created time | 建立時間 |
| Updated At | Last edited time | 更新時間 |
| Done Definition Met | Checkbox | 是否達成 Done Definition |

## 建議視圖

### 1. Board：依 Status 分組
用於日常追蹤。

### 2. Table：依 Project 篩選
用於單一專案查看。

### 3. Calendar：依建立或更新日期
用於檢查近期活動。

### 4. QA View：篩選 `Status = In Review / Test Failed`
用於審核與測試。

### 5. Deploy View：篩選 `Need Deploy Check = true`
用於部署驗證。

---

# 三、資料庫 2：規則庫（Rules）

## 用途

統一管理 Global Rules、Project Rules、Candidate Rules。

## 建議欄位

| 欄位名稱 | 類型 | 說明 |
|---|---|---|
| Rule Name | Title | 規則名稱 |
| Rule Type | Select | Global / Project / Candidate |
| Project | Relation | 若為 Project Rule，關聯專案 |
| Category | Select | Git / Coding / UI / Testing / Deployment / Security / Workflow / Research |
| Rule Statement | Text | 規則內容 |
| Why | Text | 建立原因 |
| Trigger Source | Select | Bug / Refactor / Review / Research / Manual |
| Source Task | Relation | 來源任務 |
| Confidence | Select | Low / Medium / High |
| Status | Select | Draft / Active / Deprecated |
| Created At | Created time | 建立時間 |
| Updated At | Last edited time | 更新時間 |

## 建議視圖

- Active Global Rules
- Active Project Rules
- Candidate Rules Review
- Deprecated Rules

---

# 四、資料庫 3：技術研究（R&D / Tech Radar）

## 用途

用來管理新技術、新工具、新套件與替代方案評估，不直接進入正式規則。

## 建議欄位

| 欄位名稱 | 類型 | 說明 |
|---|---|---|
| Topic | Title | 技術主題 |
| Category | Select | Frontend / Backend / Infra / AI Workflow / Testing / Styling / DX |
| Source | URL | 來源文章或 repo |
| Summary | Text | 摘要 |
| Potential Benefit | Text | 潛在價值 |
| Cost / Risk | Text | 導入成本與風險 |
| Suggested Use | Text | 建議在哪個專案測試 |
| Status | Select | Inbox / Reviewing / Candidate / Adopted / Rejected |
| Reviewed At | Date | 檢查日期 |
| Related Project | Relation | 對應專案 |
| Related Rule | Relation | 若採納則關聯規則 |

## 建議流程

- 先進入 `Inbox`
- 評估後進入 `Candidate`
- 至少實測 1 次再決定 `Adopted` 或 `Rejected`

---

# 五、資料庫 4：專案清單（Projects）

## 用途

統一管理各專案的基礎資訊、技術棧與部署資訊。

## 建議欄位

| 欄位名稱 | 類型 | 說明 |
|---|---|---|
| Project Name | Title | 專案名稱 |
| Type | Select | Portfolio / Marketing Site / App / Backend / Experimental |
| Status | Select | Active / Paused / Archived |
| Stack | Text | 技術棧 |
| Repo URL | URL | GitHub 連結 |
| Frontend Deploy | Select | Netlify / Vercel / Other |
| Backend Deploy | Select | Cloud Run / Render / Railway / None / Other |
| Database | Select | Supabase / None / Other |
| Main Branch | Text | 預設主分支 |
| Has CI | Checkbox | 是否有 CI |
| Notes | Text | 備註 |

## 你的目前初始資料建議

### 1. 作品集
- Type: Portfolio
- Stack: React + Vite + TypeScript + Tailwind
- Frontend Deploy: Netlify（若未上線可先留空）

### 2. 汽車官網
- Type: Marketing Site
- Stack: React + Express + styled-components
- Frontend Deploy: Netlify
- Backend Deploy: Cloud Run
- Database: Supabase

### 3. 喝水 App
- Type: App
- Stack: React Native

---

# 六、資料庫 5：Learnings / Task Logs（建議加開）

## 用途

將任務完成後的經驗結構化，不要只散落在對話中。

## 建議欄位

| 欄位名稱 | 類型 | 說明 |
|---|---|---|
| Log Title | Title | 紀錄名稱 |
| Project | Relation | 對應專案 |
| Source Task | Relation | 來源任務 |
| Type | Select | Learning / Bug Pattern / Deployment Note / Review Note |
| What Happened | Text | 發生了什麼 |
| Root Cause | Text | 根因 |
| Fix | Text | 解法 |
| Reusable Rule | Text | 可抽成規則的內容 |
| Status | Select | Draft / Reviewed / Applied |
| Created At | Created time | 建立時間 |

---

# 七、Notion 關聯結構建議

建議關聯如下：

- Tasks → Projects
- Tasks → Rules
- Tasks → Learnings
- Rules → Projects
- Rules → Tasks
- R&D → Projects
- R&D → Rules
- Learnings → Tasks
- Learnings → Projects

這樣可以做到：
- 從某個任務看到它衍生出哪些規則
- 從某條規則回溯它來自哪個 bug 或哪次審核
- 從某個專案集中看到目前有哪些 active rules 與 learnings

---

# 八、作品集專案的初始建議

由於作品集是第一個 workflow 驗證樣板，建議先建以下任務：

1. 首頁 Hero 區塊優化
2. 專案卡片元件一致化
3. Navbar 響應式優化
4. 聯絡表單驗證補強
5. SEO / metadata 補齊

每一個任務都應：
- 建一筆 Task
- 建一份 Spec
- 指派一個 branch
- 指派一個 worktree path
- 任務完成後寫一筆 Learning

---

# 九、Notion 頁面層級建議

除了資料庫，首頁建議建立以下固定頁：

## 1. AI 開發作業台
放置：
- 目前任務
- 待審核任務
- 候選規則
- 最近 learnings

## 2. Workflow SOP
放置：
- 8 步閉環說明
- Worktree 操作說明
- 任務狀態機

## 3. Global Rules
放置：
- 全域規則總表

## 4. 專案入口頁
每個專案各自一頁，放置：
- 專案簡介
- 技術棧
- 部署資訊
- Project Rules
- 任務列表

---

# 十、Notion 可直接貼上的建立順序

1. 建立 Projects
2. 建立 Tasks
3. 建立 Rules
4. 建立 R&D
5. 建立 Learnings
6. 建立 Workflow SOP 頁
7. 建立 Global Rules 頁
8. 建立 Portfolio 專案頁

這個順序最適合你目前「僅建立工作區，但還沒有頁面與資料庫」的狀態。
