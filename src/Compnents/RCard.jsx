const RCard = ({ text, image, style, style2 }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className={style}>
          <button className="flex justify-center items-center shadow-2xl  cursor-pointer rounded-full">
            <img
              src={image}
              className={`w-[100%] text-light ${style2}`}
              alt=""
            />
          </button>
        </div>
        <h3 className="text-xl">{text}</h3>
      </div>
    </div>
  );
};

export default RCard;
