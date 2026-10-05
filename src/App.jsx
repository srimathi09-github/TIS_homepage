import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";
import Navbar from "./components/navigation/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhyTIS from "./components/sections/WhyTIS";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import LifeAtTIS from "./components/sections/LifeAtTIS";
import Testimonials from "./components/sections/Testimonials";
import Admissions from "./components/sections/Admissions";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyTIS />
        <Academics />
        <Campus />
        <LifeAtTIS />
        <Testimonials />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}

export default App;