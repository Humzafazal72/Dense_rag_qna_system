import Link from "next/link";
import styles from "./style.module.css";
const Legal = ({ item, isPrivacy }) => {
  return (
    <>
      <div className="text-white px-6 w-full max-w-[1178px] flex flex-col items-center mb-24">
        <h1 className="text-3xl sm:text-6xl font-bold">{item.heading}</h1>
        <div className="text-sm sm:text-base px-8 py-2 sm:px-9 sm:py-3 rounded-xl mt-6 bg-[#F5F3C2] text-black">
          Effective date: January 1, 2024
        </div>
        {isPrivacy ? (
          <div className="mt-12 sm:mt-24 sm:text-lg text-center sm:text-start">
            At <span className="font-bold">AIKatia.com</span>, we are committed
            to protecting your privacy and ensuring that your personal
            information is handled in a safe and responsible manner. This
            Privacy Policy outlines the types of information we collect, how we
            use it, and the measures we take to ensure its protection.
          </div>
        ) : (
          <div className="mt-12 sm:mt-24 sm:text-lg text-center sm:text-start">
            Welcome to <span className="font-bold">AIKatia.com</span>, a
            platform offering an AI chatbot assistant service. By using our
            services, you agree to be bound by these Terms of Service
            (&quot;Terms&quot;). Please read them carefully. If you do not agree
            to these Terms, you may not use our services. These Terms apply to
            all visitors, users, and others who access or use AIKatia.
          </div>
        )}
        <div className="h-[2px] w-full dark:bg-footerLineDark bg-footerLineLight my-12" />
        <div className={`flex flex-col gap-10`}>
          {item.points?.map((point, index) => (
            <div key={index} className="w-full flex">
              <div className="font-bold text-lg sm:text-3xl">
                {index + 1}.&nbsp;
              </div>
              <div className="sm:hidden">&nbsp;</div>
              <div>
                <h2 className="font-bold text-lg sm:text-3xl mb-4">
                  {point.heading}
                </h2>
                {point.desc && (
                  <>
                    <p
                      className={`text-sm sm:text-base mb-[10px] ${styles.href}`}
                      dangerouslySetInnerHTML={{ __html: point.desc }}
                    ></p>
                    {point.heading === "Data Security" && (
                      <p className="text-sm sm:text-base mb-[10px]">
                        All data is stored in compliance with the&nbsp;
                        <span className="font-bold text-white">
                          General Data Protection Regulation (GDPR)
                        </span>
                        &nbsp;and other relevant data protection laws. We never
                        sell or share your data with third parties except as
                        required for service provision (e.g., payment
                        processors) or as required by law.
                      </p>
                    )}
                  </>
                )}
                {point.extra?.map((extra, index) => (
                  <div key={index}>{extra}</div>
                ))}
                <div className="flex flex-col gap-2 sm:block">
                  {point.bullets?.map((bullet, index) => (
                    <div key={index} className="flex">
                      <div className="text-sm sm:text-base -mt-[1px]">
                        &bull;&nbsp;&nbsp;
                      </div>
                      <div className="sm:flex flex-wrap text-sm sm:text-base">
                        {bullet.heading && (
                          <div className="font-bold text-base sm:text-lg">
                            {bullet.heading}&nbsp;
                          </div>
                        )}
                        <div className="text-sm sm:text-base">
                          {bullet.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {point.heading === "Your Rights" && (
                  <p>
                    If you wish to exercise any of these rights, please contact
                    us at&nbsp;
                    <a
                      target="_blank"
                      className="text-[#1884f7]"
                      href="admin@AIKatia.com"
                    >
                      admin@AIKatia.com
                    </a>
                    .
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Legal;
