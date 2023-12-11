import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Section1 from "./Compnents/Section1";
import Services from "./Compnents/Services";
import NavBar from "./Compnents/NavBar";
import HowItWorks from "./Compnents/HowItWorks";

const App = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <NavBar />
      <Section1 />
      <Services />
      <HowItWorks />
    </div>
  );
};

export default App;
