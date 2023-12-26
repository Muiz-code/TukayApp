import logo1 from "../assets/Ellipse 10.png";
import wifi from "../assets/Wifi.svg";
import sim from "../assets/Sim.svg";
import eye1 from "../assets/EyeCancel.svg";
import naira from "../assets/Naira.svg";
import plus from "../assets/Plus.svg";
import send from "../assets/Send.svg";
import find from "../assets/Find2k.svg";
import beg from "../assets/Beg.svg";
import borrow from "../assets/Borrow.svg";
import img1 from "../assets/Ellipse 4.png";
import img2 from "../assets/Ellipse 5.png";
import img3 from "../assets/Ellipse 6.png";
import img4 from "../assets/Ellipse 7.png";
import img5 from "../assets/Ellipse 8.png";
import visa from "../assets/Visa.svg";

import RCard from "../Compnents/RCard";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard flex flex-col p-5 gap-4">
        <div className="flex items-center gap-3">
          <img src={logo1} className="w-[7%]" alt="" />
          <div>
            <h1 className="text-[30px] font-semibold">Hi, Muiz</h1>
            <p>Give or Beg for asap Tukay</p>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="atmCard p-4 flex flex-col justify-between items-center">
            <div className="flex justify-between items-center w-100">
              <img src={wifi} className="w-[30px]" alt="" />
              <img src={visa} className="w-[70px]" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-100">
              <div className="flex flex-col items-center lh-1 w-100">
                <p className="text-light text-[40px] w-100 flex justify-center">
                  **** **** **** ****
                </p>
                <div className="flex justify-between items-center w-100">
                  <div className="flex flex-col text-light lh-1">
                    <p>Card holder name</p>
                    <p className="font-bold">Mr. Muiz</p>
                  </div>
                  <div className="flex flex-col text-light lh-1">
                    <p>Expiry Date</p>
                    <p>03/30</p>
                  </div>
                  <div className="flex flex-col text-light lh-1">
                    <img src={sim} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-center flex-col balance shadow-2xl px-4 py-3">
              <div className="flex items-center border-bottom gap-2 ">
                Available Balance
                <img src={eye1} alt="" />
              </div>
              <div className="flex  items-center btn1 justify-between">
                <div className="flex gap-2 justify-center items-center text-[44px] font-bold">
                  <img src={naira} className="w-[35px]" alt="" />
                  2000
                </div>
                <button className="flex items-center justify-center p-2 h-50 border-2 border-[#447460] rounded-2xl text-dark gap-2">
                  <img src={plus} alt="" />
                  Add Money
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center balance shadow-2xl px-5 ">
              <div className="flex flex-col items-center gap-2">
                <button className="p-2 shadow-2xl cursor-pointer rounded-2xl">
                  <img src={send} className="w-[100%]" alt="" />
                </button>
                <p>Send</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="p-2 shadow-2xl rounded-2xl">
                  <img src={beg} className="w-[100%]" alt="" />
                </button>
                <p>Request</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="p-2 shadow-2xl rounded-2xl">
                  <img src={borrow} className="w-[100%]" alt="" />
                </button>
                <p>Borrow</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="p-2 shadow-2xl rounded-lg">
                  <img src={find} className="w-[100%]" alt="" />
                </button>
                <p>Find Giver</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border gap-3 justify-between balance1 shadow-2xl px-5 py-3">
          <div>
            <h1>My Givers</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <RCard
                image={plus}
                style=" bg-[#004255] w-[120px] h-[120px] rounded-full flex justify-center "
                text="Add"
              />
            </div>
            <RCard image={img1} text="Tommy" />
            <RCard image={img2} text="Maryann" />
            <RCard image={img3} text="Jacob" />
            <RCard image={img4} text="Olumo" />
            <RCard image={img5} text="Kamal" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
