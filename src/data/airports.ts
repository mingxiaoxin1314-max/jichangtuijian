export interface AirportItem {
  rank: number;
  id: string;
  name: string;
  // 外部官网推广链接的 Base64 密文（保留兼容）
  targetB64: string;
  // 外部官网推广直链目标（仅供 301 重定向与跳转页使用）
  targetUrl: string;
  couponCode: string;
  establishedYear: string;
  monthlyPrice: string;
  planDesc: string;
  lineType: string;
  protocols: string;
  badge: string;
  tags: string[];
  description?: string;
  score?: number;
}

export const airportList: AirportItem[] = [
  {
    rank: 1,
    id: "yunjiexian",
    name: "云界线",
    targetB64: "aHR0cHM6Ly85NjI1bW9mYW4wMS55dW5qaWV4aWFuYWZmLmNvbS8jLz9jb2RlPU9PWWhTajBM",
    targetUrl: "https://9625mofan01.yunjiexianaff.com/#/?code=OOYhSj0L",
    couponCode: "yjx888",
    establishedYear: "2024",
    monthlyPrice: "¥5.6 /月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 1 · 旗舰主力",
    tags: ["物理专线", "晚高峰0丢包", "企业首选"],
    score: 9.9,
    description: "2026年综合表现首选，全天候 4K/8K 秒开，晚高峰不卡顿，极佳的流媒体与 AI 解锁支持。"
  },
  {
    rank: 2,
    id: "dalaoyun",
    name: "大佬云",
    targetB64: "aHR0cHM6Ly9tb2ZhbnZpcDAxLmRhbGFveXVuYWZmLmNvbS8jLz9jb2RlPVFUMnJxcDVW",
    targetUrl: "https://mofanvip01.dalaoyunaff.com/#/?code=QT2rqp5V",
    couponCode: "dly888",
    establishedYear: "2024",
    monthlyPrice: "¥5.6 /月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 2 · 高并发中继",
    tags: ["多设备并发", "网关队列隔离", "大吞吐"],
    score: 9.8,
    description: "专为大吞吐与高并发设计，大文件下载与高码率视频播放流畅，多集群冗余路由保障。"
  },
  {
    rank: 3,
    id: "huanqiuti",
    name: "环球梯",
    targetB64: "aHR0cHM6Ly9tb2ZhbnZpcDAxLmh1YW5qaXV0aWFmZi5jb20vIy8/Y29kZT1sN29MbWpWVQ==",
    targetUrl: "https://mofanvip01.huanqiutiaff.com/#/?code=l7oLmjVU",
    couponCode: "HQ66",
    establishedYear: "2024",
    monthlyPrice: "¥5.6 /月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS / Hysteria2",
    badge: "TOP 3 · 弱网抗拥塞",
    tags: ["弱网穿透", "差旅通勤", "低延迟"],
    score: 9.7,
    description: "在校园网、移动4G/5G弱网环境下表现抢眼，抗丢包抖动能力强，稳定连接不掉线。"
  },
  {
    rank: 4,
    id: "shandianshu",
    name: "闪电鼠",
    targetB64: "aHR0cHM6Ly9tb2ZhbnZpcDAxLnNoYW5kaWFuc2h1YWZmLmNvbS8jLz9jb2RlPWEzR0FRQVhn",
    targetUrl: "https://mofanvip01.shandianshuaff.com/#/?code=a3GAQAXg",
    couponCode: "sd88",
    establishedYear: "2024",
    monthlyPrice: "¥5.6 /月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 4 · 极速对齐",
    tags: ["19ms极限延迟", "1x真实倍率", "外贸办公"],
    score: 9.6,
    description: "主打超低网络延迟与跨境游戏/实时通讯加速，港台日韩节点延迟低至 19ms-35ms。"
  },
  {
    rank: 5,
    id: "liulianyun",
    name: "榴莲云",
    targetB64: "aHR0cHM6Ly9tb2Zhbjg4LmxpdWxpYW55dW5hZmYuY29tLyMvP2NvZGU9RVRzUUJTdVI=",
    targetUrl: "https://mofan88.liulianyunaff.com/#/?code=ETsQBSuR",
    couponCode: "ll88",
    establishedYear: "2024",
    monthlyPrice: "¥5.6 /月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS / 多协议",
    badge: "TOP 5 · 原生住宅IP",
    tags: ["4K/8K秒开", "TikTok运营", "流媒体解锁"],
    score: 9.5,
    description: "配备丰富纯净原生 IP 资源，支持多协议接入，流媒体全绿全解，风控友好。"
  },
  {
    rank: 6,
    id: "shenxing",
    name: "神行加速",
    targetB64: "aHR0cHM6Ly92aXBtb2ZhbjAxLnNoZW54aW5nYWZmLmNvbS8jLz9jb2RlPW5uNG9od25L",
    targetUrl: "https://vipmofan01.shenxingaff.com/#/?code=nn4ohwnK",
    couponCode: "xs0077",
    establishedYear: "2024",
    monthlyPrice: "¥14 /月",
    planDesc: "年付约14元/月 120GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 6 · 不限时备用",
    tags: ["流量永不清零", "冷备容灾", "高性价比"],
    score: 9.4,
    description: "流量不过期/按量计费与周期性大包混合配置，适合轻度或备用梯子用户长期持有。"
  },
  {
    rank: 7,
    id: "edgenova",
    name: "边缘节点",
    targetB64: "aHR0cHM6Ly93ZXAuZWRnZW5vdmFhZmYuY29tLyMvP2NvZGU9bnIyS2RsNjg=",
    targetUrl: "https://wep.edgenovaaff.com/#/?code=nr2Kdl68",
    couponCode: "专属折扣",
    establishedYear: "2024",
    monthlyPrice: "¥15 /月",
    planDesc: "大带宽物理专线",
    lineType: "IPLC 物理专线",
    protocols: "VLESS / Trojan",
    badge: "TOP 7 · 纯净大带宽",
    tags: ["物理通道", "原生解锁", "大吞吐"],
    score: 9.3,
    description: "真 IPLC 物理专线直连，不过 GFW 审查，纯净住宅 IP，适合跨境电商及极高隐私需求。"
  },
  {
    rank: 8,
    id: "kosing",
    name: "可信云",
    targetB64: "aHR0cHM6Ly9ldmVyZXR0NzYyMy5rb3NpbmdhZmYuY29tLyMvP2NvZGU9TUFiUFJtN0o=",
    targetUrl: "https://everett7623.kosingaff.com/#/?code=MAbPRm7J",
    couponCode: "kxy80",
    establishedYear: "2024",
    monthlyPrice: "¥8 /月",
    planDesc: "企业级专线 · 不限设备",
    lineType: "IEPL 企业专线",
    protocols: "VLESS / Hysteria2",
    badge: "TOP 8 · 企业级多端",
    tags: ["不限在线设备", "长连接保活", "SLA保障"],
    score: 9.2,
    description: "企业级高可靠专线，不限同时在线设备数，支持最新 Hysteria2 协议极速抗封锁。"
  },
  {
    rank: 9,
    id: "kuaili",
    name: "快狸",
    targetB64: "aHR0cHM6Ly9mYW54aWFvYmluLmt1YWlsaWFmZi5jb20vIy8/Y29kZT1NT0QzSmJnMg==",
    targetUrl: "https://fanxiaobin.kuailiaff.com/#/?code=MOD3Jbg2",
    couponCode: "kl888",
    establishedYear: "2024",
    monthlyPrice: "¥12 /月",
    planDesc: "全球超密接入 · 2.5Gbps",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 9 · 跨境大管道",
    tags: ["2.5G上行", "超密入口", "抗抖动"],
    score: 9.1,
    description: "全球超密节点覆盖，骨干网单点 2.5Gbps 接入，峰值速度强劲，冷门地区节点完备。"
  }
];