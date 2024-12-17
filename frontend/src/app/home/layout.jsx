import { getSession } from "@/actions/actions";
import BurgerMenu from "@/components/Home-main/burgerMenu";
import PfpWrapper from "@/components/Home-main/pfp";
import HomeSidebar from "@/components/Sidebar/homeSidebar";
import { Toaster } from "sonner";

const HomeLayout = async ({ children }) => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }
  return (
    <>
      <HomeSidebar />
      <Toaster richColors position="top-left " />
      <main className="flex text-white max-h-screen overflow-hidden relative ">
        <div
          className="flex-1 bg-black flex justify-center 
          relative duration-500 ease-custom-ease transition-all h-svh sm:h-screen"
        >
          <PfpWrapper username={session.user_name || "No username found"} />
          <BurgerMenu />
          {children}
        </div>
      </main>
    </>
  );
};

export default HomeLayout;
