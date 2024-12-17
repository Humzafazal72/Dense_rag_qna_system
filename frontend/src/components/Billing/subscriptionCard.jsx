const SubscriptionCard = ({
  title,
  desc,
  isPremium = false,
  price,
  onClick,
  subscriptionPlan,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        title === subscriptionPlan && "border-2 border-[#F5F3C2]"
      } p-5 min-w-[250px] flex-1 bg-[#25262D] rounded-[10px]
        flex flex-col gap-11 justify-between cursor-pointer`}
    >
      <div>
        <div className="font-semibold text-xl sm:text-3xl capitalize">
          {title}
        </div>
        <div className="text-xs sm:text-sm sm:mt-1">{desc}</div>
      </div>
      <div>
        {isPremium && (
          <div className="text-xs sm:text-sm leading-[12.1px] line-through">
            $18.50
          </div>
        )}
        <div className="flex items-center gap-[10px]">
          <div className="text-lg sm:text-xl">${price}</div>
          {isPremium && <div>Monthly</div>}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
