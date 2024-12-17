const FeatureCard = ({ item }) => {
  return (
    <>
      <div className="p-6 rounded-xl bg-[#101010]">
        {item.svgComp}
        <div className="mt-[30px] text-xl leading-[30px] text-[#898A96]">
          {item.desc}
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
