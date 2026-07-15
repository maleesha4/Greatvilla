import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { authService } from "../../../services/auth.service";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    authService.logout();
    closeMenu();
    navigate("/");
  };

  return (
    <header
      className={`gv-navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="gv-navbar-container">
        <Link
          to="/"
          className="gv-navbar-logo"
          onClick={closeMenu}
        >
          <span>GREAT</span>
          <strong>VILLA</strong>
        </Link>

        <button
          type="button"
          className={`gv-menu-button ${
            isMenuOpen ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`gv-navbar-menu ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <div className="gv-navbar-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "gv-navbar-link active"
                  : "gv-navbar-link"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                isActive
                  ? "gv-navbar-link active"
                  : "gv-navbar-link"
              }
              onClick={closeMenu}
            >
              Rooms
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "gv-navbar-link active"
                  : "gv-navbar-link"
              }
              onClick={closeMenu}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "gv-navbar-link active"
                  : "gv-navbar-link"
              }
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "gv-navbar-link active"
                  : "gv-navbar-link"
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>

          <div className="gv-navbar-actions">
            {user ? (
              <>
                <Link
                  to={
                    user.role === "ADMIN"
                      ? "/admin/dashboard"
                      : "/dashboard"
                  }
                  className="gv-navbar-login"
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>

                <button
                  type="button"
                  className="gv-navbar-book"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="gv-navbar-login"
                  onClick={closeMenu}
                >
                  Login
                </Link>

                <Link
                  to="/rooms"
                  className="gv-navbar-book"
                  onClick={closeMenu}
                >
                  Book Now
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;