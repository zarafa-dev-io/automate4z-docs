import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Un binaire, deux mondes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Un seul binaire <code>a4z</code> orchestre des tâches locales
        (shell, HTTP, filesystem) et des tâches z/OS (jobs JCL, datasets, copybooks)
        dans le même workflow YAML.
      </>
    ),
  },
  {
    title: 'Workflows en YAML',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Syntaxe inspirée de GitHub Actions, adaptée au mainframe. DAG automatique,
        expressions <code>{'${{ }}'}</code>, inputs typés, contrôle fin de chaque step.
      </>
    ),
  },
  {
    title: '16 tâches built-in',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Shell, HTTP, fs, archive, wait, notify, git, assert, json-query, template,
        convert, zos-jobs, zos-datasets, z-deps — et aucune dépendance à installer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
