export const SearchBar = () => {
  return (
    <div className="relative bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex basis-auto flex-col grow-0 max-w-[458px] pl-4 pr-2 py-2 rounded-[100px] md:basis-[0%] md:grow">
      <div className="box-border caret-transparent flex py-1">
        <input
          type="text"
          placeholder="Search for campaigns"
          value=""
          className="text-sm bg-transparent box-border caret-transparent flex leading-[21px] outline-transparent outline-offset-2 outline outline-2 w-full p-0 font-epilogue"
        />
        <div className="items-center bg-violet-500 box-border caret-transparent flex h-full justify-center w-[62px] mb-1 py-2 rounded-[20px]">
          <img
            src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/search.67660937.svg"
            alt="search"
            className="box-border caret-transparent h-[15px] max-w-full object-contain w-[15px]"
          />
        </div>
      </div>
    </div>
  );
};
