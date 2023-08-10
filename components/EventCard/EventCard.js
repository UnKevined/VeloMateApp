import React from 'react';
import './EventCard.css'; // Importiere das Styling

function EventCard(props) {
  const { title, date, location, description } = props;

  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>{description}</p>
    </div>
  );
}

export default EventCard;
