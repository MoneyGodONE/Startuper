export type CampaignCardProps = {
  imageUrl: string;
  imageAlt: string;
  tagIconUrl: string;
  tagText: string;
  title: string;
  description: string;
  raisedAmount: string;
  targetAmount: string;
  daysLeft: string;
  userImageUrl: string;
  creatorAddress: string;
  containerVariant: string;
  imageVariant: string;
  contentVariant: string;
  tagContainerVariant: string;
  tagIconVariant: string;
  tagTextVariant: string;
  textContainerVariant: string;
  titleVariant: string;
  descriptionVariant: string;
  statsContainerVariant: string;
  statItemVariant: string;
  statValueVariant: string;
  statLabelVariant: string;
  creatorContainerVariant: string;
  creatorImageContainerVariant: string;
  creatorImageVariant: string;
  creatorTextVariant: string;
  creatorAddressVariant: string;
};

export const CampaignCard = (props: CampaignCardProps) => {
  return (
    <div className={`max-w-none md:max-w-60 ${props.containerVariant}`}>
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className={` ${props.imageVariant}`}
      />
      <div className={` ${props.contentVariant}`}>
        <div className={` ${props.tagContainerVariant}`}>
          <img
            src={props.tagIconUrl}
            alt="tag"
            className={` ${props.tagIconVariant}`}
          />
          <p className={` ${props.tagTextVariant}`}>{props.tagText}</p>
        </div>
        <div className={` ${props.textContainerVariant}`}>
          <h3 className={` ${props.titleVariant}`}>{props.title}</h3>
          <p className={` ${props.descriptionVariant}`}>{props.description}</p>
        </div>
        <div className={` ${props.statsContainerVariant}`}>
          <div className={` ${props.statItemVariant}`}>
            <h4 className={` ${props.statValueVariant}`}>
              {props.raisedAmount}
            </h4>
            <p className={` ${props.statLabelVariant}`}>
              Raised of {props.targetAmount}
            </p>
          </div>
          <div className={` ${props.statItemVariant}`}>
            <h4 className={` ${props.statValueVariant}`}>{props.daysLeft}</h4>
            <p className={` ${props.statLabelVariant}`}>Days Left</p>
          </div>
        </div>
        <div className={` ${props.creatorContainerVariant}`}>
          <div className={` ${props.creatorImageContainerVariant}`}>
            <img
              src={props.userImageUrl}
              alt="user"
              className={` ${props.creatorImageVariant}`}
            />
          </div>
          <p className={` ${props.creatorTextVariant}`}>
            by{" "}
            <span className={` ${props.creatorAddressVariant}`}>
              {props.creatorAddress}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
