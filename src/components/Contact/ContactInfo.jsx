function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-item fade">
        <div className="contact-item-icon">📍</div>
        <div className="contact-item-text">
          <strong>Adres</strong>
          <span>ul. ks. Jana Bocheńskiego 17/19</span>
          <span>85-151 Bydgoszcz</span>
        </div>
      </div>
      <div className="contact-item fade">
        <div className="contact-item-icon">📞</div>
        <div className="contact-item-text">
          <strong>Telefon</strong>
          <a href="tel:+48506042317">+48 506 042 317</a>
        </div>
      </div>
      <div className="contact-item fade">
        <div className="contact-item-icon">✉️</div>
        <div className="contact-item-text">
          <strong>E-mail</strong>
          <a href="mailto:madziulek_30@poczta.onet.pl">madziulek_30@poczta.onet.pl</a>
        </div>
      </div>
      <div className="contact-item fade">
        <div className="contact-item-icon">🏢</div>
        <div className="contact-item-text">
          <strong>Dane firmy</strong>
          <span>Ford Magdalena Sołtysiak</span>
          <span>NIP: 554-132-63-88</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
