// app/page.jsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import baseStyles from './page.module.css';
// ADJUSTMENT 1: Correct path to your CSS folder
import homeStyles from './css/page.moduleHam.module.css';

export default function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(homeStyles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <section className={baseStyles.section}>
      <header className={`${homeStyles.hero} ${homeStyles.parallaxHero}`}>
        <div className={homeStyles.heroMedia}>
          {/* ADJUSTMENT 2: Using Unsplash URL and 'unoptimized' so it works instantly */}
          <Image
            src="/media/singapore-skyline.jpg"
            alt="Marina Bay Sands skyline at dusk"
            fill
            sizes="(max-width: 600px) 100vw, 900px"
            className={homeStyles.heroImage}
            priority
            unoptimized 
          />
        </div>

        <div className={`${homeStyles.heroContent} ${homeStyles.reveal}`} ref={setRef}>
          <h1 className={homeStyles.h1}>Welcome to Singapore</h1>
          <p className={homeStyles.lead}>
            Explore Singapore’s most famous attraction with a responsive, immersive guide.
            Discover skyline views and world-class entertainment.
          </p>
          <div className={homeStyles.heroActions}>
            <Link href="/attraction" className={homeStyles.ctaPrimary}>
              Explore Attractions
            </Link>
            <Link href="/Itinerary" className={homeStyles.ctaPrimary}>
              Build an Itinerary
            </Link>
          </div>
        </div>
      </header>

      <section className={baseStyles.intro || ''}>
        <h2 className={baseStyles.h2}>Featured attraction</h2>
        <p>
          Our highlighted pick to get you started — a must-see landmark in Singapore.
        </p>

        <div className={homeStyles.singleCardWrap}>
          <article
            className={`${homeStyles.card} ${homeStyles.reveal}`}
            ref={setRef}
          >
            <div className={homeStyles.cardImageWrap}>
              {/* ADJUSTMENT 2: Using Unsplash URL and 'unoptimized' */}
              <Image
                src="/media/marina-bay-sands.jpg"
                alt="Marina Bay Sands rooftop view"
                width={1600}
                height={900}
                className={homeStyles.cardImage}
                priority
                unoptimized
              />
            </div>

            <div className={homeStyles.cardBody}>
              <h3>Marina Bay Sands</h3>
              <p>
                Iconic skyline, rooftop infinity pool, luxury shopping, and world-class entertainment.
              </p>
              {/* ADJUSTMENT 3: Correct link to your MBS folder */}
              <Link href="/attraction_mbs" className={homeStyles.cardLink}>
                Learn more
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={homeStyles.ctaStrip}>
        <p className={homeStyles.ctaText}>
          Ready to plan your day? Create a custom itinerary and save your favorites.
        </p>
        <Link href="/Itinerary" className={homeStyles.ctaPrimary + ' ' + homeStyles.pulse}>
          Start planning
        </Link>
      </section>
    </section>
  );
}