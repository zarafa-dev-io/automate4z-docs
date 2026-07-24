import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  icon: string;
  tint: string;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.feature.binary.title">Un binaire, deux mondes</Translate>,
    icon: '⚡',
    tint: styles.iconAmber,
    to: '/docs/intro',
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
    tint: styles.iconBlue,
    to: '/docs/workflow-spec/structure',
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
    title: <Translate id="homepage.feature.tasks.title">37 tâches built-in</Translate>,
    icon: '🧰',
    tint: styles.iconViolet,
    to: '/docs/task-reference/overview',
    description: (
      <Translate
        id="homepage.feature.tasks.description"
        values={{
          zosjobs: <strong>zos-jobs</strong>,
          datacompare: <strong>data-compare</strong>,
          zosbuild: <strong>zos-build</strong>,
        }}>
        {'Du shell au mainframe : {zosjobs}, datasets, copybooks, jeux d’essai, {datacompare}, spool-analyze, {zosbuild}… — tout inclus dans le binaire, aucune dépendance externe.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.batchtests.title">Tests batch dans la CI</Translate>,
    icon: '🧪',
    tint: styles.iconGreen,
    to: '/docs/guides/tester-un-batch',
    description: (
      <Translate
        id="homepage.feature.batchtests.description"
        values={{
          tests: <code>tests:</code>,
          junit: <code>junit.xml</code>,
        }}>
        {'Le bloc {tests} exécute vos jobs, analyse leurs spools, compare leurs fichiers champ par champ — et publie un {junit} que Jenkins et GitLab affichent nativement.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.build.title">Build incrémental façon DBB</Translate>,
    icon: '🏗️',
    tint: styles.iconAmber,
    to: '/docs/guides/build-and-test',
    description: (
      <Translate
        id="homepage.feature.build.description"
        values={{
          sourcescan: <strong>source-scan</strong>,
          buildimpact: <strong>build-impact</strong>,
          zosbuild: <strong>zos-build</strong>,
        }}>
        {'{sourcescan} cartographie vos dépendances COBOL, {buildimpact} calcule quoi recompiler depuis un diff Git, {zosbuild} compile via z/OSMF — rien à installer sur la LPAR.'}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.ai.title">IA sous gouvernance</Translate>,
    icon: '🤖',
    tint: styles.iconViolet,
    to: '/docs/task-reference/ai-prompt',
    description: (
      <Translate
        id="homepage.feature.ai.description"
        values={{
          aiprompt: <strong>ai-prompt</strong>,
          anonymized: <code>anonymized-only</code>,
        }}>
        {"La tâche {aiprompt} appelle un LLM pour expliquer un abend ou résumer un listing — endpoints déclarés dans le profil (jamais d'URL ni de clé dans le YAML), contexte {anonymized} vérifié statiquement sur le DAG, et l'IA reste consultative : elle n'exécute rien, ne décide de rien."}
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.feature.lint.title">Lint & Plan</Translate>,
    icon: '🔍',
    tint: styles.iconBlue,
    to: '/docs/cli-reference',
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
    tint: styles.iconGreen,
    to: '/docs/getting-started#secrets',
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
    tint: styles.iconViolet,
    to: '/docs/getting-started#installation',
    description: (
      <Translate
        id="homepage.feature.crossplatform.description"
        values={{runs: <code>.automate4z/runs/</code>}}>
        {'Linux, macOS, Windows × amd64 / arm64. Artefacts de run persistés sous {runs}. Rotation automatique. Sortie JSON machine-readable.'}
      </Translate>
    ),
  },
];

function Feature({title, icon, tint, to, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '1.5rem'}}>
      <Link to={to} className={styles.featureCardLink}>
        <div className={styles.featureCard}>
          <div className={clsx(styles.featureIcon, tint)}>{icon}</div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <span className={styles.featureMore}>
            <Translate id="homepage.feature.learnMore">En savoir plus</Translate>
            {' →'}
          </span>
        </div>
      </Link>
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
