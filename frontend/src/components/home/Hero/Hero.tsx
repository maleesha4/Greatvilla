import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="gv-hero">
      <div className="gv-hero-background"></div>
      <div className="gv-hero-overlay"></div>

      <div className="gv-hero-content">
        <p className="gv-hero-kicker">
          A private world of elegance
        </p>

        <h1>
          Discover the Art
          <br />
          of <em>Luxury Living</em>
        </h1>

        <p className="gv-hero-description">
          Escape to a sanctuary where nature, comfort and
          timeless hospitality come together in perfect harmony.
        </p>

        <div className="gv-hero-actions">
          <Link
            to="/rooms"
            className="gv-btn gv-btn-primary"
          >
            Discover Our Rooms
          </Link>

          <Link
            to="/about"
            className="gv-btn gv-btn-outline-light"
          >
            Explore GreatVilla
          </Link>
        </div>
      </div>

      <a
        href="#booking-bar"
        className="gv-hero-scroll"
        aria-label="Scroll to booking form"
      >
        <span>Scroll</span>
        <i></i>
      </a>
    </section>
  );
};

export default Hero;