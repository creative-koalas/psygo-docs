import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {PRODUCT_NAME} from '@site/src/constants/product';
import styles from './styles.module.css';

type BadgeTone = 'neutral' | 'success' | 'warning';

type UseCaseItem = {
  title: string;
  summary: string;
  scenes: string[];
  deliverables: string;
  audience?: string;
  note?: string;
  badges?: Array<{
    label: string;
    tone: BadgeTone;
  }>;
};

type UseCaseSection = {
  value: string;
  label: string;
  description: string;
  items: UseCaseItem[];
};

const sections: UseCaseSection[] = [
  {
    value: 'office',
    label: '日常办公与内容',
    description: '适合交付 Word、Excel、PPT、调研报告这类常见办公成果。',
    items: [
      {
        title: '文档写作与内容整理',
        summary: '把零散信息整理成可提交、可流转、可存档的正式文档。',
        scenes: [
          '会议纪要整理与行动项提炼',
          '周报、月报、季度总结撰写',
          '项目方案、实施方案、汇报材料编写',
          '制度文档、SOP、操作手册撰写',
          '需求文档、产品文档整理',
          '合同初稿、商务函件、通知公告起草',
          '长文档润色、扩写、缩写、改写',
          '多资料整合成一份结构化文档',
        ],
        deliverables: 'Word 文档、制度文件、方案文档、会议纪要、总结报告。',
      },
      {
        title: '表格处理与数据分析',
        summary: '适合重复度高、字段多、需要汇总和对比的表格类工作。',
        scenes: [
          'Excel 数据清洗、去重、合并、格式规范',
          '销售数据、运营数据、财务数据汇总',
          '自动生成日报、周报、月报',
          '指标统计、趋势分析、异常波动识别',
          '多表关联分析、字段匹配、台账管理',
          '预算测算、成本分析、利润分析',
          '问卷数据、调研数据统计分析',
        ],
        deliverables: 'Excel 分析表、可视化图表、经营报表、分析结论。',
      },
      {
        title: '调研与报告生成',
        summary: '适合先查资料，再形成结构化结论的分析型任务。',
        scenes: [
          '行业研究报告',
          '竞品分析报告',
          '市场趋势分析',
          '用户画像与需求分析',
          '政策研究与资料汇编',
          '技术路线调研',
          '商业模式分析',
          '项目可行性研究报告',
          '采购比选与供应商调研',
        ],
        deliverables: '调研报告、竞品分析、行业洞察、结论摘要。',
      },
      {
        title: 'PPT 制作与汇报表达',
        summary: '适合把现有资料转换成更适合汇报、演示和培训的表达方式。',
        scenes: [
          '工作汇报 PPT',
          '项目方案汇报 PPT',
          '领导汇报材料',
          '培训课件制作',
          '年度总结 / 经营分析汇报',
          '根据 Word / Excel 自动生成 PPT 大纲与页面内容',
        ],
        deliverables: 'PPT 初稿、演讲提纲、图文页内容、汇报框架。',
      },
    ],
  },
  {
    value: 'tech',
    label: '产品、研发与技术',
    description: '适合做需求梳理、研发交付、技术选型和架构论证。',
    items: [
      {
        title: '软件开发与技术实现',
        summary: '覆盖从需求梳理、编码实现到技术文档补全的完整研发流程。',
        scenes: [
          '需求梳理与 PRD 撰写',
          '原型设计与页面流程说明',
          '前端页面开发',
          '后端接口开发',
          '数据库设计',
          '管理后台搭建',
          '自动化脚本编写',
          'API 集成与系统对接',
          'Bug 排查与代码重构',
          '测试用例生成与开发文档补全',
        ],
        deliverables: '代码、接口文档、开发方案、测试脚本、技术文档。',
        badges: [
          {label: '可交付代码', tone: 'success'},
          {label: '特定情况下可上线', tone: 'neutral'},
        ],
      },
      {
        title: '技术研究与方案设计',
        summary: '适合在正式开发前先做选型、评估和方案论证。',
        scenes: [
          '技术选型建议',
          '架构设计方案',
          '开源项目调研',
          '性能优化建议',
          '故障定位与问题排查',
          'AI / Agent / 大模型技术研究',
          '数据平台建设方案',
          '安全与权限设计方案',
          '系统改造与升级建议',
        ],
        deliverables: '技术调研报告、架构图、选型建议、解决方案。',
      },
    ],
  },
  {
    value: 'operations',
    label: '管理与职能支持',
    description: '适合项目推进、经营分析、法务合规和行政综合办公。',
    items: [
      {
        title: '项目管理与协同推进',
        summary: '适合持续跟踪进度、风险和里程碑的项目型工作。',
        scenes: [
          '项目计划拆解',
          '任务排期与甘特图整理',
          '风险点识别',
          '进度周报自动生成',
          '里程碑提醒与复盘总结',
        ],
        deliverables: '项目计划表、甘特图、风险清单、进度周报、复盘纪要。',
        audience: 'PM、产品经理、项目负责人、团队管理者。',
      },
      {
        title: '财务与经营分析',
        summary: '适合基于业务和财务数据做汇总、拆解和对比分析。',
        scenes: [
          '报销单据整理',
          '财务报表摘要',
          '预算编制辅助',
          '成本 / 费用分析',
          '利润结构分析',
          '经营数据周报月报',
          '多维度对比分析',
        ],
        deliverables: '财务摘要、预算草案、经营分析结论、周报月报。',
        audience: '财务、经营分析、管理层。',
      },
      {
        title: '法务与合规支持',
        summary: '适合做材料整理、条款比对和法规信息梳理，不应宣传为替代专业法务判断。',
        scenes: [
          '条款比对与风险提示',
          '合规材料整理',
          '政策法规检索与摘要',
          '审核意见汇总',
        ],
        deliverables: '条款比对表、风险提示清单、法规摘要、审核意见汇总。',
        audience: '法务、行政、管理部门。',
        note: '对外宣传建议写“辅助处理”，避免过度承诺“替代专业法务判断”。',
        badges: [{label: '辅助处理', tone: 'warning'}],
      },
      {
        title: '行政与综合办公',
        summary: '适合处理跨部门协同、流程推进和资料归档类事务。',
        scenes: [
          '通知公告撰写',
          '制度文件整理',
          '采购需求汇总',
          '资产台账管理',
          '活动组织与流程安排',
          '出差行程整理',
          '文件归档与分类检索',
        ],
        deliverables: '通知公告、制度整理稿、采购汇总表、资产台账、活动执行清单。',
        audience: '行政、综合管理、办公室。',
      },
    ],
  },
  {
    value: 'enterprise',
    label: '企业级知识与经营',
    description: '适合接入知识库或业务系统后，做跨部门整合、沉淀和决策支持。',
    items: [
      {
        title: '知识库建设与企业知识管理',
        summary: '适合先接入外部知识库平台，再统一做分类、沉淀和检索。',
        scenes: [
          '文档自动分类归档',
          'FAQ 自动整理',
          '历史案例沉淀',
          'SOP 知识库搭建',
          '内部制度统一管理',
          '跨部门知识检索',
          '新员工培训知识包生成',
        ],
        deliverables: 'FAQ 知识库、SOP 目录、知识分类体系、培训知识包。',
        audience: '全公司，尤其适合中大型企业。',
        badges: [{label: '需接入知识库', tone: 'neutral'}],
      },
      {
        title: '企业经营决策支持',
        summary: '适合先打通各部门系统，再做综合分析、预警和管理层汇报。',
        scenes: [
          '多部门数据整合',
          '经营指标看板总结',
          '异常指标预警',
          '业务问题归因分析',
          '管理层决策材料生成',
          '战略会议资料准备',
        ],
        deliverables: '经营看板摘要、异常分析结论、管理层决策材料、战略会议资料。',
        audience: 'CEO、COO、部门负责人、经营分析团队。',
        badges: [{label: '需接入业务系统', tone: 'neutral'}],
      },
    ],
  },
];

