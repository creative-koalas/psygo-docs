import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {PRODUCT_NAME} from '@site/src/constants/product';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  eyebrow: string;
  description: ReactNode;
  cta: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: `先理解 ${PRODUCT_NAME} 怎么工作`,
    to: '/docs/intro',
    eyebrow: '快速上手',
    description:
      `先建立正确预期：${PRODUCT_NAME} 更像远程实习生，不是聊天机器人，也不会读心。`,
    cta: '查看入门说明',
  },
  {
    title: '按工作类型找可落地场景',
    to: '/docs/use-cases',
    eyebrow: '常见使用场景',
    description:
      '从文档、表格、调研、PPT、研发到经营分析，快速找到最接近你日常工作的用法。',
    cta: '查看场景目录',
  },
  {
    title: '了解产品动态和新内容',
    to: '/blog',
    eyebrow: '公司博客',
    description:
      '如果你想看更新记录、产品说明或团队发布内容，可以从博客开始。',
    cta: '前往博客',
  },
];

function Feature({title, to, eyebrow, description, cta}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.card} to={to}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <Heading as="h3" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>
        <span className={styles.cta}>{cta}</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">从这里开始最省时间</Heading>
          <p>如果你是第一次用 {PRODUCT_NAME}，先看怎么用；如果你已经有任务，直接按场景找。</p>
        </div>
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
