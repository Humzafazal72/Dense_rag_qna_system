import { aboutUsCards } from "@/utils/aboutUsCards";
import AboutCard from "./card";

const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8">
        {aboutUsCards.map((item, index) => (
          <AboutCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Grid;
