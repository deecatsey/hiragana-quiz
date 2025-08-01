import type {
  KanaMap,
  KanaSetting,
  KanaTableSettingsKey,
} from "../types/types";

export const GojuonKatakana: KanaMap = {
  a: [
    { kana: "ア", romanji: "a" },
    { kana: "イ", romanji: "i" },
    { kana: "ウ", romanji: "u" },
    { kana: "エ", romanji: "e" },
    { kana: "オ", romanji: "o" },
  ],
  ka: [
    { kana: "カ", romanji: "ka" },
    { kana: "キ", romanji: "ki" },
    { kana: "ク", romanji: "ku" },
    { kana: "ケ", romanji: "ke" },
    { kana: "コ", romanji: "ko" },
  ],
  sa: [
    { kana: "サ", romanji: "sa" },
    { kana: "シ", romanji: "shi" },
    { kana: "ス", romanji: "su" },
    { kana: "セ", romanji: "se" },
    { kana: "ソ", romanji: "so" },
  ],
  ta: [
    { kana: "タ", romanji: "ta" },
    { kana: "チ", romanji: "chi" },
    { kana: "ツ", romanji: "tsu" },
    { kana: "テ", romanji: "te" },
    { kana: "ト", romanji: "to" },
  ],
  na: [
    { kana: "ナ", romanji: "na" },
    { kana: "ニ", romanji: "ni" },
    { kana: "ヌ", romanji: "nu" },
    { kana: "ネ", romanji: "ne" },
    { kana: "ノ", romanji: "no" },
  ],
  ha: [
    { kana: "ハ", romanji: "ha" },
    { kana: "ヒ", romanji: "hi" },
    { kana: "フ", romanji: "fu" },
    { kana: "ヘ", romanji: "he" },
    { kana: "ホ", romanji: "ho" },
  ],
  ma: [
    { kana: "マ", romanji: "ma" },
    { kana: "ミ", romanji: "mi" },
    { kana: "ム", romanji: "mu" },
    { kana: "メ", romanji: "me" },
    { kana: "モ", romanji: "mo" },
  ],
  ya: [
    { kana: "ヤ", romanji: "ya" },
    { kana: "ユ", romanji: "yu" },
    { kana: "ヨ", romanji: "yo" },
  ],
  ra: [
    { kana: "ラ", romanji: "ra" },
    { kana: "リ", romanji: "ri" },
    { kana: "ル", romanji: "ru" },
    { kana: "レ", romanji: "re" },
    { kana: "ロ", romanji: "ro" },
  ],
  wa: [
    { kana: "ワ", romanji: "wa" },

    { kana: "ヲ", romanji: "wo" },
  ],
};

export const GojuonDiacriticsKatakana: KanaMap = {
  ga: [
    { kana: "ガ", romanji: "ga" },
    { kana: "ギ", romanji: "gi" },
    { kana: "グ", romanji: "gu" },
    { kana: "ゲ", romanji: "ge" },
    { kana: "ゴ", romanji: "go" },
  ],
  za: [
    { kana: "ザ", romanji: "za" },
    { kana: "ジ", romanji: "ji" },
    { kana: "ズ", romanji: "zu" },
    { kana: "ゼ", romanji: "ze" },
    { kana: "ゾ", romanji: "zo" },
  ],
  da: [
    { kana: "ダ", romanji: "da" },
    { kana: "ヂ", romanji: "ji" },
    { kana: "ヅ", romanji: "zu" },
    { kana: "デ", romanji: "de" },
    { kana: "ド", romanji: "do" },
  ],
  ba: [
    { kana: "バ", romanji: "ba" },
    { kana: "ビ", romanji: "bi" },
    { kana: "ブ", romanji: "bu" },
    { kana: "ベ", romanji: "be" },
    { kana: "ボ", romanji: "bo" },
  ],
  pa: [
    { kana: "パ", romanji: "pa" },
    { kana: "ピ", romanji: "pi" },
    { kana: "プ", romanji: "pu" },
    { kana: "ペ", romanji: "pe" },
    { kana: "ポ", romanji: "po" },
  ],
};

export const HatsuonKatakana: KanaMap = {
  n: [{ kana: "ン", romanji: "n" }],
};

export const DigraphsKatakana: KanaMap = {
  kya: [
    { kana: "キャ", romanji: "kya" },
    { kana: "キュ", romanji: "kyu" },
    { kana: "キョ", romanji: "kyo" },
  ],
  sha: [
    { kana: "シャ", romanji: "sha" },
    { kana: "シュ", romanji: "shu" },
    { kana: "ショ", romanji: "sho" },
  ],
  cha: [
    { kana: "チャ", romanji: "cha" },
    { kana: "チュ", romanji: "chu" },
    { kana: "チョ", romanji: "cho" },
  ],
  nya: [
    { kana: "ニャ", romanji: "nya" },
    { kana: "ニュ", romanji: "nyu" },
    { kana: "ニョ", romanji: "nyo" },
  ],
  hya: [
    { kana: "ヒャ", romanji: "hya" },
    { kana: "ヒュ", romanji: "hyu" },
    { kana: "ヒョ", romanji: "hyo" },
  ],
  mya: [
    { kana: "ミャ", romanji: "mya" },
    { kana: "ミュ", romanji: "myu" },
    { kana: "ミョ", romanji: "myo" },
  ],
  rya: [
    { kana: "リャ", romanji: "rya" },
    { kana: "リュ", romanji: "ryu" },
    { kana: "リョ", romanji: "ryo" },
  ],
  gya: [
    { kana: "ギャ", romanji: "gya" },
    { kana: "ギュ", romanji: "gyu" },
    { kana: "ギョ", romanji: "gyo" },
  ],
  ja: [
    { kana: "ジャ", romanji: "ja" },
    { kana: "ジュ", romanji: "ju" },
    { kana: "ジョ", romanji: "jo" },
  ],
  bya: [
    { kana: "ビャ", romanji: "bya" },
    { kana: "ビュ", romanji: "byu" },
    { kana: "ビョ", romanji: "byo" },
  ],
  pya: [
    { kana: "ピャ", romanji: "pya" },
    { kana: "ピュ", romanji: "pyu" },
    { kana: "ピョ", romanji: "pyo" },
  ],
};

export const KatakanaLookup: { [key in KanaTableSettingsKey]: KanaMap } = {
  gojuon: GojuonKatakana,
  diacritics: GojuonDiacriticsKatakana,
  diagraphs: DigraphsKatakana,
};

export const KatakanaData: KanaMap = { ...GojuonKatakana, ...HatsuonKatakana };

export const getKatakanaData = (
  tables: Record<KanaTableSettingsKey, KanaSetting>
) => {
  const tableKeys = Object.entries(tables)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => Boolean(value.checked))
    .map(([key]) => key);

  let KatakanaData: KanaMap = {};

  // REFACTOR!!!
  tableKeys.forEach((key) => {
    KatakanaData = {
      ...KatakanaData,
      ...(KatakanaLookup[key as KanaTableSettingsKey] ?? []),
    };
  });

  return KatakanaData;
};
