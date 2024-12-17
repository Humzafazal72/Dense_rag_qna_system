import { termsAndServices } from "@/utils/termsAndServices";
import Legal from "../Legal";

const TermsAndServices = () => {
  return (
    <main className="flex flex-col items-center pt-24 sm:pt-[calc(96px+50px)] font-everett">
      <Legal item={termsAndServices} isPrivacy={false} />
    </main>
  );
};

export default TermsAndServices;
