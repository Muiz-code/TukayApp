import Card3 from "../Compnents/Card3";
import Transfers from "../Compnents/Transfers";
import arrow from "../assets/NavigateRight.svg";
import arrow2 from "../assets/NavigateRightAsh.svg";
import img1 from "../assets/Ellipse 4.png";
import img2 from "../assets/Ellipse 5.png";
import img3 from "../assets/Ellipse 6.png";
import img4 from "../assets/Ellipse 7.png";
import img5 from "../assets/Ellipse 8.png";

const Transfer = () => {
  return (
    <div className="flex border h-[100vh] items-center gap-[80px] pe-5">
      <div className="flex flex-col justify-center gap-3 border transfer ps-[50px]">
        <Transfers btnText="Givers" arrow={arrow} />
        <Transfers btnText="Receivers" arrow={arrow} />
      </div>
      {/* Givers List */}
      <div className=" w-[50%] rounded-2xl shadow-2xl px-3 py-4">
        <h1 className="text-[30px]">Givers</h1>
        <div className="flex flex-col gap-2">
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img1}
            iconStyle="w-[15%]"
            text1="Muiz Owolabi"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img2}
            iconStyle="w-[15%]"
            text1="Kamaldeen"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img3}
            iconStyle="w-[15%]"
            text1="Jacob"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img4}
            iconStyle="w-[15%]"
            text1="Awodokun Tomiwa"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img5}
            iconStyle="w-[15%]"
            text1="Maryann"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
        </div>
      </div>
      {/* Receiver's List */}
      <div className="hide w-[50%] rounded-2xl shadow-2xl px-3 py-4">
        <h1 className="text-[30px]">Receiver</h1>
        <div className="flex flex-col gap-2">
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img1}
            iconStyle="w-[15%]"
            text1="Muiz Owolabi"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img2}
            iconStyle="w-[15%]"
            text1="Kamaldeen"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img3}
            iconStyle="w-[15%]"
            text1="Jacob"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img4}
            iconStyle="w-[15%]"
            text1="Awodokun Tomiwa"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
          <Card3
            cardStyle="flex items-center w-100 gap-3 shadow-md p-2 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img5}
            iconStyle="w-[15%]"
            text1="Maryann"
            text1Style="text-[17px] mt-3 font-bold"
            text2="0123456788 - Opay"
            text2Style="text-[#959494] text-[13px]"
            icon2={arrow2}
          />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
