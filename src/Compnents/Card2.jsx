const Card2 = ({
  icons,
  cardStyle,
  style,
  iconStyle,
  textCont,
  text1,
  text1Style,
  text2,
  text2Style,
  text3,
  text3Style,
}) => {
  return (
    <div className={`${cardStyle}`}>
      <div className={style}>
        <img src={icons} className={` fa-beat ${iconStyle}`} alt="" />
      </div>
      <div className={textCont}>
        <p className={text1Style}>{text1}</p>
        <h1 className={text2Style}>{text2} </h1>
        <p className={text3Style}>{text3}</p>
      </div>
    </div>
  );
};

export default Card2;
