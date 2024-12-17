import { Toaster } from "sonner";
import GetConversation from "./Chat/GetConversation";
import PfpWrapper from "./pfp";
import BurgerMenu from "./burgerMenu";
import HomeSidebar from "../Sidebar/homeSidebar";

const Home = () => {
  return (
    <>
      <HomeSidebar />
      <Toaster richColors position="top-left " />
      <main className="flex text-white max-h-screen overflow-hidden relative ">
        <div
          className="flex-1 bg-black flex justify-center 
          relative duration-500 ease-custom-ease transition-all h-svh sm:h-screen"
        >
          <PfpWrapper />
          <BurgerMenu />
        </div>
      </main>
    </>
  );
};

export default Home;
