import React, { useState } from "react";
import { StyledProjectCard } from "../styles/StyledEventCard";
import EventModal from "./EventModal";

export default function EventCard({
  name,
  event_type,
  start_time,
  end_time,
  speakers,
  image,
  description,
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleShowModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <StyledProjectCard className="card my-3 shadow-sm" onClick={() => handleShowModal({ name, event_type, start_time, end_time, speakers, image, description })}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Type: {event_type}</h6>
          {image && (
            <div className="text-center" style={{ height: "150px", width: "225px" }}>
              <img
                src={image}
                alt={name}
                className="img-fluid mb-3"
                style={{ height: "150px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </StyledProjectCard>
      {selectedEvent && (
        <EventModal showModal={showModal} onClose={handleCloseModal} event={selectedEvent} />
      )}
    </>
  );
}
