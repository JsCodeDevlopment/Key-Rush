export const getLetterStyle = (
  index: number,
  currentIndex: number,
  userInput: string[],
  sequence: string[],
  hasError: boolean
) => {
  if (index === currentIndex && hasError) {
    return "bg-[#ff3434] border border-white text-zinc-950";
  }
  if (userInput.length === 0) {
    return "bg-zinc-800 border border-[#ff3434] text-white";
  }
  if (index < userInput.length) {
    return userInput[index] === sequence[index]
      ? "bg-[#111111] border border-[#ff3434] text-[#ff3434]"
      : "bg-[#ff3434] border border-white text-[#111111]";
  }
  return index === currentIndex
    ? "bg-zinc-800 border border-[#ff3434] text-white zoom-in-out"
    : "bg-zinc-800 border border-[#ff3434] text-white";
};
