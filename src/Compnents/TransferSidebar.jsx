import Transfers from "./Transfers";
import arrow from "../assets/NavigateRight.svg";
import { Outlet, Link } from "react-router-dom";

const Transfer = () => {
  return (
    <div className="flex border h-[100vh] items-center gap-[80px] pe-5">
      <div className="flex flex-col justify-center gap-3 border transfer ps-[50px]">
        <Link to="/givers" className="text-decoration-none">
          <Transfers btnText="Givers" arrow={arrow} />
        </Link>
        <Link to="/receivers" className="text-decoration-none">
          <Transfers btnText="Receivers" arrow={arrow} />
        </Link>
      </div>
      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Transfer;
