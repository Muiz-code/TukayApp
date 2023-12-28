import Dashboard from "../assets/MoneyDash.svg";
import profile from "../assets/Profile.svg";
import beggars from "../assets/Beggers.svg";
import history from "../assets/Transaction.svg";

export const pages = [
  {
    id: 1,
    icon: Dashboard,
    pages: "Home",
    pageLink: "/dashboard",
    style:
      "hover:text-[#004225] rounded-lg hover:scale-[1.02] flex items-center",
  },
  {
    id: 2,
    icon: history,
    pages: "Transfers",
    pageLink: "/transfer",
    style:
      "hover:text-[#004225] rounded-lg hover:scale-[1.02] flex items-center",
  },
  {
    id: 3,
    icon: beggars,
    pages: "Transctions",
    pageLink: "/transactions",
    style:
      "hover:text-[#004225] rounded-lg hover:scale-[1.02]  flex items-center",
  },

  {
    id: 7,
    icon: profile,
    pages: "Profile",
    pageLink: "/profile",
    style:
      "bg-[#004230] hover:bg-[#093b2e67] hover:scale-95 rounded-lg mt-[23rem]",
  },
];
