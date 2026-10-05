import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

import Container from "../common/Container";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <Container>
        <div className="footer-top">
          <div>
            <a
              href="https://tis.edu.in/"
              className="brand footer-brand"
              target="_blank"
              rel="noreferrer"
            >
              <span className="brand-mark">T</span>

              <span className="brand-text">
                <strong>TULAS</strong>
                <small>INTERNATIONAL SCHOOL</small>
              </span>
            </a>

            <p>
              Inspiring minds, building character and preparing
              students for a changing world.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Explore</span>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#academics">Academics</a>
              <a href="#campus">Campus</a>
              <a href="#life">Life at TIS</a>
              <a href="#admissions">Admissions</a>
            </div>

            <div>
              <span>Connect</span>

              <a
                href="https://tis.edu.in/contact-us/"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>

              <a
                href="https://tis.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                Visit TIS
              </a>

              <a
                href="https://admission.tis.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                Enquire
              </a>

              <a
                href="https://admission.tis.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Tulas International School</span>

          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FiYoutube />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;