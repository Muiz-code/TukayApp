import Icon1 from "../assets/Twitter.svg";
import Icon2 from "../assets/FaceBook.svg";
import Icon3 from "../assets/Instagram.svg";
import FooterItems from "./FooterItems";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="subcribeContainer col flex relative items-center justify-center">
        <div className="subscribeItems col absolute text-light p-3 flex items-center gap-4">
          <div className="w-100">
            <p>Update Subscription</p>
            <h1>
              Subscribe to get latest <br /> updates from us.
            </h1>
          </div>
          <form
            action=""
            className="bg-white px-2 py-1 w-[42%] rounded-2xl flex h-25"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="inputContainer"
            />
            <button className="bg-[#041F13] p-3 rounded-2xl">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="bg-[#041F13] h-[70vh] flex flex-col font justify-between items-center p-5">
        <div className=" flex items-center font justify-between p-5 mt-10 w-100">
          <div className="">
            <div className="flex flex-col text-white footerText">
              <img src={Logo} alt="" />
              <p>Giving and Receiving has never been made faster</p>
              <p className="mt-10">Email: Info@TuKay.com</p>
              <div className="flex gap-2 items-center footerText1">
                <p>Follow on our social platforms:</p>

                <div className="flex gap-3">
                  <a href="" className="flex items-center">
                    <img
                      src={Icon2}
                      className="bg-white p-2 mb-3 rounded-lg"
                      alt=""
                    />
                  </a>
                  <a href="" className="flex items-center">
                    <img
                      src={Icon1}
                      className="bg-white p-2 mb-3 rounded-lg"
                      alt=""
                    />
                  </a>
                  <a href="" className="flex items-center">
                    <img
                      src={Icon3}
                      className="bg-white p-2 mb-3 rounded-lg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-20">
            <div>
              <FooterItems
                Text1="Customer"
                Text2="Home"
                Text3="About Us"
                Text4="Our Services"
                Text5="Terms and Conditions"
                style="font-light text-sm"
              />
            </div>
            <div>
              <FooterItems
                Text1="Quick Link"
                Text2="Why Choose Us"
                Text3="Our Staffs"
                Text4="News and Articles"
                Text5="Subscribe"
                style="font-light text-sm"
              />
            </div>
            <div>
              <FooterItems
                Text1="Official info"
                Text2="Address: N0 30B, Ilorin, Kwara. Nigeria"
                Text3="Email: Info@TuKay.com"
                Text4="Phone: +234 8142325629"
                style="font-light text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-75 text-white border-t-[1px]">
          <p className="font-light text-sm">2023 all rights reserved</p>
          <p className="font-light text-sm">Website by @ThatMuiz</p>
          <div className="flex justify-between w-[17%]">
            <p className="font-light text-sm">Privacy Policy</p>
            <p className="font-light text-sm">Cookies</p>
          </div>
          <a href="" className="back2Top text-sm font-medium">
            Back To Top
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
