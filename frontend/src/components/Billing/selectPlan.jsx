import { plans } from "@/utils/billing";
import CustomButton from "../CustomButton";
import SubscriptionCard from "./subscriptionCard";

const SelectPlan = ({
  setIsPlanSelected,
  setSubscriptionPlan,
  subscriptionPlan,
  setAmount,
}) => {
  const handleSubmit = () => {
    setAmount(subscriptionPlan === "basic" ? 5 : 9.9);
    setIsPlanSelected(true);
  };
  return (
    <>
      <div className="mb-[10px] mt-[30px] text-[#F5F3C2] text-base sm:text-lg">
        Select a Plan
      </div>
      <div className="w-full flex flex-wrap gap-6">
        <SubscriptionCard
          title={"basic"}
          desc={"with ads"}
          price={"0.00"}
          onClick={() => setSubscriptionPlan("basic")}
          subscriptionPlan={subscriptionPlan}
        />
        <SubscriptionCard
          title={"premium"}
          desc={"with no-ads"}
          price={"9.90"}
          isPremium={true}
          onClick={() => setSubscriptionPlan("premium")}
          subscriptionPlan={subscriptionPlan}
        />
      </div>
      <div className="mt-10 text-base sm:text-lg text-[#F5F3C2]">
        {plans[subscriptionPlan].desc}
      </div>
      <div className="mt-[10px]">
        {plans[subscriptionPlan].points.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#9773FF] rounded-full" />
            <div className="text-sm sm:text-base">{item}</div>
          </div>
        ))}
      </div>
      <CustomButton
        onClick={handleSubmit}
        text={`${subscriptionPlan === "basic" ? "Go Basic" : "Go Premium"}`}
        className={"mt-10 max-w-[300px]"}
      />
    </>
  );
};

export default SelectPlan;
