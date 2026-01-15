export default function Contact() {
  return (
    <section>
      <h2>Contact & Feedback</h2>

      <form>
        <p>
          <label>
            Name:
            <input type="text" />
          </label>
        </p>

        <p>
          <label>
            Are you enjoying the website?
            <input type="radio" name="enjoy" /> Yes
            <input type="radio" name="enjoy" /> No
          </label>
        </p>

        <p>
          <label>
            Attractions you like:
            <input type="checkbox" /> Marina Bay Sands
            <input type="checkbox" /> Sentosa Island
          </label>
        </p>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}