import FAQLeft from "./left";
import FAQRight from "./right";

const FAQs = () => {
  return (
    <>
      <div
        className="py-12 sm:py-28 flex flex-wrap justify-between gap-20"
        id="faqs"
      >
        <FAQLeft />
        <FAQRight />
      </div>
    </>
  );
};

export default FAQs;
