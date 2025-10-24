import styles from './MatchdayTimeline.module.css';

const timeline = [
  {
    time: '16:30',
    label: 'Gates Open',
    description: 'Fan plaza activities ignite with live DJs, augmented reality tunnels, and local culinary experiences.'
  },
  {
    time: '18:05',
    label: 'Team Arrival',
    description: 'Players step through the illuminated Hall of Heroes beneath a roar of synchronized stadium lighting.'
  },
  {
    time: '19:10',
    label: 'Kickoff',
    description: 'Aurora City clashes with Coastal Kings under the Prime Night program, broadcast worldwide in 8K HDR.'
  },
  {
    time: '20:20',
    label: 'Halftime Spectacle',
    description: 'Aerial drone ballet choreographed to a cinematic score paints the skyline in club colors.'
  }
];

export function MatchdayTimeline() {
  return (
    <section className={styles.section} aria-labelledby="timeline-title">
      <div className={styles.intro}>
        <h2 id="timeline-title">Matchday crescendo</h2>
        <p>
          From the first fans entering the plaza to the last whistle under illuminated skies, every moment is curated for
          spectacle.
        </p>
      </div>
      <ol className={styles.timeline}>
        {timeline.map((item, index) => (
          <li key={item.time} className={styles.event}>
            <div className={styles.eventTime}>
              <span>{item.time}</span>
              <span className={styles.eventOrder}>#{index + 1}</span>
            </div>
            <div className={styles.eventBody}>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
