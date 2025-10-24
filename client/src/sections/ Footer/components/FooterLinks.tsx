import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap justify-between -mx-4">
      <FooterColumn
        title="Explore"
        links={[{ href: "/WhatWeDo", text: "What We Do" }]}
      />
      <FooterColumn
        title="About"
        links={[
          { href: "/About", text: "About" },
          { href: "/TrustAndSafety", text: "Trust & Safety" },
          { href: "/HelpAndSupport", text: "Help & Support" },
          { href: "/contact", text: "Contact" },
        ]}
      />
      <FooterColumn
        title="Entrepreneurs"
        links={[
          { href: "/HowItWorks", text: "How It Works" },
          {
            href: "/BlockFundVsKickstarter",
            text: "Block Fund vs. Kickstarter",
          },
          { href: "/EducationCenter", text: "Education Cernter" },
        ]}
      />
      <FooterColumn
        isNewsletterVariant={true}
        newsletterIconSrc="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-16.svg"
        newsletterIconAlt="Icon"
        newsletterTitle="Find it first on Block Fund"
        newsletterLinkHref="/whatwedo"
        newsletterLinkText="Discover new and clever products in the Block Fund newsletter"
      />
    </div>
  );
};
