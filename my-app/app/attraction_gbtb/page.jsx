import Link from "next/link";
// Ensure this points to your valid CSS module file (e.g., ham.module.css)
import styles from "../css/page.moduleHam.module.css";

export default function GBTBPage() {
  return (
    <main className="container">
      <section id="para">
      
      <h1>Gardens by the Bay</h1>

      {/* Main Feature Image */}
      <img
        src="/media/garden.jpg"
        alt="Gardens by the Bay Aerial View"
        style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }}
      />

      <p>
        Gardens by the Bay is a futuristic nature park spanning 101 hectares in central Singapore. 
        Famous for its towering Supertrees and climate-controlled cooled conservatories, it is a 
        model of sustainable design and horticultural excellence.
      </p>
      

      <p>
        It brings the world of plants to Singapore, featuring over 1.5 million plants from every 
        continent except Antarctica. It is a masterpiece of garden artistry and engineering.
      </p>

      <br />
      <br />

      <section id="usstop">
      <h2>
        Things to do at Gardens by the Bay
      </h2>
      </section>
      
      <br />
      
      <h3>
        Supertree Grove & OCBC Skyway
      </h3>
    
      <img 
        src="/media/skyway.jpg" 
        alt="Supertree Grove at Night" 
        style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }} 
      />
     
      <p>
        The Supertrees are tree-like vertical gardens measuring between 25 and 50 meters tall. 
        They come alive at night with an exhilarating light and musical display known as the 
        Garden Rhapsody.
      </p>

      <ul className="features-list">
        <li>
          <strong>OCBC Skyway:</strong> A 128-meter long aerial walkway suspended 22 meters 
          above the ground, connecting two Supertrees.
        </li>

        <li>
          <strong>Garden Rhapsody:</strong> A free nightly light and sound show that dazzles 
          visitors with colorful illuminations.
        </li>
      </ul>

      <br />

      <br />

      <h3>
        Cloud Forest & Flower Dome
      </h3>

      <img 
        src="/media/waterfall.jpg" 
        alt="Cloud Forest Waterfall" 
        style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }} 
      />

      <p>
        The two Cooled Conservatories are architectural marvels. The Flower Dome is the world's 
        largest glass greenhouse, while the Cloud Forest features a 35-meter tall mountain 
        veiled in mist and a spectacular indoor waterfall.
      </p>
      
      <ul className="features-list">
        <li>
          <strong>Cloud Forest:</strong> Replicates a tropical mountain climate; home to 
          orchids, ferns, and the famous Cloud Mountain.
        </li>

        <li>
          <strong>Flower Dome:</strong> Showcases exotic plants from the Mediterranean and 
          semi-arid regions, with changing floral displays.
        </li>

        <li>
          <strong>Sustainability:</strong> The domes use cutting-edge technologies for 
          energy-efficient cooling.
        </li>
      </ul>

      <Link href="/" className="link">
        ← Back to Home
      </Link>
      </section>
    </main>
  );
}