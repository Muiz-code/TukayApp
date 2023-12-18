const FooterItems = ({ Text1, Text2, Text3, Text4, Text5, style }) => {
  return (
    <div className="FooterItems, text-white">
      <ul className="list gap-3">
        <h1 className="text-xl font-medium mb-3">{Text1}</h1>
        <li className={style}> {Text2}</li>
        <li className={style}> {Text3}</li>
        <li className={style}> {Text4}</li>
        <li className={style}> {Text5}</li>
      </ul>
    </div>
  );
};

export default FooterItems;
