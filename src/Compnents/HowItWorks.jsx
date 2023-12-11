import Image1 from "../assets/Rectangle 1.png";
import Image2 from "../assets/Rectangle 2.png";

const HowItWorks = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col items-center relative p-4">
        <h1>How it works</h1>
        <div className="absolute bottom-0 left-[600px]">
          <img src={Image1} className="w-[100%]" alt="" />
        </div>
        <div className="absolute bottom-3 left-[550px] ">
          <img src={Image2} className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
