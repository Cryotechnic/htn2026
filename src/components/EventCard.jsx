import React from "react";
import { StyledProjectCard, StyledEventModal } from "../styles/StyledEventCard";

export default function EventCard({
  name,
  event_type,
  start_time,
  end_time,
  speakers,
  image,
}) {
  const [showModal, setShowModal] = React.useState(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <StyledProjectCard className="card my-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Type: {event_type}</h6>
        {image && (
          <div
            className="text-center"
            style={{ height: "150px", width: "225px" }}
            onClick={handleShowModal}
          >
            <img
              src={image}
              alt={name}
              className="img-fluid mb-3"
              style={{ height: "150px", objectFit: "cover" }}
            />
          </div>
        )}
        <p>
          <strong>Start:</strong> {new Date(start_time).toLocaleString()}
        </p>
        <p>
          <strong>End:</strong> {new Date(end_time).toLocaleString()}
        </p>
        {speakers.length > 0 && (
          <p>
            <strong>Speakers:</strong> {speakers.map((s) => s.name).join(", ")}
          </p>
        )}
      </div>

      {showModal && <p>I show the modal</p>}
    </StyledProjectCard>
  );
}
