import { stripItems } from "../../data/strip.data";

function HeroStrip() {
  return (
    <div className="strip">
      {stripItems.map((item) => (
        <div key={item.title} className="strip-item">
          <div className="strip-icon">{item.icon}</div>
          <div className="strip-info">
            <strong>{item.title}</strong>
            <span>{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroStrip;
