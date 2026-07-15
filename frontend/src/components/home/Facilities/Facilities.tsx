import React from "react";

import "./Facilities.css";

const facilities = [
  {
    number: "01",
    title: "Infinity Pool",
    image: "/images/experiences/pool.webp",
    description:
      "Relax beside a serene infinity pool surrounded by tropical greenery and peaceful valley views.",
  },
  {
    number: "02",
    title: "Spa & Wellness",
    image: "/images/experiences/spa.webp",
    description:
      "Restore your mind and body through calming treatments, massages and personalised wellness rituals.",
  },
  {
    number: "03",
    title: "Private Dining",
    image: "/images/experiences/dining.webp",
    description:
      "Enjoy carefully prepared local and international dishes served in intimate indoor and outdoor settings.",
  },
];

const Facilities: React.FC = () => {
  return (
    <section className="gv-section gv-facilities">
      <div className="gv-container">
        <div className="gv-section-heading center">
          <span className="gv-eyebrow">
            Beyond your stay
          </span>

          <h2 className="gv-title">
            Experiences created
            <br />
            around you
          </h2>

          <p className="gv-description">
            Every GreatVilla experience is designed to help
            you slow down, reconnect and create lasting
            memories.
          </p>
        </div>

        <div className="gv-facilities-grid">
          {facilities.map((facility) => (
            <article
              className="gv-facility-card"
              key={facility.number}
            >
              <div className="gv-facility-image">
                <img
                  src={facility.image}
                  alt={facility.title}
                />

                <span>{facility.number}</span>
              </div>

              <div className="gv-facility-content">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;