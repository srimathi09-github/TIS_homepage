import Reveal from "../animation/Reveal";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function Campus() {
  return (
    <section className="section campus-section" id="campus">
      <Container>
        <div className="campus-layout">
          <Reveal direction="right">
            <div className="campus-visual">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                alt="Modern school campus building"
              />

              <div className="campus-overlay" />

              <div className="campus-label">
                <span>THE TIS CAMPUS</span>
                <strong>Explore. Connect. Grow.</strong>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <SectionHeading
              eyebrow="Campus"
              title="Spaces that inspire possibility."
              description="Our campus is designed to give students room to think, collaborate, create and experience learning beyond traditional classrooms."
            />

            <div className="campus-points">
              <div>
                <strong>01</strong>
                <span>Purposeful learning spaces</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Creative and collaborative environments</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Spaces for sport, arts and exploration</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Campus;