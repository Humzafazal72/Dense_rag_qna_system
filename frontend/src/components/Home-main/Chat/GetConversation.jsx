"use client";

import { getChatHistory } from "@/actions/authenticatedActions";
import LoadingRing from "@/components/LoadingRing";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Chat from ".";

const GetConversation = ({ docName, userName }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["chat History", docName],
    queryFn: () => getChatHistory(docName, userName),
    enabled: !!docName,
  });
  if (isLoading)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-44 h-44">
          <Image src="/RAG2.png" fill alt="katia logo image" />
        </div>
        <LoadingRing
          colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
        />
      </div>
    );
  if (error) {
    return (
      <div>
        {error && <div>Error fetching conversation {error.message}</div>}
      </div>
    );
  }
  return (
    <Chat
      data={data?.success ? data : { chat_history: "" }}
      docName={docName}
      userName={userName}
    />
  );
};

export default GetConversation;
