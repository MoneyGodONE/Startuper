export type FooterColumnProps = {
  title: string;
  links?: Array<{
    href: string;
    text: string;
  }>;
  isNewsletterVariant?: boolean;
  newsletterIconSrc?: string;
  newsletterIconAlt?: string;
  newsletterTitle?: string;
  newsletterLinkHref?: string;
  newsletterLinkText?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  if (props.isNewsletterVariant) {
    return (
      <div className="box-border caret-transparent w-full px-4 md:w-3/12">
        <div className="box-border caret-transparent flex justify-center">
          <div className="box-border caret-transparent mx-auto">
            <a
              href="mailto://blockfund0@gmail.com"
              className="text-violet-500 text-5xl box-border caret-transparent block leading-[72px] mb-4"
            >
              <img
                src={props.newsletterIconSrc}
                alt={props.newsletterIconAlt}
                className="box-border caret-transparent h-12 w-12"
              />
            </a>
          </div>
        </div>
        <h4 className="font-bold box-border caret-transparent text-center mb-2">
          {props.newsletterTitle}
        </h4>
        <a
          href={props.newsletterLinkHref}
          className="box-border caret-transparent block text-center mb-6"
        >
          {props.newsletterLinkText}
        </a>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent w-full px-4 md:w-3/12 mb-8 md:mb-0">
      <h3 className="font-bold box-border caret-transparent mb-4">
        {props.title}
      </h3>
      <ul className="box-border caret-transparent list-none pl-0">
        {props.links?.map((link, index) => (
          <li key={index} className="box-border caret-transparent mb-2">
            <a href={link.href} className="box-border caret-transparent">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
