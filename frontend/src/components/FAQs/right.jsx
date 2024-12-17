import { contactFAQs } from "@/utils/contactFAQs";
import FAQCard from "./card";
const FAQRight = () => {
  return (
    <>
      <div className="flex flex-col gap-4 flex-1 sm:min-w-[500px]">
        {contactFAQs.map((item, index) => (
          <FAQCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default FAQRight;
