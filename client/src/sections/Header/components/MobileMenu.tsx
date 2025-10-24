export const MobileMenu = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
      <div className="items-center box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] w-10 rounded-[10px] md:min-h-0 md:min-w-0">
        <img
          src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/BlockFundLogo.8e4907f5.png"
          alt="user"
          className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] object-contain w-full md:min-h-0 md:min-w-0"
        />
      </div>
      <img
        src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/menu.3df43b88.svg"
        alt="menu"
        className="box-border caret-transparent h-[34px] max-w-full min-h-[auto] min-w-[auto] object-contain w-[34px] md:min-h-0 md:min-w-0"
      />
      <div className="absolute bg-zinc-800 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent translate-y-[-1000px] z-10 py-4 top-[60px] inset-x-0 md:transform-none">
        <ul className="box-border caret-transparent list-none mb-4 pl-0">
          <li className="bg-zinc-700 box-border caret-transparent flex p-4">
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-6.svg"
              alt="Icon"
              className="box-border caret-transparent h-6 object-contain w-6"
            />
            <p className="text-sm font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] ml-5 font-epilogue md:min-h-0 md:min-w-0">
              dashboard
            </p>
          </li>
          <li className="box-border caret-transparent flex p-4">
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-7.svg"
              alt="Icon"
              className="text-gray-500 box-border caret-transparent h-6 object-contain w-6"
            />
            <p className="text-gray-500 text-sm font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] ml-5 font-epilogue md:min-h-0 md:min-w-0">
              campaign
            </p>
          </li>
          <li className="box-border caret-transparent flex p-4">
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-8.svg"
              alt="Icon"
              className="text-gray-500 box-border caret-transparent h-6 object-contain w-6"
            />
            <p className="text-gray-500 text-sm font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] ml-5 font-epilogue md:min-h-0 md:min-w-0">
              payment
            </p>
          </li>
          <li className="box-border caret-transparent flex p-4">
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-9.svg"
              alt="Icon"
              className="text-gray-500 box-border caret-transparent h-6 object-contain w-6"
            />
            <p className="text-gray-500 text-sm font-semibold box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] ml-5 font-epilogue md:min-h-0 md:min-w-0">
              profile
            </p>
          </li>
        </ul>
        <div className="items-center box-border caret-transparent gap-x-4 flex justify-center gap-y-4">
          <button
            type="button"
            className="font-semibold bg-violet-500 caret-transparent block leading-[26px] min-h-[52px] min-w-[auto] text-center px-4 py-0 rounded-[10px] font-epilogue md:min-w-0"
          >
            Log In / Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
