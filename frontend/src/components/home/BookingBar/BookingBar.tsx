import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./BookingBar.css";

const BookingBar: React.FC = () => {
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (checkIn) {
      params.set("checkIn", checkIn);
    }

    if (checkOut) {
      params.set("checkOut", checkOut);
    }

    params.set("guests", guests);

    navigate(`/rooms?${params.toString()}`);
  };

  return (
    <section
      className="gv-booking-wrapper"
      id="booking-bar"
    >
      <form
        className="gv-booking-bar"
        onSubmit={handleSubmit}
      >
        <div className="gv-booking-heading">
          <span>Plan your escape</span>
          <strong>Check Availability</strong>
        </div>

        <label className="gv-booking-field">
          <span>Check In</span>

          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(event) =>
              setCheckIn(event.target.value)
            }
            required
          />
        </label>

        <label className="gv-booking-field">
          <span>Check Out</span>

          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(event) =>
              setCheckOut(event.target.value)
            }
            required
          />
        </label>

        <label className="gv-booking-field">
          <span>Guests</span>

          <select
            value={guests}
            onChange={(event) =>
              setGuests(event.target.value)
            }
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6+ Guests</option>
          </select>
        </label>

        <button
          type="submit"
          className="gv-booking-submit"
        >
          Search Rooms
          <span>→</span>
        </button>
      </form>
    </section>
  );
};

export default BookingBar;