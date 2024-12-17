import { testimonials } from "@/utils/testimonials";
import TestimonialCard from "./card";

const Testimonials = () => {
  return (
    <>
      <div className="py-12 sm:py-28" id="testimonials">
        <div className="font-polySans text-3xl sm:text-[56px] sm:leading-[67.2px] text-white">
          Real people, real result
        </div>
        <div className="mt-20 flex lg:flex-row flex-col flex-wrap gap-5">
          <div className="gap-x-5 gap-y-6 grid grid-cols-1 lg:grid-cols-2">
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
