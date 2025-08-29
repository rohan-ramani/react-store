import React, { useState, memo, useMemo } from 'react';
import { useImagePreloader } from '../utils/imagePreloader';

const About = memo(() => {
  const [teamMembers] = useState([
    {
      name: "Eleanor Whitmore",
      title: "Founder & Chief Curator",
      bio: "With over 30 years in the antiques trade, Eleanor brings unparalleled expertise in European decorative arts.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c9b8d3?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "James Chen",
      title: "Asian Art Specialist",
      bio: "Former museum curator specializing in Chinese and Japanese antiquities with a PhD in Art History.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Isabella Rodriguez",
      title: "Jewelry Expert",
      bio: "Certified gemologist and vintage jewelry specialist with expertise in authentication and valuation.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    }
  ]);

  const imageUrls = useMemo(() => {
    const memberImages = teamMembers.map(member => member.image);
    const storyImage = "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=400&fit=crop";
    return [...memberImages, storyImage];
  }, [teamMembers]);

  useImagePreloader(imageUrls);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Vintage Treasures</h1>
          <p className="hero-subtitle">Preserving History, One Treasure at a Time</p>
        </div>
      </section>

      <section className="our-story">
        <div className="story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 1985 by Eleanor Whitmore, Vintage Treasures began as a small antique shop 
              in the heart of London's Portobello Road. What started as a passion for preserving 
              beautiful objects from the past has grown into one of the world's most respected 
              dealers in authenticated antiques and collectibles.
            </p>
            <p>
              Over the decades, we have built relationships with collectors, estate executors, 
              and auction houses worldwide, allowing us to offer our clients access to exceptional 
              pieces that rarely come to market. Each item in our collection is carefully vetted 
              for authenticity, condition, and provenance.
            </p>
            <p>
              Today, Vintage Treasures continues Eleanor's original mission: to connect discerning 
              collectors with authentic pieces that tell the story of human craftsmanship and 
              artistic achievement throughout history.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=400&fit=crop" 
              alt="Vintage Treasures showroom"
            />
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="mission-container">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-item">
              <h3>🔍 Authenticity First</h3>
              <p>Every piece undergoes rigorous authentication by our team of experts and trusted specialists.</p>
            </div>
            <div className="mission-item">
              <h3>📚 Education & Knowledge</h3>
              <p>We believe in sharing knowledge about the history and significance of each piece we offer.</p>
            </div>
            <div className="mission-item">
              <h3>🌍 Global Reach</h3>
              <p>Connecting collectors worldwide with exceptional pieces from diverse cultures and time periods.</p>
            </div>
            <div className="mission-item">
              <h3>🛡️ Preservation</h3>
              <p>Ensuring these historical treasures are preserved for future generations to appreciate and study.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="team-container">
          <h2>Meet Our Experts</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} className="member-photo" />
                <h3>{member.name}</h3>
                <h4>{member.title}</h4>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-process">
        <div className="process-container">
          <h2>Our Authentication Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Initial Assessment</h3>
              <p>Every piece is examined for style, materials, construction techniques, and maker's marks.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Expert Evaluation</h3>
              <p>Our specialists research provenance and compare against known examples and references.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Scientific Analysis</h3>
              <p>When necessary, we employ scientific testing methods to verify age and materials.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Documentation</h3>
              <p>Complete documentation is prepared, including condition reports and certificates of authenticity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-container">
          <h2>Visit Our Showroom</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>
                123 Portobello Road<br />
                Notting Hill, London W11 2DY<br />
                United Kingdom
              </p>
            </div>
            <div className="contact-item">
              <h3>🕒 Hours</h3>
              <p>
                Monday - Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: 12:00 PM - 5:00 PM<br />
                Appointments available outside hours
              </p>
            </div>
            <div className="contact-item">
              <h3>📞 Contact</h3>
              <p>
                Phone: +44 20 7229 8888<br />
                Email: info@vintagetreasures.com<br />
                WhatsApp: +44 7700 900123
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="cert-container">
          <h2>Professional Affiliations</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <h4>LAPADA</h4>
              <p>Association of Art & Antique Dealers</p>
            </div>
            <div className="cert-item">
              <h4>CINOA</h4>
              <p>International Confederation of Art & Antique Dealers</p>
            </div>
            <div className="cert-item">
              <h4>BADA</h4>
              <p>British Antique Dealers' Association</p>
            </div>
            <div className="cert-item">
              <h4>AAA</h4>
              <p>Antiquarian Appraisers Association</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;
