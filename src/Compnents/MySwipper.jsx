import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card2 from "./Card2";
import image1 from "../assets/Ellipse 2.svg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carouselContainer mb-[100px]">
      <h1 className="mb-10 text-[black]">Reviews from satisfied users</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="flex justify-center item-center p-5 w-[65%] text-[black] h-[40vh]"
      >
        <Carousel.Item className="w-100 h-100 px-5">
          <Card2
            cardStyle="flex items-center gap-5"
            icons={image1}
            iconStyle="w-[500px]"
            textCont="flex flex-col items-start"
            text1="Floyd Miles"
            text1Style="text-3xl font-medium"
            text2="Actor"
            text2Style="text-xl font-light"
            text3="Collect asap 2k has never been this easy but thanks to TuKay for making it easy for me to send exact 2k without touching my budget."
            text3Style="text-start font-light"
          />
        </Carousel.Item>
        <Carousel.Item className="w-100 h-100 px-5">
          <Card2
            cardStyle="flex items-center gap-5"
            icons={image1}
            iconStyle="w-[500px]"
            textCont="flex flex-col items-start"
            text1="Owolabi Muiz"
            text1Style="text-3xl font-medium"
            text2="Developer"
            text2Style="text-xl font-light "
            text3="If you are still concerned about your savings and investment life, then I present to you TuKay. It is very reliable with the best savings and investment plans for you."
            text3Style="text-start font-light"
          />
        </Carousel.Item>
        <Carousel.Item className="w-100 h-100 px-5">
          <Card2
            cardStyle="flex items-center gap-5"
            icons={image1}
            iconStyle="w-[500px]"
            textCont="flex flex-col items-start"
            text1="Oluwanifemi"
            text1Style="text-3xl font-medium"
            text2="Ui/Ux designer"
            text2Style="text-xl font-light "
            text3="If you are still concerned about your savings and investment life, then I present to you PayFast. It is very reliable with the best savings and investment plans for you."
            text3Style="text-start font-light"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
