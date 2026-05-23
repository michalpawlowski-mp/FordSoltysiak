const stripItems = [
  {
    icon: "📍",
    title: "Bydgoszcz",
    subtitle: "ul. Bocheńskiego 17-19, 85-151",
  },
  {
    icon: "📞",
    title: "",
    subtitle: "Zadzwoń i umów wizytę",
  },
  {
    icon: "⏰",
    title: "Pon – Pt: 9:00–17:00",
    subtitle: "Sob: nieczynne",
  },
];

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
