import { useState } from "react";
import { pages } from "./Dummy";
import Page from "../Compnents/Page";
import Logo from "../assets/signin logo.png";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  let eachPage;
  pages.forEach((item) => {
    eachPage = item;
  });

  console.log(eachPage);

  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  console.log(sideBarIsOpen);
  const toogleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };
  console.log(sideBarIsOpen);

  return (
    <div className="flex fixed-top">
      <div
        className={`sideBar relative ${
          sideBarIsOpen ? "w-[20%] " : "w-[10%] "
        }`}
      >
        <div className="flex items-center">
          <div
            className={`brandLogo`}
            onClick={() => {
              console.log("clicked");
            }}
          >
            <div className={`logo  ${sideBarIsOpen ? "w-[50%]" : "w-[70%]"}`}>
              <img src={Logo} alt="" />
            </div>
          </div>

          <div
            className={`rounded-full absolute right-[-40px] bottom-[350px] bg-[#447460] w-[110px] h-[110px] border-2 border-[#fff] flex items-center justify-center cursor-pointer ${
              sideBarIsOpen ? "" : "right-0"
            }`}
            onClick={toogleSideBar}
          >
            <img src={Logo} className="w-[50%]" alt="" />
          </div>
        </div>
        <ul className={`py-5 px-3`}>
          {pages.map((nav) => (
            <Page
              key={nav.id}
              {...nav}
              navigationPage={`${sideBarIsOpen ? `${nav.pages}` : ""}`}
              eachStyle={nav.style}
              pageLink={nav.pageLink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
