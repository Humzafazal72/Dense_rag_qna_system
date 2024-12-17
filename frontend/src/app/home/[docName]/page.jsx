import { getSession } from "@/actions/actions";
import GetConversation from "@/components/Home-main/Chat/GetConversation";

const ChatPage = async ({ params }) => {
  const { docName } = params;
  const session = await getSession();
  return <GetConversation docName={docName} userName={session.user_name} />;
};

export default ChatPage;
