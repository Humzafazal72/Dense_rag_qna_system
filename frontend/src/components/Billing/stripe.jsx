"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutPage from "./checkout";
import styles from "./style.module.css";
import BackArrowSVG from "@/assets/Settings/backArrow";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export function convertToSubcurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}

const appearance = {
  theme: "night",
  variables: {
    colorText: "#ffffff",
    colorPrimary: "#ffffff",
  },
  rules: {
    ".Label": {
      color: "#ffffff",
    },
    ".Input": {
      backgroundColor: "#25262D",
      color: "#ffffff",
    },
  },
};

const Stripe = ({ setIsPlanSelected, amount }) => {
  return (
    <div className="p-8 border rounded-xl mt-8">
      <div
        onClick={() => setIsPlanSelected(false)}
        className={`text-sm flex items-center cursor-pointer ${styles.goBack}`}
      >
        <BackArrowSVG className="w-5 h-4" />
        <span>&nbsp;Edit Subscription Plan</span>
      </div>
      <div className="pt-8">
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "usd",
            appearance: appearance,
          }}
        >
          <CheckOutPage amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default Stripe;
