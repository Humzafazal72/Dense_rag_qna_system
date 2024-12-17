import GetStarted from "./getStarted";
import Introducing from "./introducing";
import Redefining from "./redefining";

const Landing = () => {
  return (
    <>
      <div
        className="max-w-[1256px] pt-[calc(77px+60px)] sm:pt-[calc(11px+77px+112px)]"
        id="home"
      >
        <Introducing />
        <div className="flex landing:flex-row flex-col justify-between mt-5 gap-6">
          <Redefining />
          <GetStarted />
        </div>
      </div>
      <div className="mt-[60px] mb-[80px] sm:mb-0 sm:mt-28 relative aspect-[1257/618]">
        <video
          poster="/landing.png"
          controls
          preload="none"
          className="w-full h-full"
        >
          <source src="/katia.mp4" type="video/mp4" />
          {/* <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          /> */}
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Landing;
