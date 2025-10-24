import { SidebarLogo } from "@/sections/Sidebar/components/SidebarLogo";
import { SidebarNav } from "@/sections/Sidebar/components/SidebarNav";

export const Sidebar = () => {
  return (
    <div className="relative box-border caret-transparent hidden min-h-0 min-w-0 mr-10 md:flex md:min-h-[auto] md:min-w-[auto]">
      <div className="sticky items-center box-border caret-transparent flex flex-col h-[930px] justify-between min-h-0 min-w-0 top-5 md:min-h-[auto] md:min-w-[auto]">
        <SidebarLogo />
        <SidebarNav />
      </div>
    </div>
  );
};
