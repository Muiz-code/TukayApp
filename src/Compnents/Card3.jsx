const Card3 = ({
  icons,
  icon2,
  cardStyle1,
  cardStyle,
  style,
  iconStyle,
  text1,
  text1Style,
  text2,
  text2Style,
  text3,
  text3Style,
}) => {
  return (
    <div className={`hover:scale-[1.02] ${cardStyle} cursor-pointer`}>
      <div className={cardStyle1}>
        <img src={icons} className={` fa-beat ${iconStyle}`} alt="" />
        <div className={style}>
          <h1 className={text1Style}>{text1} </h1>
          <p className={text2Style}>{text2}</p>
          <p className={text3Style}>{text3}</p>
        </div>
      </div>
      <img src={icon2} alt="" />
    </div>
  );
};

export default Card3;
