import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section1 from "../Compnents/Section1";
import Services from "../Compnents/Services";
import NavBar from "../Compnents/NavBar";
import HowItWorks from "../Compnents/HowItWorks";
import MySwipper from "../Compnents/MySwipper";
import Footer from "../Compnents/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-[#D9D9D9]">
      <NavBar />

      <div className="animation" data-aos="fade-up">
        <Section1 />
      </div>
      <div className="animation" data-aos="fade-up">
        <Services />
      </div>
      <div className="animation" data-aos="fade-up">
        <HowItWorks />
      </div>
      <div className="animation" data-aos="fade-up">
        <MySwipper />
      </div>
      <div className="animation" data-aos="zoom-in">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
