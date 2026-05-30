function ContactMap() {
  return (
    <div className="fade">
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.761774629807!2d18.004201585453806!3d53.102152019158154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313ba649f68e7%3A0x1abd1360dc27897a!2sFORD%20So%C5%82tysiak!5e1!3m2!1spl!2spl!4v1776331850349!5m2!1spl!2spl"
          width="600"
          height="450"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
      </div>
      <a
        href="https://maps.google.com/?q=Ford+Sołtysiak+Bydgoszcz+Bocheńskiego+17"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary btn-map"
      >
        📍 Otwórz w Mapach Google
      </a>
    </div>
  );
}

export default ContactMap;
