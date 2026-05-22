function Contact() {
  return (
    <section class="contact-section" id="kontakt">
      <p class="section-label fade">Znajdź nas</p>
      <h2 class="fade">
        KONTAKT
        <br />I LOKALIZACJA
      </h2>

      <div class="contact-grid">
        <div>
          <div class="contact-info">
            <div class="contact-item fade">
              <div class="contact-item-icon">📍</div>
              <div class="contact-item-text">
                <strong>Adres</strong>
                <span>ul. ks. Jana Bocheńskiego 17/19</span>
                <span>85-151 Bydgoszcz</span>
              </div>
            </div>
            <div class="contact-item fade">
              <div class="contact-item-icon">📞</div>
              <div class="contact-item-text">
                <strong>Telefon</strong>
                <a href="tel:+48">+48</a>
              </div>
            </div>
            <div class="contact-item fade">
              <div class="contact-item-icon">✉️</div>
              <div class="contact-item-text">
                <strong>E-mail</strong>
                <a href="mailto:"></a>
              </div>
            </div>
            <div class="contact-item fade">
              <div class="contact-item-icon">🏢</div>
              <div class="contact-item-text">
                <strong>Dane firmy</strong>
                <span>Ford Magdalena Sołtysiak</span>
                <span>NIP: 554-132-63-88</span>
              </div>
            </div>
          </div>

          <div class="hours-box fade">
            <div class="hours-title">⏰ Godziny otwarcia</div>
            <div class="hours-row">
              <span>Poniedziałek</span>
              <span>8:00 – 17:00</span>
            </div>
            <div class="hours-row">
              <span>Wtorek</span>
              <span>8:00 – 17:00</span>
            </div>
            <div class="hours-row">
              <span>Środa</span>
              <span>8:00 – 17:00</span>
            </div>
            <div class="hours-row">
              <span>Czwartek</span>
              <span>8:00 – 17:00</span>
            </div>
            <div class="hours-row">
              <span>Piątek</span>
              <span>8:00 – 17:00</span>
            </div>
            <div class="hours-row">
              <span>Sobota</span>
              <span>Nieczynne</span>
            </div>
            <div class="hours-row closed">
              <span>Niedziela</span>
              <span>Nieczynne</span>
            </div>
          </div>
        </div>

        <div class="fade">
          <div class="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.761774629807!2d18.004201585453806!3d53.102152019158154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313ba649f68e7%3A0x1abd1360dc27897a!2sFORD%20So%C5%82tysiak!5e1!3m2!1spl!2spl!4v1776331850349!5m2!1spl!2spl"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://maps.google.com/?q=Ford+Sołtysiak+Bydgoszcz+Bocheńskiego+17"
            target="_blank"
            rel="noopener"
            class="btn-primary btn-map"
          >
            📍 Otwórz w Mapach Google
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
