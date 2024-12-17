"use client";
import { useState } from "react";
import Heading from "../Settings/heading";
import Stripe from "./stripe";
import Subscription from "./subscription";

const BillingManagement = () => {
  const [isPlanSelected, setIsPlanSelected] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState("basic");
  const [amount, setAmount] = useState(5);
  return (
    <div>
      <Heading text={"Billing Management"} className={"mb-4"} />
      {isPlanSelected ? (
        <Stripe setIsPlanSelected={setIsPlanSelected} amount={amount} />
      ) : (
        <Subscription
          setIsPlanSelected={setIsPlanSelected}
          subscriptionPlan={subscriptionPlan}
          setSubscriptionPlan={setSubscriptionPlan}
          setAmount={setAmount}
        />
      )}
    </div>
  );
};

export default BillingManagement;
