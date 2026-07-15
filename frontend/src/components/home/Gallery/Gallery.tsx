import React from "react";
import { Link } from "react-router-dom";

import "./Gallery.css";

const galleryImages = [
  {
    src: "/images/gallery/gallery1.webp",
    alt: "GreatVilla exterior",
  },
  {
    src: "/images/gallery/gallery2.webp",
    alt: "Luxury villa bedroom",
  },
  {
    src: "/images/gallery/gallery3.webp",
    alt: "GreatVilla pool",
  },
  {
    src: "/images/gallery/gallery4.webp",
    alt: "Villa dining area",
  },
  {
    src: "/images/gallery/gallery5.webp",
    alt: "Villa garden",
  },
  {
    src: "/images/gallery/gallery6.webp",
    alt: "Luxury bathroom",
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="gv-gallery-section">
      <div className="gv-gallery-heading">
        <div>
          <span className="gv-eyebrow">
            A glimpse of GreatVilla
          </span>

          <h2 className="gv-title">
            Moments worth
            <br />
            remembering
          </h2>
        </div>

        <Link
          to="/gallery"
          className="gv-gallery-view-link"
        >
          Explore Full Gallery
          <span>→</span>
        </Link>
      </div>

      <div className="gv-gallery-grid">
        {galleryImages.map((image, index) => (
          <Link
            to="/gallery"
            className={`gv-gallery-item item-${index + 1}`}
            key={image.src}
          >
            <img
              src={image.src}
              alt={image.alt}
            />

            <div className="gv-gallery-hover">
              <span>View Image</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gallery;