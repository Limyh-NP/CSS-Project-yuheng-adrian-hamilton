import Link from "next/link";
import styles from "/app/page.moduleYuheng.css";

export default function SentosaPage() {
  return (
    <main className="container">
      <section id="para">
      
      <h1>Sentosa</h1>

      <img
        src="/attraction_images/sentosa.jpg"
        alt="Sentosa"
        style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }}
      />

      <p>
        Sentosa is one of Singapore’s most popular leisure destinations,
        offering beaches, theme parks, and entertainment attractions.
        It reflects Singapore’s culture of work-life balance and tourism,
        attracting millions of locals and tourists every year.
      </p>
      

      <p>
        Families, tourists, and adventure seekers find Sentosa attractive
        because it offers something for all ages.
      </p>

      <br />

      <section id="usstop">
      <h2>
        Things do to at Sentosa
      </h2>
      </section>
      
      <br />
      
      <h3>
        Universal Studios Singapore
      </h3>
    
      <img src="/attraction_images/uss.jpg" alt="USS" style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }} />

      <p>
        One of the most fun and enjoyable things to do in Sentosa is to visit
        Universal Studios Singapore! Enjoy tons of rollercoasters, leisure rides, and
        good food!
      </p>

      <Link href="/" className="link">
        ← Back to Home
      </Link>
      </section>
    </main>
  );
}