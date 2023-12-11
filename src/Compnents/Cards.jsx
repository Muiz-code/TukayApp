const Cards = ({ text1, text2, text3, style2 }) => {
  return (
    <div className={`flex flex-col ${style2}`}>
      <p className={`text-[25px] ${style2}`}>{text1}</p>
      <h1 className={`text-[30px] ${style2}`}>{text2}</h1>
      <p className={` ${style2}`}>{text3}</p>
    </div>
  );
};

export default Cards;
