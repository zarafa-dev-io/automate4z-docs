import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

const WORKFLOW_YAML = `apiVersion: automate4z/v1
kind: Workflow
name: build-and-test

steps:
  - id: scan
    uses: source-scan
    with:
      root: sources
      output: build/graph.json

  - id: impact
    uses: build-impact
    continueOnError: true
    with:
      graph: build/graph.json
      output: build/impact.json

  - id: build
    uses: zos-build
    if: \${{ steps.impact.outputs.passed == false }}
    with:
      impact: \${{ steps.impact.outputs.output }}
      template: jcl/compile.jcl`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>Open Source · Go · Mainframe DevOps</div>
            <Heading as="h1" className={styles.heroTitle}>
              <ThemedImage
                className={styles.heroWordmark}
                alt={siteConfig.title}
                sources={{
                  light: useBaseUrl('/img/wordmark.png'),
                  dark: useBaseUrl('/img/wordmark-dark.png'),
                }}
              />
            </Heading>
            <p className={styles.heroSubtitle}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started">
                <Translate id="homepage.cta.start">Démarrer →</Translate>
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/docs/task-reference/overview">
                <Translate id="homepage.cta.tasks">30 tâches built-in</Translate>
              </Link>
            </div>
          </div>

          <div className={styles.heroCode}>
            <div className={styles.codeWindow}>
              <div className={styles.codeWindowHeader}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={clsx(styles.dot, styles.dotAmber)} />
                <span className={styles.codeFile}>build-and-test.yml</span>
              </div>
              <pre className={styles.codeContent}>{WORKFLOW_YAML}</pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({id: 'homepage.meta.description', message: 'Orchestrateur de workflows open-source pour z/OS et DevOps modernes'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
