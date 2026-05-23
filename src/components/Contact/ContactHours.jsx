const hours = [
  { day: "Poniedziałek", hours: "9:00 – 17:00" },
  { day: "Wtorek", hours: "9:00 – 17:00" },
  { day: "Środa", hours: "9:00 – 17:00" },
  { day: "Czwartek", hours: "9:00 – 17:00" },
  { day: "Piątek", hours: "9:00 – 17:00" },
  { day: "Sobota", hours: "Nieczynne", closed: true },
  { day: "Niedziela", hours: "Nieczynne", closed: true },
];

function ContactHours() {
  return (
    <div className="hours-box fade">
      <div className="hours-title">⏰ Godziny otwarcia</div>
      {hours.map((item) => (
        <div key={item.day} className={`hours-row${item.closed ? " closed" : ""}`}>
          <span>{item.day}</span>
          <span>{item.hours}</span>
        </div>
      ))}
    </div>
  );
}

export default ContactHours;
