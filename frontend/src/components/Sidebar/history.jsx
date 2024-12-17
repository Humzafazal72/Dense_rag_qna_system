import HistoryDisplay from "./historyDisplay";
import Searchbar from "./historySearchbar";
import { sidebarDummyData } from "@/utils/sidebar";

const History = () => {
  return (
    <div className="mt-5 w-full flex-1 overflow-y-auto relative">
      <Searchbar />
      <HistoryDisplay data={sidebarDummyData} />
    </div>
  );
};

export default History;
