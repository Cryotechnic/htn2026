import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import "../index.css";
import event1 from "../assets/1.jpg";
import event2 from "../assets/2.jpg";
import event3 from "../assets/3.jpg";
import event4 from "../assets/4.jpg";
import event5 from "../assets/5.jpg";
import event6 from "../assets/6.jpg";
import event7 from "../assets/7.jpg";
import event8 from "../assets/8.jpg";
import event9 from "../assets/9.jpg";
import event10 from "../assets/10.jpg";
import event11 from "../assets/11.jpg";
import event12 from "../assets/12.jpg";
import event13 from "../assets/13.jpg";
import event14 from "../assets/14.jpg";
import event15 from "../assets/15.jpg";
import Loading from "./Loading";

const imageMap = {
  1: event1,
  2: event2,
  3: event3,
  4: event4,
  5: event5,
  6: event6,
  7: event7,
  8: event8,
  9: event9,
  10: event10,
  11: event11,
  12: event12,
  13: event13,
  14: event14,
  15: event15,
};

export default function Home({ isAuthenticated }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_LOCAL_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data); // Set events in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  const filteredEvents = events.filter(
    (event) => isAuthenticated || event.permission === "public" // Show all if logged in, otherwise only public events
  );

  const groupedEvents = filteredEvents.reduce((acc, event, onLogin) => {
    const eventDate = new Date(event.start_time).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (!acc[eventDate]) {
      acc[eventDate] = [];
    }
    acc[eventDate].push(event);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1>Hack The North Events</h1>
      {Object.entries(groupedEvents).map(([date, events]) => (
        <div key={date} className="mb-4">
          <h2 className="text-primary">{date}</h2>
          <div className="d-flex gap-2 horizontal-scroll py-3">
            {events.map((event) => (
              <div key={event.id}>
                <EventCard {...event} image={imageMap[event.id]} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
