interface IKeys {
  sequence: string[];
  currentIndex: number;
  hasError: boolean;
}

export function Keys({ sequence, currentIndex, hasError }: IKeys) {
  return (
    <article className="flex w-full gap-3 p-5 flex-wrap items-center justify-center">
      {sequence.map((key, index) => {
        let itemClassName =
          "flex items-center justify-center w-16 h-16 rounded-md";
        let textClassName = "text-5xl font-bold";

        if (index < currentIndex) {
          itemClassName += " bg-[#111111] border border-[#ff3434]";
          textClassName += " text-[#ff3434]";
        } else if (index === currentIndex && hasError) {
          itemClassName += " bg-[#ff3434] border border-white";
          textClassName += " text-[#111111]";
        } else {
          itemClassName += " bg-zinc-800 border border-[#ff3434]";
          textClassName += " text-white";
        }

        return (
          <div key={index} className={itemClassName}>
            <p className={textClassName}>{key.toUpperCase()}</p>
          </div>
        );
      })}
    </article>
  );
}
