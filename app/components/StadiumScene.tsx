import styles from './StadiumScene.module.css';

export function StadiumScene() {
  return (
    <section className={styles.wrapper} aria-labelledby="stadium-title">
      <div className={styles.scene}>
        <div className={styles.skyGlow} aria-hidden />
        <div className={styles.lights} aria-hidden>
          <div className={`${styles.light} ${styles.lightLeft}`}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={`${styles.light} ${styles.lightRight}`}>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={styles.stands} aria-hidden>
          <div className={`${styles.tier} ${styles.upperTier}`}>
            <div className={styles.seatBand} />
            <div className={styles.seatBand} />
            <div className={styles.seatBand} />
          </div>
          <div className={`${styles.tier} ${styles.lowerTier}`}>
            <div className={styles.seatBand} />
            <div className={styles.seatBand} />
            <div className={styles.seatBand} />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.grass} />
          <div className={`${styles.endzone} ${styles.endzoneHome}`}>AURORA</div>
          <div className={`${styles.endzone} ${styles.endzoneAway}`}>VISITORS</div>
          <div className={styles.centerLogo}>
            <div className={styles.centerRing} />
            <div className={styles.centerRingInner} />
            <span className={styles.centerStar}>★</span>
          </div>
          <div className={styles.yardMarkers} aria-hidden>
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={`hash-${index}`} className={styles.hash} />
            ))}
          </div>
          <div className={styles.yardNumbers} aria-hidden>
            {[10, 20, 30, 40, 50, 40, 30, 20, 10].map((mark, index) => (
              <span key={`yard-${mark}-${index}`}>{mark}</span>
            ))}
          </div>
        </div>
        <div className={styles.scoreboard}>
          <div>
            <p className={styles.scoreboardLabel}>Quarter</p>
            <p className={styles.scoreboardValue}>4</p>
          </div>
          <div>
            <p className={styles.scoreboardLabel}>Home</p>
            <p className={styles.scoreboardScore}>27</p>
          </div>
          <div>
            <p className={styles.scoreboardLabel}>Away</p>
            <p className={styles.scoreboardScore}>24</p>
          </div>
          <div>
            <p className={styles.scoreboardLabel}>Time</p>
            <p className={styles.scoreboardValue}>01:32</p>
          </div>
        </div>
        <div className={styles.pitchGlow} aria-hidden />
      </div>
    </section>
  );
}
