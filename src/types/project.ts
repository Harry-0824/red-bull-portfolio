// Project 是作品卡片與詳細 Modal 的共用資料契約，避免兩邊各自猜測欄位。

export interface Project {
  title: string;
  category: string;
  description: string;
  objective: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  // 圖片欄位已移除，Modal 改為純文字單欄呈現。
  // links 欄位皆為選填，ProjectModal 會依實際存在的連結決定要顯示哪些按鈕。
  links: {
    live?: string;
    github?: string;
    githubBackend?: string;
  };
  tags: string[];
  // readinessNote 用於補充作品目前狀態；沒有填寫時卡片與 Modal 都會略過該區塊。
  readinessNote?: string;
}
