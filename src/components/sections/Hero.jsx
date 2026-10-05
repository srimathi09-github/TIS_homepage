import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" />

      <Container className="hero-container">
        <div className="hero-content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tula's International School · Dehradun
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Where learning
            <br />
            <em>becomes a journey.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            A co-educational boarding and day school where
            academic excellence, character, creativity and
            life beyond the classroom come together.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="#admissions">
              Explore Admissions
            </Button>

            <a href="#about" className="text-link">
              Discover TIS <span>↓</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Students learning together"
            />

            <div className="hero-image-overlay" />

            <div className="hero-image-content">
              <span>LEARN</span>
              <span>EXPLORE</span>
              <span>LEAD</span>
            </div>
          </div>

          <div className="hero-badge">
            <span>22</span>

            <small>
              Acre
              <br />
              campus
            </small>
          </div>
        </motion.div>
      </Container>

      <div className="hero-scroll">
        <div />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;