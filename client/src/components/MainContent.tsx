import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { CampaignsSection } from "@/sections/CampaignsSection";
import { InfoSection } from "@/sections/InfoSection";
import { CategoryGrid } from "@/sections/CategoryGrid";
import { CrowdfundingInfo } from "@/sections/CrowdfundingInfo";
import { CategoryInterest } from "@/sections/CategoryInterest";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow max-w-[1780px] w-full mx-auto pr-0 md:w-auto md:pr-5">
      <Header />
      <HeroSection />
      <CampaignsSection />
      <InfoSection />
      <CategoryGrid />
      <CrowdfundingInfo />
      <CategoryInterest />
      <Footer />
    </div>
  );
};
