import Image from "../assets/Frame 9.png";
import Cards from "./Cards";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col items-center servicesContainer container py-10">
        <p className="text-[35px]">Our Services</p>
        <h1 className="font-[600] text-center">
          Give and Receive asap 2k Bills Faster With <br />{" "}
          <span className="text-white">Tu</span>
          <span className="text-[#004225]">Kay</span>
        </h1>
      </div>
      <div className="col flex container items-center py-10">
        <div className="col">
          <img src={Image} alt="" />
        </div>
        <div className="col lh-md ">
          <div className="col flex gap-4 text-light">
            <div className="border px-6 py-2 rounded-lg bg-[#004225] w-[50%]">
              <Cards
                text1="1."
                text2="Give money"
                text3="You can send money from your in-app wallet to another account with any financial institution across the globe."
              />
            </div>
            <div className="border-1 border-[#004225] px-6 py-2 rounded-lg w-[50%]">
              <Cards
                text1="2."
                text2="Beg 4 Tukay"
                text3="The Beg 4 Tukay service allows you to be able to receive money into your wallet from any other financial institution across the globe."
                style2="text-[#004225]"
              />
            </div>
          </div>
          <div className="col flex gap-4 mt-4 text-light">
            <div className="border-1 border-[#004225] px-6 py-1 rounded-lg w-[50%]">
              <Cards
                text1="3."
                text2="Send money"
                text3="You can send money from your in-app wallet to another account with any financial institution across the globe."
                style2="text-[#004225]"
              />
            </div>
            <div className="border-1 border-[#004225] px-6 py-1 rounded-lg w-[50%]">
              <Cards
                text1="4."
                text2="Save & Invest"
                text3="There are many awesome saving and investment plans available for you on our app that can help you manage your money with excellent ROI."
                style2="text-[#004225]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
