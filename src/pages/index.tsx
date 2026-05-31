import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const WORKFLOW_YAML = `apiVersion: automate4z/v1
kind: Workflow
name: build-cobol

inputs:
  module:
    type: string
    required: true

steps:
  - id: resolve
    uses: z-deps
    with:
      manifest: ./z-manifest.yaml

  - id: compile
    needs: [resolve]
    uses: zos-jobs
    with:
      jcl: ./jcl/compile.jcl
      expectRC: 4`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>Open Source · Go · Mainframe DevOps</div>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started">
                Démarrer →
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/docs/task-reference/overview">
                16 tâches built-in
              </Link>
            </div>
          </div>

          <div className={styles.heroCode}>
            <div className={styles.codeWindow}>
              <div className={styles.codeWindowHeader}>
                <span className={clsx(styles.dot, styles.dotRed)} />
                <span className={clsx(styles.dot, styles.dotYellow)} />
                <span className={clsx(styles.dot, styles.dotGreen)} />
                <span className={styles.codeFile}>build-cobol.yml</span>
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
      description="Orchestrateur de workflows open-source pour z/OS et DevOps modernes">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
