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

      <p>
        Universal Studios Singapore (USS), located on Sentosa Island, is Southeast Asia's first and only Universal Studios theme park. It features 24 movie-themed rides, shows, and attractions across seven distinct, immersive zones—including Sci-Fi City, Ancient Egypt, and Far Far Away. Highlights include the world's tallest dueling roller coasters, Battlestar Galactica. 
      </p>

      <ul className="features-list">
        <li>
          <strong>Zones:</strong> Hollywood, New York, Sci-Fi City, Ancient Egypt,
          The Lost World, Far Far Away, and Madagascar.
        </li>

        <li>
          <strong>Attractions:</strong> Transformers The Ride: The Ultimate 3D Battle,
          Battlestar Galactica: HUMAN vs. CYLON™, and Jurassic Park Rapids Adventure.
        </li>
      </ul>

      <br />

      <br />

      <h3>
        Adventure Cove Waterpark
      </h3>

      <img src="/attraction_images/adventurecove.jpg" alt="USS" style={{ width: "60%", borderRadius: "12px", marginBottom: "20px" }} />

      <p>
        Adventure Cove Waterpark, located in Resorts World Sentosa, Singapore, is a premier tropical aquatic park featuring 14 thrilling rides and attractions. It offers a unique mix of high-speed water slides—including Southeast Asia's first hydro-magnetic coaster—a 620-meter lazy river, and interactive marine experiences like snorkeling with 20,000 fish. 
      </p>
      
      <ul className="features-list">
        <li>
          <strong>Thrilling Slides:</strong> High-speed, adrenaline-pumping rides like
          the Riptide Rocket, Pipeline Plunge, and Dueling Racer.
        </li>

        <li>
          <strong>Marine Life Encounters:</strong> Rainbow Reef allows snorkeling with
          thousands of fish, while Ray Bay provides up-close, safe interaction with
          stingrays.
        </li>

        <li>
          <strong>Relaxing Zones:</strong> The Adventure River takes guests through 14
          themed zones, including an underwater tunnel, while Bluewater Bay offers a
          large wave pool.
        </li>

        <li>
          <strong>Family-Friendly:</strong> Areas like the Big Bucket Treehouse and
          Seahorse Hideaway are designed for younger children.
        </li>
      </ul>

      <Link href="/" className="link">
        ← Back to Home
      </Link>
      </section>
    </main>
  );
}