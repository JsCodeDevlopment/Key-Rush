export const getLetterStyle = (
  index: number,
  currentIndex: number,
  userInput: string[],
  sequence: string[]
) => {
  if (userInput[index]) {
    return userInput[index] === sequence[index]
      ? "bg-[#111111] border border-[#ff3434] text-[#ff3434]"
      : "bg-[#ff3434] border border-white text-[#111111]";
  }
  return index === currentIndex
    ? "bg-zinc-800s border border-[#ff3434] text-white zoom-in-out"
    : "bg-zinc-800s border border-[#ff3434] text-white";
};
