import { CampaignHeader } from "@/sections/CampaignsSection/components/CampaignHeader";
import { CampaignCarousel } from "@/sections/CampaignsSection/components/CampaignCarousel";
import { CarouselDots } from "@/sections/CampaignsSection/components/CarouselDots";

export const CampaignsSection = () => {
  return (
    <div className="box-border caret-transparent">
      <CampaignHeader />
      <CampaignCarousel />
      <CarouselDots />
    </div>
  );
};
