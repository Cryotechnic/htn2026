import React, { useState } from "react";
import { StyledProjectCard } from "../styles/StyledEventCard";
import EventModal from "./EventModal";
import "./EventCard.css";

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

  const getPillClass = (eventType) => {
    switch (eventType.toLowerCase()) {
      case "workshop":
        return "pill pill-workshop";
      case "talk":
        return "pill pill-talk";
      case "networking":
        return "pill pill-networking";
      default:
        return "pill pill-other";
    }
  };

  return (
    <>
      <div className="card-container">
        <StyledProjectCard className="card my-3 shadow-sm" onClick={() => handleShowModal({ name, event_type, start_time, end_time, speakers, image, description })}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className={`card-subtitle mb-2 ${getPillClass(event_type)}`}>Type: {event_type}</h6>
            {image && (
              <div className="image-container">
                <img
                  src={image}
                  alt={name}
                  className="img-fluid mb-3"
                  style={{ marginTop: "2rem" }}
                />
              </div>
            )}
          </div>
        </StyledProjectCard>
      </div>
      {selectedEvent && (
        <EventModal showModal={showModal} onClose={handleCloseModal} event={selectedEvent} />
      )}
    </>
  );
}