const stats = [
  {label: '典型工作大类', value: `${sections.length} 大类`},
  {
    label: '覆盖的具体场景',
    value: `${sections
      .flatMap((section) => section.items)
      .reduce((count, item) => count + item.scenes.length, 0)}+`,
  },
  {
    label: '需接入外部系统的类别',
    value: `${sections
      .flatMap((section) => section.items)
      .filter((item) => item.badges?.some((badge) => badge.label.startsWith('需接入'))).length} 类`,
  },
];

function Badge({label, tone}: {label: string; tone: BadgeTone}) {
  return (
    <span
      className={clsx(styles.badge, {
        [styles.badgeNeutral]: tone === 'neutral',
        [styles.badgeSuccess]: tone === 'success',
        [styles.badgeWarning]: tone === 'warning',
      })}>
      {label}
    </span>
  );
}

function UseCaseCard({item}: {item: UseCaseItem}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <Heading as="h3" className={styles.cardTitle}>
          {item.title}
        </Heading>
        {item.badges?.length ? (
          <div className={styles.badgeRow}>
            {item.badges.map((badge) => (
              <Badge key={badge.label} label={badge.label} tone={badge.tone} />
            ))}
          </div>
        ) : null}
      </div>

      <p className={styles.summary}>{item.summary}</p>

      <div className={styles.metaList}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>常见交付</span>
          <span className={styles.metaValue}>{item.deliverables}</span>
        </div>
        {item.audience ? (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>适合对象</span>
            <span className={styles.metaValue}>{item.audience}</span>
          </div>
        ) : null}
      </div>

      <details className={styles.details}>
        <summary>查看具体场景 ({item.scenes.length})</summary>
        <ul className={styles.sceneList}>
          {item.scenes.map((scene) => (
            <li key={scene}>{scene}</li>
          ))}
        </ul>
      </details>

      {item.note ? <p className={styles.note}>{item.note}</p> : null}
    </article>
  );
}

