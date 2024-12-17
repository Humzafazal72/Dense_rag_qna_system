const AboutCard = ({ item }) => {
  return (
    <>
      <div className="bg-[#18181C] rounded-xl p-6 sm:max-w-[392px]">
        <div className="text-white font-polySans">{item.title}</div>
        <div className=" text-white text-sm leading-[22.4px] mt-4">
          {item.desc}
        </div>
      </div>
    </>
  );
};

export default AboutCard;
