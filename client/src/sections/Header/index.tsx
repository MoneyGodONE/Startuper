import { SearchBar } from "@/sections/Header/components/SearchBar";
import { DesktopAuthButton } from "@/sections/Header/components/DesktopAuthButton";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const Header = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 flex flex-col-reverse justify-between gap-y-6 mb-2.5 md:flex-row">
      <div className="box-border caret-transparent"></div>
      <SearchBar />
      <DesktopAuthButton />
      <MobileMenu />
    </div>
  );
};
