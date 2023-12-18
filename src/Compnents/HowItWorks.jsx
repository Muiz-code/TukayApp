import Image1 from "../assets/Rectangle 1.png";
import Image2 from "../assets/Rectangle 2.png";
import Icon1 from "../assets/Register.svg";
import Icon2 from "../assets/KYC.svg";
import Icon5 from "../assets/Check.svg";
import Card2 from "./Card2";
import Icon3 from "../assets/Arrow.svg";

const HowItWorks = () => {
  return (
    <div className="p-10 mb-28 mt-15">
      <div className="flex flex-col items-center relative p-4 mb-28">
        <h1>How it works</h1>
        <div className="absolute bottom-0 left-[600px]">
          <img src={Image1} className="w-[100%]" alt="" />
        </div>
        <div className="absolute bottom-3 left-[550px] ">
          <img src={Image2} className="w-100" alt="" />
        </div>
      </div>
      <div className="col flex justify-center items-center mt-10 gap-2">
        <Card2
          cardStyle="flex flex-col justify-center items-center gap-3 w-[50%]"
          style="flex justify-center items-center bg-white p-3 rounded-lg"
          icons={Icon1}
          iconStyle="w-[100px]"
          textCont="flex flex-col items-center"
          text3Style="text-center"
          text1="Step1"
          text2="Register"
          text3="Enter the required details for registration to the app, either phone number or email."
        />
        <Card2
          cardStyle="flex flex-col justify-center items-center gap-3 w-[50%]"
          style="flex justify-center items-center rounded-lg"
          icons={Icon3}
          iconStyle="w-[100px]"
        />
        <Card2
          cardStyle="flex flex-col justify-center items-center gap-3 w-[50%]"
          style="flex justify-center items-center bg-[#004225] p-3 rounded-lg "
          icons={Icon2}
          iconStyle="w-[100px] "
          textCont="flex flex-col items-center"
          text3Style="text-center"
          text1="Step2"
          text2="KYC"
          text3="Verify your identity by completing the necessary KYC process and also upgrade your account."
        />
        <Card2
          cardStyle="flex flex-col justify-center items-center gap-3 w-[50%]"
          style="flex justify-center items-center rounded-lg"
          icons={Icon3}
          iconStyle="w-[100px]"
        />
        <Card2
          cardStyle="flex flex-col justify-center items-center gap-3 w-[50%]"
          style="flex justify-center items-center bg-white p-3 rounded-lg"
          icons={Icon5}
          iconStyle="w-[100px]"
          textCont="flex flex-col items-center"
          text3Style="text-center"
          text1="Step3"
          text2="Success"
          text3="Now you have completed all steps and can finally enjoy the experience the app has for you."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
