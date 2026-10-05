import Reveal from "../animation/Reveal";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { academicPrograms } from "../../data/schoolData";

function Academics() {
  return (
    <section className="section academics-section" id="academics">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Academics"
            title="Learning designed for tomorrow."
            description="A thoughtful academic journey that grows with every stage of a student's development."
          />
        </Reveal>

        <div className="academic-list">
          {academicPrograms.map((program, index) => (
            <Reveal
              key={program.number}
              delay={index * 0.1}
              direction="left"
            >
              <article className="academic-item">
                <span>{program.number}</span>

                <div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>

                <span className="academic-arrow">↗</span>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Academics;