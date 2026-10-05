import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Reveal from "../animation/Reveal";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/schoolData";

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Voices of TIS"
            title="Hear from our community."
          />
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 0.1}>
              <article className="testimonial">
                <span className="quote-mark">“</span>

                <blockquote>{testimonial.quote}</blockquote>

                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="testimonial-controls">
          <button aria-label="Previous testimonial">
            <FiArrowLeft />
          </button>

          <button aria-label="Next testimonial">
            <FiArrowRight />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;