import { useEffect, useState } from "react";
import "./hero.css";

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, index) => ({
        id: index,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 5 + 3,
        animationDelay: Math.random() * 2,
      }));
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient" />
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="hero-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.animationDelay}s`,
            }}
          />
        ))}
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I&apos;m <span style={{ color: "#ec4899" }}>Kartikey </span>
        </h1>
        <p className="hero-subtitle">
          I&apos;m a Full Stack Developer specializing in building exceptional
          digital experiences. Currently, I&apos;m focused on building
          accessible, human-centered products.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button hero-button-primary">
            View Projects
          </a>
          <a href="#contact" className="hero-button hero-button-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
