import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <Container>
        <motion.div
          className="admissions-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Admissions</span>

          <h2>
            Ready to begin
            <br />
            <em>the journey?</em>
          </h2>

          <p>
            Discover a learning environment designed to help
            every student find their voice, build confidence
            and shape their future.
          </p>

          <Button
            href="https://admission.tis.edu.in/"
            target="_blank"
            rel="noreferrer"
          >
            Start Your Application
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default Admissions;