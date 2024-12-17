"use client";
import { logout } from "@/actions/actions";
import { useState } from "react";
import { useFormState } from "react-dom";
import LoadingRing from "../LoadingRing";

export function Logout({ className }) {
  const [state, formAction] = useFormState(logout, undefined);
  const [isLoading, setLoading] = useState(false);
  return (
    <form action={formAction}>
      <button
        onClick={() => setLoading(true)}
        className={`bg-orange active:scale-95 flex items-center justify-center transition duration-100 py-3 px-8 rounded-lg text-black ${className}`}
      >
        {isLoading ? (
          <LoadingRing
            width={"19.6px"}
            height={"19.6px"}
            colors={["#000000"]}
          />
        ) : (
          <>Logout</>
        )}
      </button>
    </form>
  );
}
