import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Un binaire, deux mondes',
    icon: '⚡',
    description: (
      <>
        Un seul binaire <code>a4z</code> orchestre des tâches locales (shell,
        HTTP, filesystem) et des tâches z/OS (jobs JCL, datasets, copybooks)
        dans le même workflow YAML — sans runtime à installer.
      </>
    ),
  },
  {
    title: 'Workflows déclaratifs',
    icon: '📋',
    description: (
      <>
        Syntaxe YAML inspirée de GitHub Actions, adaptée au mainframe. DAG
        automatique, expressions <code>{'${{ }}'}</code>, inputs typés,{' '}
        <code>needs</code>, <code>if</code>, <code>timeout</code> — contrôle
        fin de chaque step.
      </>
    ),
  },
  {
    title: '16 tâches built-in',
    icon: '🧰',
    description: (
      <>
        Shell, HTTP, fs, archive, wait, notify, git, assert, json-query,
        yaml-query, template, convert, <strong>zos-jobs</strong>,{' '}
        <strong>zos-datasets</strong>, <strong>z-deps</strong> — tout inclus,
        aucune dépendance externe.
      </>
    ),
  },
  {
    title: 'Lint & Plan',
    icon: '🔍',
    description: (
      <>
        <code>a4z lint</code> valide le YAML et détecte les cycles. <code>a4z
        plan</code> affiche les niveaux d&apos;exécution parallèles. Zéro
        surprise en production.
      </>
    ),
  },
  {
    title: 'Sécurité native',
    icon: '🔒',
    description: (
      <>
        Secrets jamais dans le YAML — variables <code>A4Z_SECRET_*</code>{' '}
        masquées automatiquement dans les logs et les artefacts de run.
        Compatibilité profils Zowe.
      </>
    ),
  },
  {
    title: 'Cross-platform',
    icon: '🌐',
    description: (
      <>
        Linux, macOS, Windows × amd64 / arm64. Artefacts de run persistés sous{' '}
        <code>.automate4z/runs/</code>. Rotation automatique. Sortie JSON
        machine-readable.
      </>
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
        <p className={styles.sectionTitle}>Pourquoi automate4z ?</p>
        <Heading as="h2" className={styles.sectionHeading}>
          Tout ce qu&apos;il faut pour le DevOps mainframe
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
