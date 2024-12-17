import { settings } from "@/utils/setings";
import NavOption from "./navOption";
// import DeleteConversation from "./DeleteConversation";

const Navbar = () => {
  return (
    <div className="w-[288px] hidden md:block">
      <h1 className="text-[40px] leading-[48px] font-semibold mb-8">
        Settings
      </h1>
      <div className="flex flex-col gap-4">
        {settings.map((item, index) => (
          <div key={index} className="">
            <div className="text-2xl font-medium mb-3">{item.title}</div>
            <div>
              {item.subHeadings.map((option, index) => (
                <NavOption
                  key={index}
                  href={option.href}
                  title={option.title}
                  isBlank={item.title === "About"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <DeleteConversation /> */}
    </div>
  );
};

export default Navbar;
