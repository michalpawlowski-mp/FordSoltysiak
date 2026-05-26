import hours from "../../data/hours.data";

function ContactHours() {
  return (
    <div className="hours-box fade">
      <div className="hours-title">⏰ Godziny otwarcia</div>
      {hours.map((item) => (
        <div
          key={item.day}
          className={`hours-row${item.closed ? " closed" : ""}`}
        >
          <span>{item.day}</span>
          <span>{item.hours}</span>
        </div>
      ))}
    </div>
  );
}

export default ContactHours;
