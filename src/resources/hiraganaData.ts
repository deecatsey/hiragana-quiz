// kana data organized by rows

import type {
  KanaMap,
  KanaSetting,
  KanaTableSettingsKey,
} from "../types/types";

export const GojuonHiragana: KanaMap = {
  a: [
    { kana: "あ", romanji: "a" },
    { kana: "い", romanji: "i" },
    { kana: "う", romanji: "u" },
    { kana: "え", romanji: "e" },
    { kana: "お", romanji: "o" },
  ],
  ka: [
    { kana: "か", romanji: "ka" },
    { kana: "き", romanji: "ki" },
    { kana: "く", romanji: "ku" },
    { kana: "け", romanji: "ke" },
    { kana: "こ", romanji: "ko" },
  ],
  sa: [
    { kana: "さ", romanji: "sa" },
    { kana: "し", romanji: "shi" },
    { kana: "す", romanji: "su" },
    { kana: "せ", romanji: "se" },
    { kana: "そ", romanji: "so" },
  ],
  ta: [
    { kana: "た", romanji: "ta" },
    { kana: "ち", romanji: "chi" },
    { kana: "つ", romanji: "tsu" },
    { kana: "て", romanji: "te" },
    { kana: "と", romanji: "to" },
  ],
  na: [
    { kana: "な", romanji: "na" },
    { kana: "に", romanji: "ni" },
    { kana: "ぬ", romanji: "nu" },
    { kana: "ね", romanji: "ne" },
    { kana: "の", romanji: "no" },
  ],
  ha: [
    { kana: "は", romanji: "ha" },
    { kana: "ひ", romanji: "hi" },
    { kana: "ふ", romanji: "fu" },
    { kana: "へ", romanji: "he" },
    { kana: "ほ", romanji: "ho" },
  ],
  ma: [
    { kana: "ま", romanji: "ma" },
    { kana: "み", romanji: "mi" },
    { kana: "む", romanji: "mu" },
    { kana: "め", romanji: "me" },
    { kana: "も", romanji: "mo" },
  ],
  ya: [
    { kana: "や", romanji: "ya" },
    { kana: "ゆ", romanji: "yu" },
    { kana: "よ", romanji: "yo" },
  ],
  ra: [
    { kana: "ら", romanji: "ra" },
    { kana: "り", romanji: "ri" },
    { kana: "る", romanji: "ru" },
    { kana: "れ", romanji: "re" },
    { kana: "ろ", romanji: "ro" },
  ],
  wa: [
    { kana: "わ", romanji: "wa" },
    { kana: "を", romanji: "wo" },
  ],
};

export const GojuonDiacriticsHiragana: KanaMap = {
  ga: [
    { kana: "が", romanji: "ga" },
    { kana: "ぎ", romanji: "gi" },
    { kana: "ぐ", romanji: "gu" },
    { kana: "げ", romanji: "ge" },
    { kana: "ご", romanji: "go" },
  ],
  za: [
    { kana: "ざ", romanji: "za" },
    { kana: "じ", romanji: "ji" },
    { kana: "ず", romanji: "zu" },
    { kana: "ぜ", romanji: "ze" },
    { kana: "ぞ", romanji: "zo" },
  ],
  da: [
    { kana: "だ", romanji: "da" },
    { kana: "ぢ", romanji: "ji" },
    { kana: "づ", romanji: "zu" },
    { kana: "で", romanji: "de" },
    { kana: "ど", romanji: "do" },
  ],
  ba: [
    { kana: "ば", romanji: "ba" },
    { kana: "び", romanji: "bi" },
    { kana: "ぶ", romanji: "bu" },
    { kana: "べ", romanji: "be" },
    { kana: "ぼ", romanji: "bo" },
  ],
  pa: [
    { kana: "ぱ", romanji: "pa" },
    { kana: "ぴ", romanji: "pi" },
    { kana: "ぷ", romanji: "pu" },
    { kana: "ぺ", romanji: "pe" },
    { kana: "ぽ", romanji: "po" },
  ],
};

export const HatsuonHiragana: KanaMap = {
  n: [{ kana: "ん", romanji: "n" }],
};

export const DigraphsHiragana: KanaMap = {
  kya: [
    { kana: "きゃ", romanji: "kya" },
    { kana: "きゅ", romanji: "kyu" },
    { kana: "きょ", romanji: "kyo" },
  ],
  sha: [
    { kana: "しゃ", romanji: "sha" },
    { kana: "しゅ", romanji: "shu" },
    { kana: "しょ", romanji: "sho" },
  ],
  cha: [
    { kana: "ちゃ", romanji: "cha" },
    { kana: "ちゅ", romanji: "chu" },
    { kana: "ちょ", romanji: "cho" },
  ],
  nya: [
    { kana: "にゃ", romanji: "nya" },
    { kana: "にゅ", romanji: "nyu" },
    { kana: "にょ", romanji: "nyo" },
  ],
  hya: [
    { kana: "ひゃ", romanji: "hya" },
    { kana: "ひゅ", romanji: "hyu" },
    { kana: "ひょ", romanji: "hyo" },
  ],
  mya: [
    { kana: "みゃ", romanji: "mya" },
    { kana: "みゅ", romanji: "myu" },
    { kana: "みょ", romanji: "myo" },
  ],
  rya: [
    { kana: "りゃ", romanji: "rya" },
    { kana: "りゅ", romanji: "ryu" },
    { kana: "りょ", romanji: "ryo" },
  ],
  gya: [
    { kana: "ぎゃ", romanji: "gya" },
    { kana: "ぎゅ", romanji: "gyu" },
    { kana: "ぎょ", romanji: "gyo" },
  ],
  ja: [
    { kana: "じゃ", romanji: "ja" },
    { kana: "じゅ", romanji: "ju" },
    { kana: "じょ", romanji: "jo" },
  ],
  bya: [
    { kana: "びゃ", romanji: "bya" },
    { kana: "びゅ", romanji: "byu" },
    { kana: "びょ", romanji: "byo" },
  ],
  pya: [
    { kana: "ぴゃ", romanji: "pya" },
    { kana: "ぴゅ", romanji: "pyu" },
    { kana: "ぴょ", romanji: "pyo" },
  ],
};

export const HiraganaLookup: { [key in KanaTableSettingsKey]: KanaMap } = {
  gojuon: GojuonHiragana,
  diacritics: GojuonDiacriticsHiragana,
  diagraphs: DigraphsHiragana,
};

export const HiraganaData: KanaMap = { ...GojuonHiragana, ...HatsuonHiragana };

export const getHiraganaData = (
  tables: Record<KanaTableSettingsKey, KanaSetting>
) => {
  const tableKeys = Object.entries(tables)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => Boolean(value.checked))
    .map(([key]) => key);

  let hiraganaData: KanaMap = {};

  // REFACTOR!!!
  tableKeys.forEach((key) => {
    hiraganaData = {
      ...hiraganaData,
      ...(HiraganaLookup[key as KanaTableSettingsKey] ?? []),
    };
  });

  return hiraganaData;
};
