export const CrowdfundingInfo = () => {
  return (
    <div className="items-center bg-zinc-900 box-border caret-transparent flex flex-col justify-center my-20 px-1 md:flex-row">
      <div className="box-border caret-transparent flex justify-center w-full md:w-3/12">
        <img
          src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/game.c89637f3.png"
          alt="Left Image"
          className="box-border caret-transparent h-[400px] max-w-full w-64"
        />
      </div>
      <div className="box-border caret-transparent w-full pl-0 md:w-6/12 md:pl-8">
        <div className="box-border caret-transparent text-center md:text-left">
          <a
            href="#"
            className="text-3xl font-semibold box-border caret-transparent leading-9 text-center mb-8 md:text-left"
          >
            Back the Project, take the ride
          </a>
        </div>
        <p className="box-border caret-transparent text-justify pt-8 px-2">
          Block Fund is your destination for clever innovation in tech, design
          and more often with special perks and pricing for early adopters. Back
          a campaign, share your ideas and feedback with the project team - and
          join the rewards of bringing new products to life.
        </p>
        <div className="box-border caret-transparent text-center mt-4 md:text-left hover:text-gray-500">
          <a
            href="/WhatWeDo"
            className="box-border caret-transparent text-center md:text-left"
          >
            LEARN ABOUT CROWDFUNDING
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent flex justify-center w-full mt-6 md:justify-end md:w-3/12 md:mt-0">
        <img
          src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/cycle.0d0ecbfb.png"
          alt="Right Image"
          className="box-border caret-transparent h-[400px] max-w-full w-64"
        />
      </div>
    </div>
  );
};
