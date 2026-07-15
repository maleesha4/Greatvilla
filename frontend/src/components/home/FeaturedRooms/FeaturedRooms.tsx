import React from "react";
import { Link } from "react-router-dom";

import "./FeaturedRooms.css";

const rooms = [
  {
    id: "garden-suite",
    name: "Garden Suite",
    category: "Nature Retreat",
    image: "/images/rooms/room1.webp",
    description:
      "A calm private suite opening directly into tropical gardens and peaceful outdoor living spaces.",
    guests: "2 Guests",
    size: "52 m²",
    price: "LKR 45,000",
  },
  {
    id: "royal-villa",
    name: "Royal Villa Suite",
    category: "Signature Luxury",
    image: "/images/rooms/room2.webp",
    description:
      "Our finest suite with a private terrace, elegant lounge and personalised villa service.",
    guests: "4 Guests",
    size: "86 m²",
    price: "LKR 78,000",
  },
  {
    id: "poolside-cabana",
    name: "Poolside Cabana",
    category: "Pool Living",
    image: "/images/rooms/room3.webp",
    description:
      "Wake beside the water with direct pool access and relaxing indoor-outdoor luxury.",
    guests: "2 Guests",
    size: "60 m²",
    price: "LKR 58,000",
  },
];

const FeaturedRooms: React.FC = () => {
  return (
    <section className="gv-section gv-rooms-section">
      <div className="gv-container">
        <div className="gv-section-heading">
          <span className="gv-eyebrow">
            Stay in comfort
          </span>

          <h2 className="gv-title">
            Rooms designed for
            <br />
            quiet, luxurious moments
          </h2>
        </div>

        <div className="gv-room-grid">
          {rooms.map((room) => (
            <article
              className="gv-room-card"
              key={room.id}
            >
              <Link
                to={`/rooms/${room.id}`}
                className="gv-room-image"
              >
                <img
                  src={room.image}
                  alt={room.name}
                />

                <span className="gv-room-category">
                  {room.category}
                </span>
              </Link>

              <div className="gv-room-body">
                <div className="gv-room-title-row">
                  <h3>{room.name}</h3>

                  <span>
                    From
                    <strong>{room.price}</strong>
                  </span>
                </div>

                <p>{room.description}</p>

                <div className="gv-room-footer">
                  <div className="gv-room-meta">
                    <span>{room.guests}</span>
                    <span>{room.size}</span>
                  </div>

                  <Link
                    to={`/rooms/${room.id}`}
                    className="gv-room-link"
                  >
                    View Room
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="gv-rooms-view-all">
          <Link
            to="/rooms"
            className="gv-btn gv-btn-dark"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;