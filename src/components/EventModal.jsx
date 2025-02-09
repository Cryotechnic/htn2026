import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { StyledEventModal } from "../styles/StyledEventCard";
import "../fade.css";

export default function EventModal({ showModal, onClose, event }) {
  const [inProp, setInProp] = useState(showModal);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(showModal);
  }, [showModal]);

  const handleClose = () => {
    setInProp(false);
    setTimeout(onClose, 300); // Match the duration of the fade-out transition
  };

  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="modal-fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <StyledEventModal ref={nodeRef}>
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5 className="modal-title">{event.name}</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Type: {event.event_type}</p>
                <p>Start Time: {event.start_time}</p>
                <p>End Time: {event.end_time}</p>
                <p>Speakers: {Array.isArray(event.speakers) ? event.speakers.join(", ") : event.speakers}</p>
                <p>Description: {event.description}</p>
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.name}
                    className="img-fluid"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </StyledEventModal>
    </CSSTransition>
  );
}