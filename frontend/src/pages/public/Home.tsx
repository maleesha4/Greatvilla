import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/home/Hero/Hero";
import BookingBar from "../../components/home/BookingBar/BookingBar";
import FeaturedRooms from "../../components/home/FeaturedRooms/FeaturedRooms";
import Facilities from "../../components/home/Facilities/Facilities";
import Gallery from "../../components/home/Gallery/Gallery";
import Testimonials from "../../components/home/Testimonials/Testimonials";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="gv-home">
      <Hero />

      <BookingBar />

      <section className="gv-section gv-home-intro">
        <div className="gv-container gv-intro-grid">
          <div className="gv-intro-image">
            <img
              src="/images/home/about-villa.webp"
              alt="GreatVilla luxury villa"
            />

            <div className="gv-intro-experience">
              <strong>06+</strong>
              <span>
                Years of
                <br />
                warm hospitality
              </span>
            </div>
          </div>

          <div className="gv-intro-content">
            <span className="gv-eyebrow">
              Welcome to GreatVilla
            </span>

            <h2 className="gv-title">
              A luxury retreat
              <br />
              inspired by nature
            </h2>

            <p className="gv-description">
              GreatVilla is a private sanctuary created for
              guests seeking tranquillity, refined comfort and
              meaningful experiences. Thoughtfully designed
              spaces, tropical landscapes and personalised
              service make every stay feel exceptional.
            </p>

            <p className="gv-description">
              From peaceful mornings beside the pool to
              private dining beneath the stars, every moment
              is shaped around your comfort.
            </p>

            <Link
              to="/about"
              className="gv-home-text-link"
            >
              Discover Our Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="gv-home-benefits">
        <div className="gv-container gv-benefits-grid">
          <article>
            <span>01</span>
            <div>
              <h3>Best Rate Guarantee</h3>
              <p>
                Enjoy our best available rates when booking
                directly with GreatVilla.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>Flexible Reservations</h3>
              <p>
                Plan with confidence using flexible booking
                and cancellation options.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>Personalised Service</h3>
              <p>
                Our villa team is available to create a stay
                tailored around your needs.
              </p>
            </div>
          </article>
        </div>
      </section>

      <FeaturedRooms />

      <section className="gv-home-offer">
        <div className="gv-home-offer-image"></div>
        <div className="gv-home-offer-overlay"></div>

        <div className="gv-container gv-home-offer-content">
          <span className="gv-eyebrow">
            Exclusive villa offer
          </span>

          <h2>
            Stay three nights
            <br />
            and enjoy one more
          </h2>

          <p>
            Extend your GreatVilla escape with a complimentary
            additional night and a private dining experience.
          </p>

          <Link
            to="/rooms"
            className="gv-btn gv-btn-primary"
          >
            View Special Offer
          </Link>
        </div>
      </section>

      <Facilities />

      <Gallery />

      <Testimonials />

      <section className="gv-home-newsletter">
        <div className="gv-container gv-newsletter-container">
          <div>
            <span className="gv-eyebrow">
              Stay inspired
            </span>

            <h2>
              Receive stories, offers
              <br />
              and villa updates
            </h2>
          </div>

          <form
            className="gv-newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">
              Subscribe
              <span>→</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;