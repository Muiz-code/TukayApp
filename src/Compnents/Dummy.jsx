import Dashboard from "../assets/MoneyDash.svg";
import Settings from "../assets/Setting.svg";
import beggars from "../assets/Beggers.svg";
import history from "../assets/Transaction.svg";

export const pages = [
  {
    id: 1,
    icon: Dashboard,
    pages: "Home",
    pageLink: "/dashboard",
    style:
      "bg-[#004225] rounded-lg hover:scale-95 text-white flex items-center",
  },
  {
    id: 2,
    icon: history,
    pages: "Transfers",
    pageLink: "order",
    style:
      "hover:text-[#004225] rounded-lg hover:scale-[1.02] flex items-center",
  },
  {
    id: 3,
    icon: beggars,
    pages: "Transctions",
    pageLink: "customer",
    style:
      "hover:text-[#004225] rounded-lg hover:scale-[1.02]  flex items-center",
  },

  {
    id: 7,
    icon: Settings,
    pages: "Settings",
    style:
      "bg-[#004230] hover:text-[#447460] hover:scale-95 rounded-lg mt-[23rem]",
  },
];
