import Reveal from "../animation/Reveal";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const reasons = [
  {
    number: "01",
    title: "Curiosity First",
    text: "We encourage students to ask questions, explore ideas and develop a lifelong love for learning.",
  },
  {
    number: "02",
    title: "Future Ready",
    text: "Students develop the skills, confidence and adaptability needed to navigate the future.",
  },
  {
    number: "03",
    title: "Whole Child",
    text: "Academic growth goes hand in hand with creativity, wellbeing, character and leadership.",
  },
];

function WhyTIS() {
  return (
    <section className="section why-section" id="why-tis">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why TIS"
            title="A place to discover who you can become."
            description="Our approach brings together academic excellence, personal development and a strong sense of community."
          />
        </Reveal>

        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <Reveal key={reason.number} delay={index * 0.1}>
              <article className="reason-card">
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyTIS;