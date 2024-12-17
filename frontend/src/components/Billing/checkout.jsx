"use client";

import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { convertToSubcurrency } from "./stripe";
import CustomButton from "../CustomButton";

const CheckOutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-sucess?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
    }
    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid 
        border-current border-e-transparent align-[-0.125em] text-surface
        motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span
            className="!absolute !-m-px !w-px !overflow-hidden !whitespace-nowrap
            !border-0 !p-0 ![clip:rect(0,0,0,0)] "
          >
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} action="">
      {clientSecret && <PaymentElement />}

      <CustomButton
        text={`${!loading ? `Pay the $${amount.toFixed(2)}` : `Processing...`}`}
        className={"max-w-[300px] mt-8"}
      />
    </form>
  );
};

export default CheckOutPage;
