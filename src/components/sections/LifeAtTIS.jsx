import Reveal from "../animation/Reveal";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const activities = [
  {
    number: "01",
    title: "Sports",
    description:
      "From football and cricket to swimming, cycling, archery and horse riding, students have access to an extensive sporting programme.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Arts & Culture",
    description:
      "Music, art, drama and creative activities give students space to express themselves and discover new interests.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Students are encouraged to experiment, build and explore technology through practical and creative learning.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Clubs & Societies",
    description:
      "Clubs and societies provide opportunities for students to explore interests, develop confidence and work with others.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "Leadership",
    description:
      "Students develop responsibility, teamwork and leadership through school activities and community experiences.",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Boarding Life",
    description:
      "A residential environment designed to support students beyond classroom hours with care, structure and community.",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=900&q=85",
  },
];

function LifeAtTIS() {
  return (
    <section className="section life-section" id="life">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Life at TIS"
            title="More than a school. A community."
            description="At Tulas, learning continues beyond the classroom through sports, arts, clubs, leadership, technology and residential life."
          />
        </Reveal>

        <div className="activity-grid">
          {activities.map((activity, index) => (
            <Reveal
              key={activity.title}
              delay={index * 0.05}
            >
              <article className="activity-card">
                <img
                  src={activity.image}
                  alt={`${activity.title} at Tulas International School`}
                  loading="lazy"
                />

                <div className="activity-overlay" />

                <div className="activity-number">
                  {activity.number}
                </div>

                <div className="activity-content">
                  <h3>{activity.title}</h3>

                  <p>{activity.description}</p>
                </div>

                <span className="activity-arrow">↗</span>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default LifeAtTIS;