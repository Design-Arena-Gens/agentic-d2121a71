import styles from './ExperienceHighlights.module.css';

const highlights = [
  {
    title: 'Immersive Atmosphere',
    description:
      'Dynamic lighting, crowd energy, and environmental effects recreate the thrill of a packed primetime showdown.',
    metric: '72,000+',
    metricLabel: 'Fans in attendance'
  },
  {
    title: 'Next-Gen Turf',
    description:
      'Precision-marked, performance-optimized playing surface engineered for speed, agility, and highlight-reel moments.',
    metric: '68°F',
    metricLabel: 'Field temperature maintained'
  },
  {
    title: 'Signature Sound',
    description:
      '360º immersive audio keeps every chant, call, and anthem in perfect sync with on-field action.',
    metric: '126 dB',
    metricLabel: 'Peak crowd volume'
  }
];

export function ExperienceHighlights() {
  return (
    <section className={styles.section} aria-labelledby="highlights-title">
      <div className={styles.headerRow}>
        <h2 id="highlights-title">An arena engineered for legends</h2>
        <p>
          Crafted with modern, architectural finesse, Aurora Stadium blends kinetic architecture, immersive lighting, and
          a responsive playing surface to deliver a matchday unlike any other.
        </p>
      </div>
      <div className={styles.grid}>
        {highlights.map((highlight) => (
          <article key={highlight.title} className={styles.card}>
            <header>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </header>
            <dl className={styles.metric}>
              <div>
                <dt className="visually-hidden">Metric</dt>
                <dd>{highlight.metric}</dd>
              </div>
              <div>
                <dt className="visually-hidden">Metric label</dt>
                <dd>{highlight.metricLabel}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
