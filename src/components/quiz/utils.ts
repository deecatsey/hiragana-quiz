import type {
  KanaEntry,
  KanaGroupKey,
  KanaMap,
  KanaQuestion,
} from "../../types/types";

// Adjust for katakana etc
export const getAllCharacters = (
  selectedGroups: KanaGroupKey[],
  kanaMap: KanaMap
): KanaEntry[] => {
  const allCharacters: Array<{ kana: KanaGroupKey; romanji: string }> = [];
  selectedGroups.forEach((row) => {
    // console.log(
    //   "kanaData[row as keyof typeof kanaData]",
    //   kanaMap[row as keyof typeof kanaMap],
    //   "row as keyof typeof kanaMap",
    //   row as keyof typeof kanaMap
    // );

    // TODO: Fix type
    if (kanaMap[row as keyof typeof kanaMap]) {
      allCharacters.push(...kanaMap[row as keyof typeof kanaMap]);
    }
  });
  return allCharacters;
};

export const generateOptions = (
  correctAnswer: string,
  allCharacters: KanaEntry[]
) => {
  const incorrectOptions: string[] = [];

  if (allCharacters.length < 6)
    return allCharacters.map((char) => char.romanji);

  while (incorrectOptions.length < 5) {
    const randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];

    if (
      randomChar.romanji !== correctAnswer &&
      !incorrectOptions.includes(randomChar.romanji)
    ) {
      incorrectOptions.push(randomChar.romanji);
    }
  }

  const options = [correctAnswer, ...incorrectOptions];

  // fisher yates shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
};

export const generateQuestion = (
  selectedGroups: KanaGroupKey[],
  kanaMap: KanaMap
): KanaQuestion => {
  const allCharacters = getAllCharacters(selectedGroups, kanaMap);

  if (allCharacters.length === 0) {
    throw console.error("Couldn't find any characters.");
  }

  const randomChar =
    allCharacters[Math.floor(Math.random() * allCharacters.length)];

  const options = generateOptions(randomChar.romanji, allCharacters);

  return {
    kana: randomChar.kana,
    answer: randomChar.romanji,
    options,
  };
};
