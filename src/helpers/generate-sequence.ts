export const generateSequence = () => {
  const letters = "abcdefghijklmnopqrstuvwxyzç";
  let sequence = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    sequence.push(letters[randomIndex]);
  }
  return sequence;
};
