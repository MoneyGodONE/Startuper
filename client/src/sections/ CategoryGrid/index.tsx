export const CategoryGrid = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto pb-10 md:max-w-screen-xl">
      <div className="box-border caret-transparent gap-x-10 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-10 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <div className="relative items-center bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent flex h-64 justify-center overflow-hidden rounded-lg">
          <div className="absolute items-center bg-[linear-gradient(to_right,rgb(126,34,206),rgb(216,180,254))] box-border caret-transparent flex justify-center inset-0">
            <p className="text-4xl font-semibold box-border caret-transparent leading-10">
              10 Cool &amp; Clever Finds
            </p>
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-15.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 -rotate-45 w-4"
            />
          </div>
        </div>
        <div className="relative items-center bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent flex h-64 justify-center overflow-hidden rounded-lg">
          <div className="absolute items-center bg-[linear-gradient(to_left,rgb(126,34,206),rgb(216,180,254))] box-border caret-transparent flex justify-center inset-0">
            <p className="text-4xl font-semibold box-border caret-transparent leading-10">
              Non Profit
            </p>
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-15.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 -rotate-45 w-4"
            />
          </div>
        </div>
        <div className="relative items-center bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent flex h-64 justify-center overflow-hidden rounded-lg">
          <div className="absolute items-center bg-[linear-gradient(to_left,rgb(216,180,254),rgb(126,34,206))] box-border caret-transparent flex justify-center inset-0">
            <p className="text-4xl font-semibold box-border caret-transparent leading-10">
              What We Do
            </p>
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-15.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 -rotate-45 w-4"
            />
          </div>
        </div>
        <div className="relative items-center bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent flex h-64 justify-center overflow-hidden rounded-lg">
          <div className="absolute items-center bg-[linear-gradient(to_right,rgb(216,180,254),rgb(126,34,206))] box-border caret-transparent flex justify-center inset-0">
            <p className="text-4xl font-semibold box-border caret-transparent leading-10">
              Memorial
            </p>
            <img
              src="https://c.animaapp.com/mh4w5bh5ddZvQu/assets/icon-15.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 -rotate-45 w-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
