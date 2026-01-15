'use client';
import Link from 'next/link';
import styles from './page.module.css'; // CSS module in app/

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Singapore Attractions</h1>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/attractions">Attractions</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}