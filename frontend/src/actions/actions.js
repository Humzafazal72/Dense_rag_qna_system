"use server";
import cookie from "cookie";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { defaultSession, oauth_google, sessionOptions } from "./lib";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

export const signup = async (prevData, formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/auth/signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      session.isLoggedIn = true;
      session.docs = data.docs;
      session.user_name = data.username;
      session.user_email = data.email;
      await session.save();
      throw redirect(`home`);
    }
    return {
      error: data.message || "Registration failed. Please try again.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Signup error:", error);
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const login = async (prevState, formData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/auth/signin/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      session.isLoggedIn = true;
      session.docs = data.docs;
      session.user_name = data.username;
      session.user_email = data.email;
      await session.save();
      throw redirect(`home`);
    }
    return {
      error: data.message || "Login failed. Please try again.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Login error:", error);
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const logout = async () => {
  try {
    const res = await fetch(`${backendUrl}/auth/signout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok && data.success) {
      const session = await getSession();
      session.destroy();
      throw redirect(`/`);
    }
    return {
      error: data.message || "Logout failed. Please try again.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Logout error:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
    };
  }
};
