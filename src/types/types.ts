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

export type Diagraphs =
  | "kya"
  | "sha"
  | "cha"
  | "nya"
  | "hya"
  | "mya"
  | "rya"
  | "gya"
  | "ja"
  | "bya"
  | "pya";

export type Hatsuon = "n";

export type KanaGroupKey = GojuonBasic | GojuonDiacritics | Hatsuon | Diagraphs;

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

export type KanaTableSettingsKey = "gojuon" | "diacritics" | "diagraphs";

export type KanaSystemSettingsKey = "hiragana" | "katakana";

export type KanaSetting = {
  label: string;
  checked?: boolean;
};

export type QuizMode = "text-input" | "multiple-choice";

export type QuizModeOption = { id: QuizMode; label: string };

export type QuizModeOptions = {
  [key in QuizMode]: QuizModeOption;
};

export type KanaTableSetting = {
  key: KanaTableSettingsKey;
  value: boolean;
};

export type AppSettingValue = boolean | QuizMode | KanaTableSetting | string;

export type AppSetting = { key: string; value: AppSettingValue };

export type NestedAppSetting = {
  key: string;
  subKey: string;
  value: AppSettingValue;
};

export type AppSystemSettings = {
  hiragana: boolean;
  katakana: boolean;
};

export type AppTableSettings = {
  gojuon: boolean;
  diacritics: boolean;
  diagraphs: boolean;
};

export type AppSettings = {
  "quiz-mode": string;
  "kana-systems": AppSystemSettings;
  "kana-tables": AppTableSettings;
};
