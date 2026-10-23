# 2026 机场推荐与评测博客 (Astro 5 + Tailwind CSS)

本项目是一个基于 **Astro 5.x** 和 **Tailwind CSS** 构建的现代化、高性能纯静态测评与推广博客，专为 GitHub Pages 部署优化。

- **在线访问站点**：[https://mingxiaoxin1314-max.github.io/jichangtuijian/](https://mingxiaoxin1314-max.github.io/jichangtuijian/)
- **仓库名称**：`jichangtuijian`

---

## 一、 项目技术架构

- **核心框架**：Astro 5.x（纯静态模式 `output: 'static'`）
- **样式方案**：Tailwind CSS（支持深色/浅色自适应切换与精美现代 UI）
- **类型安全**：TypeScript
- **部署自动化**：GitHub Actions (`.github/workflows/deploy.yml`) 自动构建与部署到 GitHub Pages

---

## 二、 目录结构

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自动部署脚本
├── public/
│   └── favicon.svg             # 矢量站点图标
├── src/
│   ├── components/
│   │   ├── AirportCard.astro   # 单个品牌卡片组件（包含排名徽章、参数、一键复制优惠券）
│   │   ├── ComparisonTable.astro # 全品牌核心规格与优惠码速查表
│   │   └── FAQ.astro           # 常见问题折叠面板（IEPL/IPLC区别、协议科普等）
│   ├── data/
│   │   └── airports.ts         # 统一品牌数据源（Top 1 ~ Top 9 品牌数据模型）
│   ├── layouts/
│   │   └── Layout.astro        # 全局基础布局、导航栏、深浅色模式切换与 SEO 标签
│   ├── pages/
│   │   └── index.astro         # 博客主页
│   └── styles/
│       └── global.css          # 全局样式与 Tailwind 引入
├── astro.config.mjs            # Astro 配置文件 (site, base, static)
├── tailwind.config.mjs         # Tailwind 配置文件
├── tsconfig.json               # TypeScript 配置文件
└── package.json                # 项目依赖与运行脚本
```

---

## 三、 本地开发与构建

### 1. 启动本地开发服务

```bash
npm run dev
```

本地服务默认运行在 `http://localhost:4321/jichangtuijian/`。

### 2. 生产构建打包

```bash
npm run build
```

构建产物输出在 `./dist` 目录，所有静态资源自动带上 `/jichangtuijian/` 子路径前缀。

### 3. 本地预览打包产物

```bash
npm run preview
```

---

## 四、 部署到 GitHub Pages 说明

1. 在 GitHub 创建名为 `jichangtuijian` 的仓库。
2. 将本项目提交并推送到 `main` 分支：
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for airport review blog"
   git branch -M main
   git remote add origin https://github.com/mingxiaoxin1314-max/jichangtuijian.git
   git push -u origin main
   ```
3. 打开 GitHub 仓库设置：`Settings` -> `Pages` -> `Build and deployment` -> `Source` 选择 **GitHub Actions**。
4. 后续每次 push 即可自动触发 `.github/workflows/deploy.yml` 完成发布。
