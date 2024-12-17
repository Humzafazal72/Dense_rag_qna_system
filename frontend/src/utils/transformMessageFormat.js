export const transformMessageFormat = (originalMessages) => {
  //if (originalMessages === "No conversation found.") return [];
  if (typeof originalMessages === "string") return [];
  if (originalMessages[0]?.role) return originalMessages;
  const transformedMessages = originalMessages.flatMap((message) => [
    {
      role: "user",
      content: message.user,
    },
    {
      role: "assistant",
      content: message.response,
    },
  ]);
  return transformedMessages;
};
