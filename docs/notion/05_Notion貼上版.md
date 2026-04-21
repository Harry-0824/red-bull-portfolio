# Notion 貼上版 v1

以下內容可直接貼到 Notion，作為初始化頁面骨架。

---

# AI 開發作業台

## 目前目標
- 建立個人專案 AI 多代理工作流
- 以作品集網站作為第一個驗證樣板
- 採用 Hermes 為主、OpenClaw 為輔
- 限制為免費模型與免費部署方案
- 多代理開發一律使用 Git Worktree 隔離

## 本地工具前提
- VSCode + Copilot
- OpenClaw 已安裝
- Notion 尚未建立資料庫
- GitHub repo 已建立（作品集 / 汽車官網）

## 專案清單
- 作品集：React + Vite + TypeScript + Tailwind
- 汽車官網：React + Express + styled-components
- 喝水 App：React Native

## 部署前提
- 前端：Netlify
- 資料庫 / Auth：Supabase
- 後端：Cloud Run 或其他免費服務

---

# Workflow SOP

## 核心原則
- 先規格，後實作
- 一任務一分支
- 一代理一工作目錄
- 每任務使用 Git Worktree 隔離
- 通過測試後才可進入驗收
- 規則需分層管理

## 通用 8 步閉環
1. 任務進件
2. 任務分流
3. 規格生成
4. 建立 branch + worktree
5. 實作與自查
6. 自動驗證
7. 規格對照審核
8. 知識沉澱與規則更新

## 任務狀態
- Inbox
- Triaged
- Spec Draft
- Ready for Dev
- In Progress
- In Review
- Test Failed
- Human Review Required
- Approved
- Deployed
- Learned

---

# Git Worktree SOP

## 原則
- 每個任務都要有獨立 worktree
- 不可多代理共用同一 worktree
- 任務完成後需清理 worktree

## 建立指令
```bash
git worktree add -b feat/home-hero ../worktrees/feature-home-hero
```

## 查看指令
```bash
git worktree list
```

## 移除指令
```bash
git worktree remove ../worktrees/feature-home-hero
```

## 命名規範
- `feat/<slug>`
- `fix/<slug>`
- `refactor/<slug>`

對應 worktree：
- `feature-<slug>`
- `bug-<slug>`
- `refactor-<slug>`

---

# Global Rules 首頁摘要

## 任務管理
- feature 與 refactor 先寫 spec
- bug 至少要有重現條件
- 所有任務都要進狀態機

## Git 管理
- 不直接在 main 開發
- 一任務一 branch
- 一任務一 worktree

## 品質要求
- lint / type check / build 為最低檢查
- 表單需驗證
- API 呼叫需處理 loading / success / error

## 免費部署原則
- 前端預設 Netlify
- 資料庫與 Auth 優先 Supabase
- 後端優先 stateless / scale-to-zero

---

# Portfolio 專案頁

## 目標
將作品集作為第一個 workflow 驗證樣板。

## 優先任務
1. Hero 區塊優化
2. 專案卡片一致化
3. Navbar 響應式優化
4. 聯絡表單驗證
5. SEO / metadata 補齊

## 初始 Project Rules
- 優先維持簡潔與可維護元件化
- 優先處理 RWD、可讀性與展示一致性
- 不為了炫技加入高維護成本動畫
- 優先靜態內容與輕量互動

---

# Tasks 資料庫欄位
- Task Name
- Task ID
- Project
- Type
- Priority
- Status
- Owner
- Summary
- Goal
- Scope
- Non-goals
- Acceptance Criteria
- Test Cases
- Risks
- Branch
- Worktree Path
- Repo
- Spec Doc
- Related Rules
- Learning Log
- Need Deploy Check
- Deployment Target

---

# Rules 資料庫欄位
- Rule Name
- Rule Type
- Project
- Category
- Rule Statement
- Why
- Trigger Source
- Source Task
- Confidence
- Status

---

# R&D 資料庫欄位
- Topic
- Category
- Source
- Summary
- Potential Benefit
- Cost / Risk
- Suggested Use
- Status
- Reviewed At
- Related Project
- Related Rule

---

# Learnings 資料庫欄位
- Log Title
- Project
- Source Task
- Type
- What Happened
- Root Cause
- Fix
- Reusable Rule
- Status
