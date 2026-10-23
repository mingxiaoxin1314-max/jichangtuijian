export interface AirportItem {
  rank: number;
  id: string;
  name: string;
  affUrl: string;
  couponCode: string;
  establishedYear: string;
  monthlyPrice: string;
  planDesc: string;
  lineType: string;
  protocols: string;
  badge?: string;
  features?: string[];
  description?: string;
  score?: number;
}

export const airportList: AirportItem[] = [
  {
    rank: 1,
    id: "yunjiexian",
    name: "云界线",
    affUrl: "https://9625mofan01.yunjiexianaff.com/#/?code=OOYhSj0L",
    couponCode: "yjx888",
    establishedYear: "2024",
    monthlyPrice: "5.6 元/月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 1 · 旗舰主力",
    score: 9.9,
    description: "2026年综合表现首选，全天候 4K/8K 秒开，晚高峰不卡顿，极佳的流媒体与 AI 解锁支持。",
    features: ["全节点 IEPL 专线", "超高可用率", "全天晚高峰极速", "ChatGPT/Claude 原生解锁"]
  },
  {
    rank: 2,
    id: "dalaoyun",
    name: "大佬云",
    affUrl: "https://mofanvip01.dalaoyunaff.com/#/?code=QT2rqp5V",
    couponCode: "dly888",
    establishedYear: "2024",
    monthlyPrice: "5.6 元/月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 2 · 高并发大吞吐",
    score: 9.8,
    description: "专为大吞吐与高并发设计，大文件下载与高码率视频播放流畅，多集群冗余路由保障。",
    features: ["高吞吐集群架构", "抗拥塞拥堵算法", "高速流媒体专线", "多入口智能容灾"]
  },
  {
    rank: 3,
    id: "huanqiuti",
    name: "环球梯",
    affUrl: "https://mofanvip01.huanqiutiaff.com/#/?code=l7oLmjVU",
    couponCode: "HQ66",
    establishedYear: "2024",
    monthlyPrice: "5.6 元/月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 3 · 弱网抗抖动",
    score: 9.7,
    description: "在校园网、移动4G/5G弱网环境下表现抢眼，抗丢包抖动能力强，稳定连接不掉线。",
    features: ["弱网抗丢包优化", "全内网专线互联", "智能多路复用", "全平台极速客户端支持"]
  },
  {
    rank: 4,
    id: "shandianshu",
    name: "闪电鼠",
    affUrl: "https://mofanvip01.shandianshuaff.com/#/?code=a3GAQAXg",
    couponCode: "sd88",
    establishedYear: "2024",
    monthlyPrice: "5.6 元/月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 4 · 极低延迟对齐",
    score: 9.6,
    description: "主打超低网络延迟与跨境游戏/实时通讯加速，港台日韩节点延迟低至 20ms-40ms。",
    features: ["超低延迟专线", "跨境游戏对齐加速", "BGP 优质入口", "毫秒级响应"]
  },
  {
    rank: 5,
    id: "liulianyun",
    name: "榴莲云",
    affUrl: "https://mofan88.liulianyunaff.com/#/?code=ETsQBSuR",
    couponCode: "ll88",
    establishedYear: "2024",
    monthlyPrice: "5.6 元/月",
    planDesc: "年付约5.6元/月 60GB",
    lineType: "IEPL 专线",
    protocols: "VLESS / 多协议",
    badge: "TOP 5 · 原生 IP 大管道",
    score: 9.5,
    description: "配备丰富纯净原生 IP 资源，支持多协议接入，流媒体全绿全解，风控友好。",
    features: ["原生住宅/商业IP", "全流媒体全解", "多协议弹性切换", "超大出口带宽池"]
  },
  {
    rank: 6,
    id: "shenxing",
    name: "神行加速",
    affUrl: "https://vipmofan01.shenxingaff.com/#/?code=nn4ohwnK",
    couponCode: "xs0077",
    establishedYear: "2024",
    monthlyPrice: "14 元/月",
    planDesc: "年付约14元/月 120GB",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 6 · 不限时按量池",
    score: 9.4,
    description: "流量不过期/按量计费与周期性大包混合配置，适合轻度或备用梯子用户长期持有。",
    features: ["大容量按量套餐", "不过期流量选择", "稳定专线节点", "随时待命保障"]
  },
  {
    rank: 7,
    id: "edgenova",
    name: "边缘节点",
    affUrl: "https://wep.edgenovaaff.com/#/?code=nr2kdl68",
    couponCode: "通用立减",
    establishedYear: "2024",
    monthlyPrice: "15 元/月",
    planDesc: "大带宽物理专线",
    lineType: "IPLC 物理专线",
    protocols: "VLESS / Trojan",
    badge: "TOP 7 · 纯净住宅 IP",
    score: 9.3,
    description: "真 IPLC 物理专线直连，不过 GFW 审查，纯净住宅 IP，适合跨境电商及极高隐私需求。",
    features: ["真 IPLC 物理专线", "不过墙超安全", "独享纯净 IP 池", "支持 Trojan 协议"]
  },
  {
    rank: 8,
    id: "kosing",
    name: "可信云",
    affUrl: "https://everett7623.kosingaff.com/#/?code=MAbPRm7J",
    couponCode: "kxy80",
    establishedYear: "2024",
    monthlyPrice: "8 元/月",
    planDesc: "企业级专线 · 不限设备",
    lineType: "IEPL 企业专线",
    protocols: "VLESS / Hysteria2",
    badge: "TOP 8 · 企业级多端",
    score: 9.2,
    description: "企业级高可靠专线，不限同时在线设备数，支持最新 Hysteria2 协议极速抗封锁。",
    features: ["支持 Hysteria2 协议", "不限制在线设备数", "团队协作与多设备友好", "SLA 99.9% 保障"]
  },
  {
    rank: 9,
    id: "kuaili",
    name: "快狸",
    affUrl: "https://fanxiaobin.kuailiaff.com/#/?code=MOD3Jbg2",
    couponCode: "kl888",
    establishedYear: "2024",
    monthlyPrice: "12 元/月",
    planDesc: "全球超密接入 · 2.5Gbps",
    lineType: "IEPL 专线",
    protocols: "VLESS",
    badge: "TOP 9 · 跨境大带宽",
    score: 9.1,
    description: "全球超密节点覆盖，骨干网单点 2.5Gbps 接入，峰值速度强劲，冷门地区节点完备。",
    features: ["2.5Gbps 超大管道", "全球冷门冷区覆盖", "多点 BGP 智能分流", "全天候运维响应"]
  }
];
