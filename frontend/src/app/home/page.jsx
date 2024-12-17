import ContentFeatures from "@/components/Home-main/Chat/contentFeatures";
import styles from "./style.module.css";
import UploadDocumentPrompt from "@/components/Home-main/uploadDocumentPrompt";
import { getSession } from "@/actions/actions";

const Homepage = async () => {
  const session = await getSession();
  return (
    <div className="w-full h-full flex flex-col justify-end pb-8">
      <div
        className={`${styles.showScrollbar} overflow-y-scroll px-5 h-[calc(100%-110px)] sevenHundo:h-[calc(100%-83px)] flex items-center justify-center`}
      >
        <div className="max-w-[768px] w-full h-full">
          <ContentFeatures />
        </div>
      </div>

      <UploadDocumentPrompt username={session.user_name} />
    </div>
  );
};

export default Homepage;
