import { featureCards } from "@/utils/featureCards";
import FeatureCard from "./card";

const FeatureGrid = () => {
  return (
    <>
      <div className="mt-10 sm:mt-20 gap-x-5 gap-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default FeatureGrid;
