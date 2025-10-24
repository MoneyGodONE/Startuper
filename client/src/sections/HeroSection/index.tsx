import { HeroImage } from "@/sections/HeroSection/components/HeroImage";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroActions } from "@/sections/HeroSection/components/HeroActions";

export const HeroSection = () => {
  return (
    <div className="relative box-border caret-transparent h-[352px] w-full md:h-[560px]">
      <HeroImage />
      <HeroContent />
      <HeroActions />
    </div>
  );
};
