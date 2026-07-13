import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '75vh',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("/images/villa_hero.webp") no-repeat center center / cover',
        padding: '0 20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: '650px' }}>
            <span style={{ color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 'bold' }}>Premium Villa Experience</span>
            <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.2', margin: '15px 0 25px 0' }}>
              Your Private Paradise Awaits
            </h1>
            <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '35px' }}>
              Immerse yourself in unrivaled elegance. Experience private pools, personal wellness spas, and breathtaking views at Greatvilla.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/rooms" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                Explore Rooms
              </Link>
              <Link to="/about" className="btn btn-outline" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid Section */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: 'var(--primary)', fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: 'bold', textTransform: 'uppercase' }}>Exclusive Amenities</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Indulge in Premium Luxury</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { title: 'Infinity Heated Pool', desc: 'Overlook raw nature in our temperature-controlled pool lines.' },
            { title: 'Custom Wellness Spa', desc: 'Soothe your body with massages, custom scrubs and professional aromatherapies.' },
            { title: 'Fine Dining Restaurant', desc: 'Taste local ingredients curated by premium chefs matching global palates.' },
            { title: 'Personal Butler Service', desc: 'Access 24/7 dedicated service to make your retreat smooth and memorable.' }
          ].map((item, idx) => (
            <div key={idx} className="glass hover-scale" style={{ padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.3rem', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <div className="glass" style={{ padding: '60px 40px', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--text-light)', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 30px auto' }}>
            "Our stay at Greatvilla was absolutely stellar. The room service, ambient heated pools, and the quiet spa rooms were beyond anything we had ever experienced."
          </p>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>— Sarah & David Mitchell</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
