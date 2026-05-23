function HeroContent() {
  return (
    <div className="hero-body">
      <p className="eyebrow fade">Bydgoszcz · ul. Bocheńskiego 17-19</p>
      <h1 className="fade">
        TWÓJ
        <br />
        <span className="blue">FORD</span>
        <br />W DOBRYCH
        <br />
        RĘKACH
      </h1>
      <p className="tagline fade">
        Profesjonalny serwis samochodów marki Ford w Bydgoszczy. Diagnostyka, naprawa,
        przeglądy – kompleksowa obsługa przez doświadczony zespół.
      </p>
      <div className="hero-cta fade">
        <a href="tel:+48" className="btn-primary">
          📞 Zadzwoń:
        </a>
        <a href="#kontakt" className="btn-ghost">
          Jak dojechać →
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
