import Navbar from './navbar';
import styles from './page.module.css'; // CSS module in app/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header>
          <Navbar />
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>© 2026 Singapore Tourist Attractions</p>
        </footer>
      </body>
    </html>
  );
}