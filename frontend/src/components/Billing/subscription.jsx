import SelectPlan from "./selectPlan";

const Subscription = ({
  setIsPlanSelected,
  subscriptionPlan,
  setSubscriptionPlan,
  setAmount,
}) => {
  return (
    <div className="p-8 border rounded-xl">
      <div className="mb-2 text-[#F5F3C2] text-base sm:text-lg">
        AI Katia Plus
      </div>
      <h3 className="text-2xl font-medium mb-8">
        Upgrade your Credits and explore the new features with AI Katia Premium
      </h3>
      <SelectPlan
        setIsPlanSelected={setIsPlanSelected}
        setSubscriptionPlan={setSubscriptionPlan}
        subscriptionPlan={subscriptionPlan}
        setAmount={setAmount}
      />
    </div>
  );
};

export default Subscription;
