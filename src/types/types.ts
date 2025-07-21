export type HiraganaEntry = {
  hiragana: string;
  romanji: string;
};

export type KatakanaEntry = {
  katakana: string;
  romanji: string;
};

export type KanaEntry =
  // | HiraganaEntry
  // | KatakanaEntry
  { kana: string; romanji: string };

export type KanaSystem = "Hiragana" | "Katakana";

export type GojuonBasic =
  | "a"
  | "ka"
  | "sa"
  | "ta"
  | "na"
  | "ha"
  | "ma"
  | "ya"
  | "ra"
  | "wa";

export type GojuonDiacritics = "ga" | "za" | "da" | "ba" | "pa";

export type Hatsuon = "n";

export type KanaGroupKey = GojuonBasic | GojuonDiacritics | Hatsuon;

export type KanaMapBasic = {
  [key in GojuonBasic]: KanaEntry[];
};

export type KanaMapDiacritics = {
  [key in GojuonDiacritics]: KanaEntry[];
};

export type KanaMapHatsuon = {
  [key in Hatsuon]: KanaEntry[];
};

export type KanaMap = {
  [key in KanaGroupKey]?: KanaEntry[];
};

// quiz
export type KanaQuestion = {
  kana: string;
  answer: string;
  options: string[];
};

export type Score = {
  correct: number;
  wrong: number;
};

export type KanaTableSettingsKey = "gojuon" | "diacritics" | "diphtongs";

export type KanaSystemSettingsKey = "hiragana" | "katakana";

export type KanaSetting = {
  label: string;
  checked?: boolean;
};
