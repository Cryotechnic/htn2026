import EventModal from "../components/EventModal";
import { StyledLoading } from "../styles/StyledLoading";

export default function Loading() {
  return (
    // <StyledLoading>
    //   <div className="loading">Loading&#8230;</div>
    // </StyledLoading>
    <EventModal showModal={true} onClose={() => setShowModal(false)} />
  );
}
