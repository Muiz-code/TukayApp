import Button from "./Button";
import Image from "../assets/Frame4.png";
import Image1 from "../assets/Frame5.png";
import Image2 from "../assets/Ellipse6.png";
import Image3 from "../assets/Ellipse8.png";
import Image4 from "../assets/Line 4.png";
import Image5 from "../assets/Line 5.png";
import Image6 from "../assets/Line 6.png";

const Section1 = () => {
  return (
    <div className="col h-[89vh] container sectionContainer flex items-center justify-center">
      <div className="col text1">
        <p className="font-bold text-sm">
          Tukay Transactions has never been made faster
        </p>
        <div className="text2 col">
          <h1>Transact Now At The Speed Of Light</h1>
        </div>
        <Button
          text="Try for free"
          styles="text-white px-8 py-3 rounded-lg bg-[#004225] mt-3"
        />
        <h1 className="mt-3">200k+ Users</h1>
        <p>
          Happily enjoying the services of our <br /> app and transacting at the
          speed of <br /> light.
        </p>
      </div>
      <div className="col flex items-center justify-center imageContainer relative">
        <div className="absolute bottom-[150px] right-[610px]">
          <img src={Image4} className="w-100" alt="" />
        </div>
        <div className="absolute bottom-[25px] right-[600px]">
          <img src={Image6} className="w-100" alt="" />
        </div>
        <div className="absolute bottom-[100px] right-[600px]">
          <img src={Image5} className="w-100" alt="" />
        </div>
        <div className="absolute right-0 w-[70%]">
          <img src={Image1} alt="" />
        </div>
        <div className="absolute bottom-[-250px]  left-[120px] w-[70%]">
          <img src={Image} alt="" />
        </div>
        <div className="absolute bg-white p-1 flex gap-2 rounded-2xl bottom-[-18rem] left-[10rem]">
          <img src={Image2} alt="" />
          <div className="text-black text3">
            <p className="text-[12px] font-bold">Oluwatomiwa Daniel</p>
            <p className="text-[10px] font-bold text-[#7E7E7E]">
              Nice and fast app,Nothing beats it.
            </p>
          </div>
        </div>
        <div className="absolute bg-white p-1 flex gap-2 rounded-2xl top-[18.5rem] right-[5rem]">
          <img src={Image3} alt="" />
          <div className="text-black text3">
            <p className="text-[12px] font-bold">Owolabi Nifemi</p>
            <p className="text-[10px] font-bold text-[#7E7E7E]">
              Nice and fast app,Nothing beats it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
