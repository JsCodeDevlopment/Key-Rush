export function CountDown() {
  return (
    <div className="flex items-center justify-center w-full gap-6 count-down-main">
      <div className="timer">
        <div className="pr-1.5 pl-2 relative bg-indigo-50 w-max before:contents-[''] before:absolute before:h-full before:w-0.5 before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-white before:z-10 ">
          <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-indigo-600 tracking-[15.36px] max-w-[44px] text-center relative z-20">57</h3>
        </div>
        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">
          seconds
        </p>
      </div>
    </div>
  );
}
