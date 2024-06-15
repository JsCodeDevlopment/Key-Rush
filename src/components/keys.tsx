import { getLetterStyle } from "@/helpers/get-letter-style";
import { useEffect } from "react";

interface IKeys {
  sequence: string[];
  userInput: string[];
  currentIndex: number;
  hasError: boolean;
}

export function Keys({ sequence, currentIndex, userInput, hasError }: IKeys) {
  useEffect(() => {
    if (currentIndex < sequence.length) {
      const currentElement = document.getElementById(`letter-${currentIndex}`);
      if (currentElement) {
        currentElement.classList.add("zoom-in-out");
        const removeAnimation = () => {
          currentElement.classList.remove("zoom-in-out");
          currentElement.removeEventListener("animationend", removeAnimation);
        };
        currentElement.addEventListener("animationend", removeAnimation);
      }
    }
  }, [currentIndex]);

  return (
    <article className="flex w-full gap-3 p-5 flex-wrap items-center justify-center">
      {sequence.map((key, index) => (
        <div
          key={index}
          id={`letter-${index}`}
          className={`flex items-center justify-center w-16 h-16 rounded-md ${getLetterStyle(
            index,
            currentIndex,
            userInput,
            sequence,
            hasError
          )}`}
        >
          <p className="text-5xl font-bold">{key.toUpperCase()}</p>
        </div>
      ))}
    </article>
  );
}