function QuickStart(): ReactNode {
  return (
    <section className={styles.quickStart}>
      <Heading as="h2">不知道从哪开始？</Heading>
      <div className={styles.quickStartGrid}>
        <div className={styles.quickStartCard}>
          <span className={styles.quickStartLabel}>看交付物</span>
          <p>经常交 Word、纪要、方案，先看“日常办公与内容”。</p>
        </div>
        <div className={styles.quickStartCard}>
          <span className={styles.quickStartLabel}>看任务属性</span>
          <p>要写代码、做接口、搭系统，先看“产品、研发与技术”。</p>
        </div>
        <div className={styles.quickStartCard}>
          <span className={styles.quickStartLabel}>看系统依赖</span>
          <p>要做知识库或经营决策支持，通常需要先接入外部平台或业务系统。</p>
        </div>
      </div>
      <p className={styles.quickStartFooter}>
        如果你还不确定怎么提需求，先回到 <Link to="/docs/intro">快速上手</Link>，
        按“目标 + 背景 + 交付要求 + 限制条件”的方式给 {PRODUCT_NAME} 下任务。
      </p>
    </section>
  );
}

export default function UseCaseCatalog(): ReactNode {
  return (
    <div className={styles.wrapper}>
      <section className={styles.overview}>
        <div className={styles.overviewHeader}>
          <Heading as="h2">按工作类型快速查</Heading>
          <p>
            这页适合做“能不能交给 {PRODUCT_NAME}”的快速判断。先选大类，再展开具体场景，避免一次看完一整页长清单。
          </p>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Tabs className={styles.tabs} defaultValue={sections[0].value}>
        {sections.map((section) => (
          <TabItem key={section.value} value={section.value} label={section.label}>
            <section className={styles.sectionPanel}>
              <div className={styles.sectionIntro}>
                <Heading as="h2">{section.label}</Heading>
                <p>{section.description}</p>
              </div>
              <div className={styles.cardGrid}>
                {section.items.map((item) => (
                  <UseCaseCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          </TabItem>
        ))}
      </Tabs>

      <QuickStart />
    </div>
  );
}
