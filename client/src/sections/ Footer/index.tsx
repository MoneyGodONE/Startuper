import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 box-border caret-transparent py-12 rounded-[15px]">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-10 md:max-w-screen-xl">
        <FooterLinks />
        <SocialLinks />
        <hr className="box-border caret-transparent h-0 border-gray-700 my-8 border-b-0 border-x-0 border-solid" />
        <FooterBottom />
      </div>
    </footer>
  );
};
