// import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Page = ({ pageClick, icon, navigationPage, eachStyle, pageLink }) => {
  return (
    <Link to={pageLink} className="text-decoration-none text-light">
      <li
        className={`${eachStyle} flex items-center justify-between gap-[8px] cursor-pointer px-3`}
        onClick={pageClick}
      >
        <div className={`flex items-center justify-center w-[50px] h-[50px]`}>
          <img src={icon} alt="" className={`w-[70%]`} />
        </div>

        <p
          className={`${eachStyle} text-lg font-normal mt-3
          ${eachStyle ? "" : "text-light"}`}
        >
          {navigationPage}
        </p>
      </li>
    </Link>
  );
};

export default Page;
