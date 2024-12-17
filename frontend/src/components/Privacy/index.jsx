import { privacyPolicy } from "@/utils/privacyPolicy";
import Legal from "../Legal";

const PrivacyPolicy = () => {
  return (
    <main className="flex flex-col items-center pt-24 sm:pt-[calc(96px+50px)] font-everett">
      <Legal item={privacyPolicy} isPrivacy={true} />
    </main>
  );
};

export default PrivacyPolicy;
