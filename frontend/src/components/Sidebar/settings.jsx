"use client";
import { settings } from "@/utils/setings";
import NavOption from "../Settings/navOption";
import { useDispatch } from "react-redux";
import { closeSidebar } from "@/store/sidebar";

const SettingsSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 mt-24">
      {settings.map((item, index) => (
        <div key={index} className="">
          <div className="text-2xl font-medium mb-3">{item.title}</div>
          <div>
            {item.subHeadings.map((option, index) => (
              <NavOption
                href={option.href}
                title={option.title}
                key={index}
                isBlank={item.title === "About"}
                onClick={() => dispatch(closeSidebar())}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SettingsSidebar;
