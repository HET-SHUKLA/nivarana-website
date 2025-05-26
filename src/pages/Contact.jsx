
export default function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="text" placeholder="Project Type" /><br />
        <textarea placeholder="Your Message"></textarea><br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}