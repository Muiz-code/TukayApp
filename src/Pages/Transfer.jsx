import "aos/dist/aos.css";
import AOS from "aos";
import Transfers from "../Compnents/Transfers";
import arrow from "../assets/NavigateRight.svg";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const Transfer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex border h-[100vh] items-center gap-[80px] pe-5">
      <div className="flex flex-col justify-center gap-3 border transfer ps-[50px]">
        <Link to="/givers">
          <Transfers btnText="Givers" arrow={arrow} />
        </Link>
        <Transfers btnText="Receivers" arrow={arrow} />
      </div>
    </div>
  );
};

export default Transfer;
