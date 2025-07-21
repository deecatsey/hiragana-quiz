import { getInitialKanaGroups } from "../resources/kanaData";
import type {
  KanaEntry,
  KanaGroupKey,
  KanaMap,
  KanaQuestion,
} from "../types/types";

// Adjust for katakana etc
export const getAllCharacters = (
  selectedGroups: KanaGroupKey[],
  kanaMap: KanaMap
): KanaEntry[] => {
  const allCharacters: Array<KanaEntry> = [];
  selectedGroups.forEach((row) => {
    const entries = kanaMap[row as keyof typeof kanaMap];
    if (!entries) return;
    allCharacters.push(...entries);
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
  const kanaGroups =
    selectedGroups.length > 0 ? selectedGroups : getInitialKanaGroups();

  const allCharacters = getAllCharacters(kanaGroups, kanaMap);

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
