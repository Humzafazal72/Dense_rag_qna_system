const HistoryDisplay = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {data.map((item, index) => (
        <div className={`w-full font-proximaNova text-sm`} key={index}>
          <div className="text-[#898A96] uppercase mb-1">{item.title}</div>
          <div>
            {item.list.map((point, index) => (
              <div
                className="py-[10px] hover:bg-[#151631] cursor-pointer rounded-lg sm:pl-[6px]"
                key={index}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryDisplay;
