import Reveal from "../animation/Reveal";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { stats } from "../../data/schoolData";

function About() {
  return (
    <section className="section about-section" id="about">
      <Container>
        <div className="about-grid">
          <Reveal>
            <SectionHeading
              eyebrow="About TIS"
              title="Education that goes beyond the classroom."
              description="At Tulas International School, we believe education is about developing the whole person. Our learning environment encourages students to think independently, discover their strengths and become responsible global citizens."
            />
          </Reveal>

          <Reveal delay={0.15} direction="left">
            <div className="about-card">
              <span className="about-card-number">01</span>
              <p>
                We create meaningful learning experiences that
                connect knowledge with curiosity, creativity and
                real-world thinking.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="stat">
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default About;