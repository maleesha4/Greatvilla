import React, { useState } from "react";

import "./Testimonials.css";

const testimonials = [
  {
    message:
      "GreatVilla gave us the peaceful holiday we had been searching for. Every detail, from the room to the dining experience, felt personal and refined.",
    name: "Sarah & David",
    country: "United Kingdom",
  },
  {
    message:
      "The private pool, beautiful gardens and attentive staff made our stay unforgettable. We are already planning our next visit.",
    name: "Nimal & Amaya",
    country: "Sri Lanka",
  },
  {
    message:
      "A truly elegant escape. The villa blends luxury with nature beautifully, and the service exceeded every expectation.",
    name: "Charlotte M.",
    country: "France",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1,
    );
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="gv-testimonials">
      <div className="gv-container gv-testimonials-container">
        <div className="gv-testimonial-side">
          <span className="gv-eyebrow">
            Guest stories
          </span>

          <h2 className="gv-title">
            What our guests
            <br />
            remember most
          </h2>
        </div>

        <div className="gv-testimonial-content">
          <div className="gv-testimonial-mark">“</div>

          <blockquote>
            {testimonial.message}
          </blockquote>

          <div className="gv-testimonial-author">
            <strong>{testimonial.name}</strong>
            <span>{testimonial.country}</span>
          </div>

          <div className="gv-testimonial-controls">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <span>
              {String(activeIndex + 1).padStart(2, "0")}
              <i></i>
              {String(testimonials.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;