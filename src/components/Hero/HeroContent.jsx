function HeroContent() {
  return (
    <div className="hero-body">
      <p className="eyebrow fade">Bydgoszcz · ul. Bocheńskiego 17-19</p>
      <h1 className="fade">
        <span className="block">TWÓJ</span>
        <span className="block blue">FORD</span>
        <span className="block">W DOBRYCH</span>
        <span className="block">RĘKACH</span>
      </h1>
      <p className="tagline fade">
        Profesjonalny serwis samochodów marki Ford w Bydgoszczy. Diagnostyka,
        naprawa, przeglądy – kompleksowa obsługa przez doświadczony zespół.
      </p>
      <div className="hero-cta fade">
        <a href="tel:+48506042317" className="btn-primary">
          📞 Zadzwoń: 506 042 317
        </a>
        <a href="#kontakt" className="btn-ghost">
          Jak dojechać →
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
