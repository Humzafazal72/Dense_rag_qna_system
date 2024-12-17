import FreeTrialCard from "./freetrial";
import IncludeFeaturesCard from "./includeFeatures";
import PricingHeading from "./top";

const Pricing = () => {
  return (
    <>
      <div className="py-12 sm:py-28" id="pricing">
        <PricingHeading />
        <div className="mt-20 flex lg:flex-row flex-col flex-wrap gap-5">
          <FreeTrialCard />
          <IncludeFeaturesCard />
        </div>
      </div>
    </>
  );
};

export default Pricing;
