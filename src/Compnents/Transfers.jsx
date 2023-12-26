const Transfers = ({ btnText, arrow }) => {
  return (
    <div>
      <button className="bg-[#004230] hover:bg-[#093b2e67] hover:scale-[1.02] w-[85%] text-[25px] px-3 py-4 flex items-center justify-between rounded-3xl text-light">
        {btnText}
        <img src={arrow} className="w-6" alt="" />
      </button>
    </div>
  );
};

export default Transfers;
