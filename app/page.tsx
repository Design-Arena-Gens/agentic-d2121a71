import { StadiumScene } from './components/StadiumScene';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { MatchdayTimeline } from './components/MatchdayTimeline';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.stadiumLabel}>Aurora Stadium</p>
        <h1 className={styles.heroTitle}>
          A <span className={styles.heroGradient}>football cathedral</span> born from light, sound, and adrenaline.
        </h1>
        <p className={styles.heroLead}>
          Traverse the emerald pitch, feel the pulse of 72,000 roaring supporters, and witness the spectacle of a
          primetime clash inside a digitally rendered architectural icon.
        </p>
        <div className={styles.ctaRow}>
          <button className={styles.ctaPrimary} type="button">
            Reserve matchday suite
          </button>
          <button className={styles.ctaSecondary} type="button">
            Explore 360° tour
          </button>
        </div>
      </header>
      <StadiumScene />
      <ExperienceHighlights />
      <MatchdayTimeline />
    </main>
  );
}
