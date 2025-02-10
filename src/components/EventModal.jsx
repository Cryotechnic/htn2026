import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { StyledEventModal } from "../styles/StyledEventCard";
import "../fade.css";

export default function EventModal({ showModal, onClose, event }) {
  const [inProp, setInProp] = useState(showModal);
  const nodeRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setInProp(showModal);
  }, [showModal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setInProp(false);
    setTimeout(onClose, 300); // Match the duration of the fade-out transition
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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
          <div className="modal-dialog" role="document" ref={modalRef}>
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  borderBottom: "1px solid #dee2e6",
                  position: "relative",
                }}
              >
                <h5 className="modal-title" style={{ margin: 0 }}>{event.name}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleClose}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "#000",
                    opacity: 0.5,
                    position: "absolute",
                    top: "50%",
                    right: "1rem",
                    transform: "translateY(-50%)",
                  }}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {event.image && <img src={event.image} alt={event.name} />}
                <p>Start Time: {formatDate(event.start_time)}</p>
                <p>End Time: {formatDate(event.end_time)}</p>
                <p>Speakers: {Array.isArray(event.speakers) ? event.speakers.map(speaker => speaker.name).join(", ") : event.speakers}</p>
                <p>Description: {event.description}</p>
              </div>
            </div>
          </div>
        </div>
      </StyledEventModal>
    </CSSTransition>
  );
}