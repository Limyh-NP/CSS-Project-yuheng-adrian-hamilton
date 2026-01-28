import Navbar from './navbar';
import styles from './page.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Singapore Attractions</title>
      </head>
      <body className={styles.body}>
        <header>
          <Navbar />
        </header>

        <main className={styles.main} style={{ minHeight: 'calc(100vh - 200px)', paddingBottom: '60px' }}>
          {children}
        </main>

        <footer className={styles.footer} style={{ marginTop: 'auto' }}>
          <p>© 2026 Singapore Tourist Attractions</p>
        </footer>
      </body>
    </html>
  );
}