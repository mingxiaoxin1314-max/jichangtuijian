export interface PostItem {
  id: string;
  slug: string;
  title: string;
  desc: string;
  category: "avoid-pitfalls" | "underlying" | "client-guide" | "benchmark";
  categoryName: string;
  categoryColor: string;
  updatedAt: string;
  readTime: string;
  featured?: boolean;
}

export const postCategories = [
  { id: "all", name: "全部专栏" },
  { id: "avoid-pitfalls", name: "选型避坑" },
  { id: "underlying", name: "网络底层" },
  { id: "client-guide", name: "实操配置" },
  { id: "benchmark", name: "基准测试" },
] as const;

export const postList: PostItem[] = [
  {
    id: "chatgpt-ai-network-guide",
    slug: "chatgpt-ai-network-guide",
    title: "2026 ChatGPT 与 Claude 专用网络专线选型指南：告别封号与 Access Denied 终极方案",
    desc: "AI 生产力必读：拆解 OpenAI 与 Claude 核心风控机制，详解原生双 ISP 住宅 IP 与 WebSocket 零丢包专线选型策略。",
    category: "avoid-pitfalls",
    categoryName: "选型避坑",
    categoryColor: "blue",
    updatedAt: "2026-11-24",
    readTime: "12 分钟",
    featured: true
  },
  {
    id: "shadowrocket-mobile-guide",
    slug: "shadowrocket-mobile-guide",
    title: "Shadowrocket（小火箭）与 Android 移动端配置全攻略：从节点导入到规则分流",
    desc: "移动端全能实操：iOS 小火箭正版获取、一键导入订阅，配置规则智能分流防国内断网，以及安卓端耗电与后台保活优化。",
    category: "client-guide",
    categoryName: "实操配置",
    categoryColor: "purple",
    updatedAt: "2026-11-24",
    readTime: "11 分钟",
    featured: true
  },
  {
    id: "2026-beginner-guide",
    slug: "2026-beginner-guide",
    title: "2026 新手科学选购网络专线避坑指南：告别虚标与年付陷阱",
    desc: "新手必读基准：深度拆解低价虚标套路、跑路小作坊特征，为什么坚持月付是最佳自保手段，以及如何制定合理的网络预算。",
    category: "avoid-pitfalls",
    categoryName: "选型避坑",
    categoryColor: "blue",
    updatedAt: "2026-11-18",
    readTime: "10 分钟",
    featured: true
  },
  {
    id: "iepl-vs-iplc-guide",
    slug: "iepl-vs-iplc-guide",
    title: "IEPL 与 IPLC 内网专线技术深度科普：为什么晚高峰从不拥堵？",
    desc: "深入底层网络架构：公网直连、BGP 隧道与点对点内网物理专线差异，从计算机网络与电信 QoS 流量整形揭秘抗抖动真相。",
    category: "underlying",
    categoryName: "网络底层",
    categoryColor: "indigo",
    updatedAt: "2026-11-18",
    readTime: "12 分钟",
    featured: true
  },
  {
    id: "client-config-guide",
    slug: "client-config-guide",
    title: "Clash Verge Rev 与 Sing-box 客户端从零到精通配置指南",
    desc: "现代代理客户端深度实操：通用订阅一键导入、Mihomo 内核切换、开启全局 TUN 虚拟网卡与杜绝 DNS 泄漏全套策略。",
    category: "client-guide",
    categoryName: "实操配置",
    categoryColor: "purple",
    updatedAt: "2026-11-18",
    readTime: "11 分钟",
    featured: true
  },
  {
    id: "speedtest-methodology",
    slug: "speedtest-methodology",
    title: "晚高峰网络测速与性能压力测试方法论：丢包率与抖动为什么比带宽更重要？",
    desc: "专业工程师压测模型：32 线程持续并发测试、Jitter 抖动方差计算公式，以及判断原生双 ISP 纯净住宅 IP 的全套检验方案。",
    category: "benchmark",
    categoryName: "基准测试",
    categoryColor: "emerald",
    updatedAt: "2026-11-18",
    readTime: "13 分钟",
    featured: true
  }
];
