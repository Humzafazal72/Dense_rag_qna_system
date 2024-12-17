import { getSession } from "@/actions/actions";
// import AuthRight from "@/components/Auth/right";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function AuthLayout({ children }) {
  const session = await getSession();
  if (session.isLoggedIn) {
    redirect("/home");
  }

  return (
    <>
      <Toaster richColors position="bottom-center" />
      <div className="flex justify-center bg-[#0B0B0E] min-h-screen px-6 lg:px-0">
        <div className="w-full flex">
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center relative">
            {children}
          </div>
          {/* <AuthRight /> */}
        </div>
      </div>
    </>
  );
}
