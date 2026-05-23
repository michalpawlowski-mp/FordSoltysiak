import star from "../../assets/star.svg";

function HeroRating() {
  return (
    <div className="hero-rating fade">
      <div className="rating-num">
        4<span>.</span>9
      </div>
      <div className="stars">
        {[...Array(5)].map(() => (
          <img src={star} alt="star" />
        ))}
      </div>
      <div className="rating-label">Ocena klientów</div>
      <div className="rating-count">Yanosik Warsztaty</div>
    </div>
  );
}

export default HeroRating;
