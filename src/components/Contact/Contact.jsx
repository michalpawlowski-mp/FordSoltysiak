import ContactInfo from "./ContactInfo";
import ContactHours from "./ContactHours";
import ContactMap from "./ContactMap";

function Contact() {
  return (
    <section className="contact-section" id="kontakt">
      <p className="section-label fade">Znajdź nas</p>
      <h2 className="fade">KONTAKT I LOKALIZACJA</h2>
      <div className="contact-grid">
        <div>
          <ContactInfo />
          <ContactHours />
        </div>
        <ContactMap />
      </div>
    </section>
  );
}

export default Contact;
