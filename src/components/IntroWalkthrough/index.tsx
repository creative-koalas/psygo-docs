import {startTransition, useState} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {PRODUCT_NAME} from '@site/src/constants/product';
import styles from './styles.module.css';

type Step = {
  id: string;
  title: string;
  label: string;
  body: ReactNode;
};

function VideoLoop({src, caption}: {src: string; caption: string}) {
  return (
    <figure className={styles.media}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

const steps: Step[] = [
  {
    id: 'intro',
    title: '这是一个 5 步教程',
    label: '开始',
    body: (
      <>
        <p className={styles.lead}>
          第一次用 {PRODUCT_NAME}，不用先研究所有按钮。顺着这 5 步看完，就知道该怎么交任务。
        </p>

        <div className={styles.featureGrid}>
          <section className={styles.card}>
            <span className={styles.cardLabel}>你会看到</span>
            <ul className={styles.list}>
              <li>{PRODUCT_NAME} 到底是什么</li>
              <li>任务怎么说更清楚</li>
              <li>发完以后该怎么配合</li>
            </ul>
          </section>
          <section className={styles.card}>
            <span className={styles.cardLabel}>看完以后</span>
            <ul className={styles.list}>
              <li>知道该给什么资料</li>
              <li>知道什么用法顺</li>
              <li>知道下一步去哪里找场景</li>
            </ul>
          </section>
        </div>

        <p className={styles.note}>
          如果你已经有明确任务，可以直接去 <Link to="/docs/use-cases">常见使用场景</Link>。
        </p>
      </>
    ),
  },
  {
    id: 'mindset',
    title: `先把 ${PRODUCT_NAME} 当成远程实习生`,
    label: `理解 ${PRODUCT_NAME}`,
    body: (
      <>
        <div className={styles.summaryCard}>
          <span className={styles.cardLabel}>一句话</span>
          <p>把 {PRODUCT_NAME} 当成一个能力很强的远程实习生；把 App 当成和 TA 沟通的微信。</p>
        </div>

        <div className={styles.quadGrid}>
          <section className={clsx(styles.card, styles.cardAccent)}>
            <span className={styles.cardTitle}>很能干</span>
            <p>能写文档、做表格、做调研、做开发。</p>
          </section>
          <section className={styles.card}>
            <span className={styles.cardTitle}>不会读心</span>
            <p>你不说清楚，它就按自己的理解做。</p>
          </section>
          <section className={styles.card}>
            <span className={styles.cardTitle}>不是聊天机器人</span>
            <p>重点是接任务、交成果，不是秒回。</p>
          </section>
          <section className={styles.card}>
            <span className={styles.cardTitle}>有自己的电脑</span>
            <p>默认看不到你本地文件和系统。</p>
          </section>
        </div>
      </>
    ),
  },
  {
    id: 'brief',
    title: '给任务时，先把框架说清楚',
    label: '说清任务',
    body: (
      <>
        <div className={styles.formulaRow}>
          <span className={styles.chip}>目标</span>
          <span className={styles.chip}>背景</span>
          <span className={styles.chip}>交付要求</span>
          <span className={styles.chip}>限制条件</span>
        </div>

        <div className={styles.compareGrid}>
          <section className={clsx(styles.card, styles.cardWarning)}>
            <span className={styles.cardLabel}>不够清楚</span>
            <blockquote className={styles.quote}>帮我做个 OPC 平台</blockquote>
          </section>
          <section className={clsx(styles.card, styles.cardAccent)}>
            <span className={styles.cardLabel}>更容易做对</span>
            <blockquote className={styles.quote}>
              帮我做一个湖北省武汉市江汉区 OPC 平台的介绍网站。先查政策，保证内容准确。
            </blockquote>
          </section>
        </div>

        <section className={styles.card}>
          <span className={styles.cardLabel}>还能先教一次，再反复复用</span>
          <p className={styles.compactText}>
            例如先说“我们部门做调研要用近两年信息，交付 PDF，标清参考来源”，以后再直接说“按之前教你的方式做”。
          </p>
        </section>
      </>
    ),
  },
  {
    id: 'flow',
    title: '发完任务后，别守着 App',
    label: '发完就走',
    body: (
      <>
        <div className={styles.flowGrid}>
          <section className={styles.card}>
            <span className={styles.stepNum}>1</span>
            <p>把任务和资料一次发清楚。</p>
          </section>
          <section className={styles.card}>
            <span className={styles.stepNum}>2</span>
            <p>关掉客户端，先去做别的事。</p>
          </section>
          <section className={styles.card}>
            <span className={styles.stepNum}>3</span>
            <p>{PRODUCT_NAME} 做完了，或缺信息时，再回来找你。</p>
          </section>
        </div>

        <div className={styles.compareGrid}>
          <section className={clsx(styles.card, styles.cardAccent)}>
            <span className={styles.cardLabel}>你可以发</span>
            <ul className={styles.list}>
              <li>Word、Excel、PPT、PDF</li>
              <li>网页链接、压缩包、仓库地址</li>
              <li>Token 或其他授权信息</li>
            </ul>
          </section>
          <section className={clsx(styles.card, styles.cardWarning)}>
            <span className={styles.cardLabel}>默认看不到</span>
            <ul className={styles.list}>
              <li>你本地电脑或手机里的文件</li>
              <li>你没明确说过的背景信息</li>
              <li>你没授权的系统和仓库</li>
            </ul>
          </section>
        </div>

        <VideoLoop
          src="/videos/psygo-tutorial-command-and-close.mp4"
          caption={`交代清楚以后，可以先离开。${PRODUCT_NAME} 会在需要时回来找你。`}
        />
      </>
    ),
  },
  {
    id: 'workflow',
    title: '把它当成会做事的人，而不是聊天工具',
    label: '用对方式',
    body: (
      <>
        <div className={styles.compareGrid}>
          <section className={clsx(styles.card, styles.cardWarning)}>
            <span className={styles.cardLabel}>不建议</span>
            <ul className={styles.list}>
              <li>复杂工作全靠聊天框汇报</li>
              <li>让它操作你本地电脑</li>
              <li>把完整任务拆成很多小碎步</li>
            </ul>
          </section>
          <section className={clsx(styles.card, styles.cardAccent)}>
            <span className={styles.cardLabel}>更推荐</span>
            <ul className={styles.list}>
              <li>直接给完整目标</li>
              <li>补充关键约束</li>
              <li>让它自己决定执行细节</li>
            </ul>
          </section>
        </div>

        <div className={styles.featureGrid}>
          <section className={styles.card}>
            <span className={styles.cardLabel}>起手模板</span>
            <div className={styles.template}>
              <p>目标：</p>
              <p>背景：</p>
              <p>交付要求：</p>
              <p>限制条件：</p>
            </div>
          </section>
          <section className={styles.card}>
            <span className={styles.cardLabel}>下一步</span>
            <div className={styles.actionStack}>
              <Link className={styles.primaryLink} to="/docs/use-cases">
                查看常见使用场景
              </Link>
              <Link className={styles.secondaryLink} to="/blog">
                看产品更新和博客
              </Link>
            </div>
          </section>
        </div>

        <VideoLoop
          src="/videos/psygo-tutorial-complete-task.mp4"
          caption={`更理想的状态是：${PRODUCT_NAME} 在自己的环境里把事做成，再把成果交回来。`}
        />
      </>
    ),
  },
];

export default function IntroWalkthrough(): ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStep = steps[currentIndex];
  const progress = ((currentIndex + 1) / steps.length) * 100;

  function goTo(index: number) {
    if (index < 0 || index >= steps.length) {
      return;
    }

    startTransition(() => {
      setCurrentIndex(index);
    });
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.pane} aria-live="polite">
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.kicker}>教程</span>
            <span className={styles.count}>
              {currentIndex + 1} / {steps.length}
            </span>
          </div>
          <div className={styles.progressTrack} aria-hidden="true">
            <div className={styles.progressBar} style={{width: `${progress}%`}} />
          </div>
        </header>

        <article key={currentStep.id} className={styles.content}>
          <div className={styles.titleBlock}>
            <span className={styles.stepLabel}>{currentStep.label}</span>
            <h2 className={styles.title}>{currentStep.title}</h2>
          </div>
          {currentStep.body}
        </article>

        <footer className={styles.footer}>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}>
            上一步
          </button>

          <div className={styles.dotNav} aria-label="教程进度">
            {steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                className={clsx(styles.dot, {
                  [styles.dotActive]: index === currentIndex,
                })}
                aria-label={`跳到第 ${index + 1} 步：${step.label}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          {currentIndex === steps.length - 1 ? (
            <Link className={styles.primaryLink} to="/docs/use-cases">
              去看使用场景
            </Link>
          ) : (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => goTo(currentIndex + 1)}>
              下一步
            </button>
          )}
        </footer>
      </section>
    </div>
  );
}
