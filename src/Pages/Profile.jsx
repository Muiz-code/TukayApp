import Card3 from "../Compnents/Card3";
import img1 from "../assets/Ellipse 4.png";
import img2 from "../assets/ProfileBlack.svg";
import img3 from "../assets/NavigateRightAsh.svg";
import img4 from "../assets/Atm.svg";
import img5 from "../assets/Settings.svg";
import img6 from "../assets/Cancel.svg";
import img7 from "../assets/Logout.svg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex border h-[100vh] items-center pe-5 gap-10">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center border transfer1">
          <Card3
            cardStyle="flex flex-col items-center justify-center w-100"
            cardStyle1="flex flex-col items-center justify-center w-100"
            icons={img1}
            iconStyle="w-[15%]"
            style="flex flex-col items-center lh-1"
            text1="Muiz Owolabi"
            text1Style="text-[30px]"
            text2="Account number - 01234567"
            text2Style="font-light"
          />
        </div>

        <div className="flex justify-around items-center balance2 shadow-2xl px-3 py-2 text-light">
          <div className="flex flex-col lh-lg items-center">
            <h1>N2000</h1>
            <p className="font-light">Account Balance</p>
          </div>
          <div className="flex h-[80px] w-[0.2%] bg-white"></div>
          <div className="flex flex-col lh-lg items-center">
            <h1>30</h1>
            <p className="font-light">Requested</p>
          </div>
          <div className="flex h-[80px] w-[0.2%] bg-white"></div>
          <div className="flex flex-col lh-lg items-center">
            <h1>130</h1>
            <p className="font-light">Sent Out</p>
          </div>
          <div className="flex h-[80px] w-[0.2%] bg-white"></div>
          <div className="flex flex-col lh-lg items-center">
            <h1>10</h1>
            <p className="font-light">Declined</p>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center border p-5 shadow-md rounded-2xl gap-10">
        <div className="flex w-[100%] flex-col gap-3">
          <Card3
            cardStyle="hover:bg-[#004230] hover:text-[white] flex items-center w-100 gap-3 shadow-md px-4 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-4"
            icons={img2}
            iconStyle="w-[7%]"
            text1="Account Details"
            text1Style="text-[17px] mt-3 font-bold"
            icon2={img3}
          />
          <Card3
            cardStyle="hover:bg-[#004230] hover:text-[white] flex items-center w-100 gap-3 shadow-md px-4 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img4}
            iconStyle="w-[8%]"
            text1="Top up account"
            text1Style="text-[17px] mt-3 font-bold"
            icon2={img3}
          />
          <Card3
            cardStyle="hover:bg-[#004230] hover:text-[white] flex items-center w-100 gap-3 shadow-md px-4 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img5}
            iconStyle="w-[8%]"
            text1="User settings"
            text1Style="text-[17px] mt-3 font-bold"
            icon2={img3}
          />
          <Card3
            cardStyle="hover:bg-[red] flex items-center w-100 gap-3 shadow-md px-4 rounded-2xl"
            cardStyle1="flex items-center w-100 gap-3"
            icons={img6}
            iconStyle="w-[8%]"
            text1="Deactivate account"
            text1Style="text-[17px] mt-3 font-bold"
            icon2={img3}
          />
        </div>
        <div>
          <Link to="/signin" className="text-decoration-none">
            <button className="text-red-500 flex items-center gap-2 text-[20px] hover:scale-[1.02]">
              <img src={img7} alt="" />
              Log out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
