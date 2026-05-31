import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.feature.binary.title">Un binaire, deux mondes</Translate>,
    icon: '⚡',
    description: (
      <Translate
        id="homepage.feature.binary.description"
        values={{a4z: <code>a4z</code>}}>
        {'Un seul binaire {a4z} orchestre des tâches locales (shell, HTTP, filesystem) et des tâches z/OS (jobs JCL, datasets, copybooks) dans le même workflow YAML — sans runtime à installer.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.declarative.title">Workflows déclaratifs</Translate>,
    icon: '📋',
    description: (
      <Translate
        id="homepage.feature.declarative.description"
        values={{
          expr: <code>{'${{ }}'}</code>,
          needs: <code>needs</code>,
          if_: <code>if</code>,
          timeout: <code>timeout</code>,
        }}>
        {'Syntaxe YAML inspirée de GitHub Actions, adaptée au mainframe. DAG automatique, expressions {expr}, inputs typés, {needs}, {if_}, {timeout} — contrôle fin de chaque step.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.tasks.title">16 tâches built-in</Translate>,
    icon: '🧰',
    description: (
      <Translate
        id="homepage.feature.tasks.description"
        values={{
          zosjobs: <strong>zos-jobs</strong>,
          zosdatasets: <strong>zos-datasets</strong>,
          zdeps: <strong>z-deps</strong>,
        }}>
        {'Shell, HTTP, fs, archive, wait, notify, git, assert, json-query, yaml-query, template, convert, {zosjobs}, {zosdatasets}, {zdeps} — tout inclus, aucune dépendance externe.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.lint.title">Lint & Plan</Translate>,
    icon: '🔍',
    description: (
      <Translate
        id="homepage.feature.lint.description"
        values={{
          lint: <code>a4z lint</code>,
          plan: <code>a4z plan</code>,
        }}>
        {"{lint} valide le YAML et détecte les cycles. {plan} affiche les niveaux d'exécution parallèles. Zéro surprise en production."}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.security.title">Sécurité native</Translate>,
    icon: '🔒',
    description: (
      <Translate
        id="homepage.feature.security.description"
        values={{secret: <code>A4Z_SECRET_*</code>}}>
        {'Secrets jamais dans le YAML — variables {secret} masquées automatiquement dans les logs et les artefacts de run. Compatibilité profils Zowe.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.crossplatform.title">Cross-platform</Translate>,
    icon: '🌐',
    description: (
      <Translate
        id="homepage.feature.crossplatform.description"
        values={{runs: <code>.automate4z/runs/</code>}}>
        {'Linux, macOS, Windows × amd64 / arm64. Artefacts de run persistés sous {runs}. Rotation automatique. Sortie JSON machine-readable.'}
      </Translate>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '1.5rem'}}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <p className={styles.sectionTitle}>
          <Translate id="homepage.features.sectionLabel">Pourquoi automate4z ?</Translate>
        </p>
        <Heading as="h2" className={styles.sectionHeading}>
          <Translate id="homepage.features.sectionHeading">
            {"Tout ce qu'il faut pour le DevOps mainframe"}
          </Translate>
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
