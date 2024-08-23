import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who are we?',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        The Filipino Engineering Association of Students in Toronto (FEAST)
         is an EngSoc-affiliated club that aims to create a supportive and
         understanding community of Filipino engineering students at the University
         of Toronto. We hope to encourage young Filipinos to pursue a career in
         Engineering while raising awareness of Filipino culture within the Skule
         Community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureContent}>
        <Svg className={styles.featureSvg} role="img" />
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
