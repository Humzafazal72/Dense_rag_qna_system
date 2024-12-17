"use server";

import axios from "axios";
import { getSession } from "./actions";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const addDocument = async (formData) => {
  const document = formData.get("document");
  if (!document.name.endsWith(".pdf")) {
    return { error: "Only PDF files are allowed" };
  }

  try {
    const session = await getSession();
    const response = await fetch(`${backendUrl}/add_document`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      session.docs.push(document.name.slice(0, -4));
      await session.save();
      return { success: true, fileName: document.name.slice(0, -4) };
    }

    return { error: data.error || "Add Document API Failed" };
  } catch (error) {
    console.error("Add Document error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};

export const getChatHistory = async (documentName, username) => {
  try {
    const response = await fetch(`${backendUrl}/get_chat_history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        doc_name: documentName,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return {
      error: data.error || "Error at getChatHistory API",
    };
  } catch (error) {
    console.error("Get Chat History error:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
    };
  }
};

export const createMessage = async (prompt, docName, userName) => {
  try {
    const response = await axios.post(`${backendUrl}/get_response`, {
      query: prompt,
      doc_name: docName,
      username: userName,
    });
    return response.data;
  } catch (error) {
    console.error("Error in Getting response API ", error);
    throw error;
  }
};

export const deleteConversation = async () => {
  try {
    const session = await getSession();
    const res = await fetch(
      `${backendUrl}/api/delete-conversation?user_id=${session.userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": session.csrfToken,
          Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    if (res.ok) {
      return { success: data.message || "Conversation deleted successfully." };
    }
    return { error: data.error || "Error in deleting conversation." };
  } catch (error) {
    console.error("Error deleting conversation: ", error);
    return { error: "An unexpected error occured. Please try again later." };
  }
};

export const getPfp = async () => {
  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/get-profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": session.csrfToken,
        Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
      },
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Failed to get Profile Picture: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error getting pfp ", error);
    throw error;
  }
};
