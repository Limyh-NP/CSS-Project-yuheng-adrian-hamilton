import Link from "next/link";
// Make sure this points to your specific CSS file (e.g., ham.module.css)
import styles from "../css/page.moduleHam.module.css";

export default function MBSPage() {
  return (
    <main className="container">
      <section id="para">
      
      <h1>Marina Bay Sands</h1>

      <img
        src="/media/marina-bay-sands-attraction1.jpg"
        alt="Marina Bay Sands Exterior"
        style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }}
      />

      <p>
        Marina Bay Sands is an iconic integrated resort fronting Marina Bay in Singapore. 
        Known for its distinct architecture resembling a ship atop three towers, it defines 
        the city's skyline. It features a luxury hotel, a convention center, and the world's 
        largest atrium casino.
      </p>
      

      <p>
        Whether you are looking for luxury shopping, world-class dining, or breathtaking views, 
        MBS offers a glimpse into the futuristic side of Singapore.
      </p>

      <br />
      <br />

      <section id="usstop">
      <h2>
        Things to do at Marina Bay Sands
      </h2>
      </section>
      
      <br />
      
      <h3>
        Sands SkyPark & Infinity Pool
      </h3>
    
      <img 
        src="/media/infinity-pool.jpg" 
        alt="Infinity Pool" 
        style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }} 
      />
     
      <p>
        Perched 57 levels above the heart of the city, the Sands SkyPark Observation Deck offers 
        a scenic view of the panoramic vistas of Marina Bay and Singapore’s world-class cityscape. 
        Guests of the hotel can swim in the world's largest rooftop infinity pool.
      </p>

      <ul className="features-list">
        <li>
          <strong>The View:</strong> See Gardens by the Bay, the Supertree Grove, and the sea 
          stretching from Marina South Pier to the Singapore Strait.
        </li>

        <li>
          <strong>Dining:</strong> Enjoy rooftop dining at CÉ LA VI or LAVO Italian Restaurant 
          & Rooftop Bar.
        </li>
      </ul>

      <br />

      <br />

      <h3>
        The Shoppes & ArtScience Museum
      </h3>

      <img 
        src="/media/art-museum.jpg" 
        alt="ArtScience Museum" 
        style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }} 
      />

      <p>
        The Shoppes at Marina Bay Sands is one of Singapore’s largest luxury shopping malls, 
        complete with a canal where you can take a Sampan boat ride. Right outside is the 
        lotus-shaped ArtScience Museum, blending art, science, culture, and technology.
      </p>
      
      <ul className="features-list">
        <li>
          <strong>Luxury Retail:</strong> Home to over 170 premium brands and duplex stores.
        </li>

        <li>
          <strong>Digital Light Canvas:</strong> An interactive light installation that reacts 
          to your footsteps.
        </li>

        <li>
          <strong>Exhibitions:</strong> The ArtScience Museum hosts touring exhibitions from 
          around the world, including the permanent "Future World" exhibit.
        </li>
      </ul>

      <Link href="/" className="link">
        ← Back to Home
      </Link>
      </section>
    </main>
  );
}