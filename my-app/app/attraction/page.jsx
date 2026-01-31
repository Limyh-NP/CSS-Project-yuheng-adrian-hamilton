import Link from "next/link";
import styles from '/app/page.moduleYuheng.css';

export default function Attractions() {
  return (
    <main className="container">
      <h1 className="title">Top Tourist Attractions in Singapore</h1>

      <div className="attraction-grid">
        {/* Sentosa */}
        <div className="card">
          <h2>Sentosa</h2>
          <img src="/media/sentosa.jpg" alt="Sentosa" />
          <Link href="/attraction_sentosa" className="link">
            Find out more →
          </Link>
        </div>

        {/* Marina Bay Sands */}
        <div className="card">
          <h2>Marina Bay Sands</h2>
          <img src="/media/mbs.jpg" alt="Marina Bay Sands" />
          <Link href="/mbs" className="link">
            Find out more →
          </Link>
        </div>

        {/* Gardens by the Bay */}
        <div className="card">
          <h2>Gardens by the Bay</h2>
          <img src="/media/gbtb.jpg" alt="Gardens by the Bay" />
          <Link href="/gardens" className="link">
            Find out more →
          </Link>
        </div>
      </div>
    </main>
  );
}