import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Welcome to Singapore</h2>
      <p>
        Explore Singapores famous tourist attractions through this
        responsive web application. 
      </p>
    </section>
  );
}
