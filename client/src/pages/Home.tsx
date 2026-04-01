import { Button } from "@/components/ui/button";
import { Phone, Zap, BarChart3, Users, Shield, Rocket } from "lucide-react";

/**
 * 杭州云风通讯官网首页
 * 设计风格：现代科技风格
 * 主色调：深蓝色 (#1e40af) - 象征科技、信任、专业
 * 排版：Poppins (标题) + Inter (正文)
 * 布局：非对称设计，左右穿插内容和图像
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="font-bold text-lg text-gray-900">云风通讯</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">公司简介</a>
            <a href="#solution" className="text-gray-600 hover:text-blue-600 transition">解决方案</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">功能模块</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">联系我们</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">立即体验</Button>
        </div>
      </nav>

      {/* 英雄区 */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 AI 智能外呼解决方案
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                让每一次外呼<br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  都成为有效商机
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Yesoh 智能营销系统实现人机协同、精准意向识别、无缝坐席切入，帮助企业降本增效，提升商机转化率 40% 以上。
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  立即体验
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  了解更多
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-blue-600">60%+</div>
                  <div className="text-sm text-gray-600">成本降低</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">5倍</div>
                  <div className="text-sm text-gray-600">触达提升</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">40%+</div>
                  <div className="text-sm text-gray-600">转化提升</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482699492/ZofeqTMNeZABTep2geQqY3/hero-banner-ZFe9eeXntwQeEetT57Q5uj.webp"
                alt="AI 外呼解决方案"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 公司简介 */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">关于云风通讯</h2>
            <p className="text-xl text-gray-600">成立于杭州，专注于智能语音交互与营销自动化技术研发</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">技术优势</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 毫秒级响应，流畅对话</li>
                <li>✓ 实时语义理解，精准识别</li>
                <li>✓ 人机无缝耦合</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">核心产品</h3>
              <p className="text-gray-600">
                Yesoh 智能营销系统集 AI 外呼、坐席协同、数据洞察于一体，实现全链路闭环管理。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">服务覆盖</h3>
              <p className="text-gray-600">
                金融、教育、电商、房产、保险、政务等多个高意向转化行业。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 行业痛点 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">传统外呼面临的挑战</h2>
            <p className="text-xl text-gray-600">市场迫切需要下一代 AI 外呼解决方案</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-red-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">人工成本高、效率低</h3>
              <p className="text-gray-600">
                传统人工外呼需要大量坐席人员，人力成本居高不下。坐席日均触达量有限，外呼覆盖率低，难以规模化扩张。
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI 机器人"答非所问"</h3>
              <p className="text-gray-600">
                传统 AI 外呼机器人语义理解能力不足，无法准确识别客户真实意图，导致"鸡同鸭讲"。
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">销售介入滞后</h3>
              <p className="text-gray-600">
                AI 外呼结束后，销售无法第一时间介入跟进，客户热情冷却，错失黄金跟进时机。
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">缺乏数据闭环</h3>
              <p className="text-gray-600">
                外呼数据与销售数据割裂，无法形成完整的数据闭环，策略优化缺乏数据支撑。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心解决方案 */}
      <section id="solution" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心解决方案</h2>
            <p className="text-xl text-gray-600">人机耦合智能外呼平台 - 全链路闭环服务</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI 智能初筛</h3>
                  <p className="text-gray-600">7×24 小时自动外呼，无需人工干预，大幅降低企业基础外呼人力成本。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">实时意图识别</h3>
                  <p className="text-gray-600">基于 NLP + 业务规则双引擎，秒级判断客户意向等级，精准识别高价值商机。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">无感坐席切入</h3>
                  <p className="text-gray-600">销售在后台监听对话，识别高意向客户后一键静默接入，客户完全无感知。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">弹屏精准赋能</h3>
                  <p className="text-gray-600">客户画像、历史记录、推荐话术实时推送至坐席端，辅助销售高效成交。</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482699492/ZofeqTMNeZABTep2geQqY3/human-machine-cooperation-4wFx34j7L7uKDxBd9PZvQd.webp"
                alt="人机协同"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 平台功能 */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">六大核心模块</h2>
            <p className="text-xl text-gray-600">全面赋能外呼运营</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">外呼任务管理</h3>
              <p className="text-gray-600">批量导入客户、设置话术、分配线路、定时启动</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">坐席实时监控</h3>
              <p className="text-gray-600">实时查看通话状态、AI/人工切换率、在线坐席数</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">通话全程记录</h3>
              <p className="text-gray-600">完整录音 + 文字转写 + 情绪分析，支持回溯与质检</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">坐席绩效统计</h3>
              <p className="text-gray-600">通话量、接通率、转化率、平均处理时长等 KPI 看板</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">协呼效果分析</h3>
              <p className="text-gray-600">AI 转人工比例、协呼成功率、商机转化漏斗</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">坐席组织管理</h3>
              <p className="text-gray-600">分组管理、权限配置、技能标签、排班调度</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-gray-600">所有数据实时同步，支持 API 对接 CRM/SCRM 系统</p>
          </div>
        </div>
      </section>

      {/* 技术亮点 */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">技术亮点</h2>
            <p className="text-xl text-gray-300">五大差异化竞争优势</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">毫秒级意图判断引擎</h3>
              <p className="text-gray-300 mb-4">
                基于行业知识图谱 + 动态关键词模型，实时分析客户语音内容，精准判断客户意向等级。
              </p>
              <div className="text-blue-400 font-bold">准确率超 95%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">无感协呼技术</h3>
              <p className="text-gray-300 mb-4">
                Silent Takeover - 客户完全不知 AI 已退出、真人已接入，体验流畅自然，避免沟通中断。
              </p>
              <div className="text-blue-400 font-bold">无缝切换 · 零感知</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">智能弹屏系统</h3>
              <p className="text-gray-300 mb-4">
                自动聚合客户来源、历史交互、标签画像，实时推送至坐席端，辅助销售快速了解客户背景。
              </p>
              <div className="text-blue-400 font-bold">信息聚合 · 智能推荐</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">高并发稳定架构</h3>
              <p className="text-gray-300 mb-4">
                电信级语音通道保障接通质量，支持万级并发外呼，确保系统 7×24 小时稳定运行。
              </p>
              <div className="text-blue-400 font-bold">万级并发 · 电信级保障</div>
            </div>
            <div className="md:col-span-2 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">合规安全保障</h3>
              <p className="text-gray-300">
                严格符合《个人信息保护法》及工信部外呼规范，支持号码脱敏、授权管理、通话加密存储，全方位保障数据安全与合规运营。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">典型应用场景</h2>
            <p className="text-xl text-gray-600">赋能多行业高效获客与服务</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">金融贷款</h3>
              <p className="text-gray-600 mb-4">
                AI 智能初筛贷款资质，实时识别高意向客户，无缝转接信贷顾问进行深度跟进。
              </p>
              <p className="text-sm text-blue-600 font-medium">转化率提升 40%+</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">在线教育</h3>
              <p className="text-gray-600 mb-4">
                课程咨询 → 试听邀约 → 班主任无缝跟进，全链路智能化学员招募与服务。
              </p>
              <p className="text-sm text-green-600 font-medium">班主任精准跟进</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">房产中介</h3>
              <p className="text-gray-600 mb-4">
                楼盘推介 → 预约带看 → 置业顾问即时接入，精准匹配客户需求，加速成交周期。
              </p>
              <p className="text-sm text-purple-600 font-medium">置业顾问实时介入</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">保险 BPO</h3>
              <p className="text-gray-600 mb-4">
                AI 自动外呼初筛客户 → 实时识别高意向线索 → 销售坐席无感切入跟进 → 闭环转化与数据复盘。
              </p>
              <p className="text-sm text-orange-600 font-medium">200+ 企业信赖之选</p>
            </div>
          </div>
        </div>
      </section>

      {/* 客户价值 */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">客户价值总结</h2>
            <p className="text-xl text-blue-100">降本 · 提效 · 增收 · 可控</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">降本</h3>
              <p className="text-blue-100 mb-4">
                AI 外呼替代大部分人工初筛工作，显著降低企业的人力成本支出。
              </p>
              <div className="text-3xl font-bold text-blue-200">60%+</div>
              <p className="text-blue-100 text-sm">基础外呼人力成本</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">提效</h3>
              <p className="text-blue-100 mb-4">
                AI 可 7×24 小时不间断外呼，坐席专注高价值客户，整体触达效率大幅提升。
              </p>
              <div className="text-3xl font-bold text-blue-200">5倍</div>
              <p className="text-blue-100 text-sm">日均触达量提升</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">增收</h3>
              <p className="text-blue-100 mb-4">
                人机协同精准跟进高意向客户，黄金时机介入，显著提升商机转化率。
              </p>
              <div className="text-3xl font-bold text-blue-200">40%+</div>
              <p className="text-blue-100 text-sm">商机转化率提升</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-3">可控</h3>
              <p className="text-blue-100 mb-4">
                全流程数据可视化，策略可量化、可优化，管理决策更科学高效。
              </p>
              <div className="text-3xl font-bold text-blue-200">100%</div>
              <p className="text-blue-100 text-sm">全流程可视化</p>
            </div>
          </div>
        </div>
      </section>

      {/* 合作模式 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">合作模式 & 服务支持</h2>
            <p className="text-xl text-gray-600">灵活部署 · 透明计费 · 快速实施 · 专属服务</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">部署方式</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>SaaS 云端部署 - 快速开通，免运维，按需付费</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>私有化部署 - 数据本地化，定制化开发（可选）</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">计费模式</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>按分钟计费 - 用多少付多少，灵活控制成本</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>包月套餐 - 高频使用更优惠，成本可预测</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">实施周期</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">≤3</div>
              <p className="text-gray-600">个工作日快速上线</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">专属服务体系</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">7×12 小时技术支持</h4>
                <p className="text-gray-600 text-sm">专业技术团队全程护航，快速响应问题，确保系统稳定运行无忧。</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">行业话术模板库</h4>
                <p className="text-gray-600 text-sm">覆盖金融、教育、房产、保险等多个行业的话术模板，即开即用。</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">数据分析师驻场</h4>
                <p className="text-gray-600 text-sm">资深数据分析师驻场优化（可选），持续迭代策略，效果持续提升。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 和联系方式 */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">立即体验智能外呼新范式</h2>
          <p className="text-xl text-blue-100 mb-8">开启高效营销新时代！</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              立即体验
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              预约演示
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div>
              <h3 className="font-bold mb-2">联系电话</h3>
              <p className="text-blue-100">18761964017</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">官方网站</h3>
              <p className="text-blue-100">https://yesohai.com</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-bold mb-2">公司地址</h3>
              <p className="text-blue-100">杭州市余杭区良渚街道网周路99号平高创业城4幢616室</p>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p>© 2023 杭州云风通讯技术有限公司 | 浙ICP备2023016234号-1</p>
          <p className="text-sm mt-4">Yesoh 智能营销系统 - 让每一次外呼，都成为有效商机</p>
        </div>
      </footer>
    </div>
  );
}
