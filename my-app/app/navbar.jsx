'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';

export default function Navbar() {
  const pathname = usePathname(); // detects current page

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Attractions', href: '/attraction' },
    { name: 'Itinerary', href: '/Itinerary' },
  ];

  return (
    <nav className={styles.navbar} >
      <h1 className={styles.logo}>Singapore Attractions</h1>
      <ul className={styles.navLinks}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${pathname === item.href ? styles.activeLink : ''}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}