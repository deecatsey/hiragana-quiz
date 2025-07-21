import type {
  KanaGroupKey,
  KanaMap,
  KanaSetting,
  KanaSystemSettingsKey,
  KanaTableSettingsKey,
} from "../types/types";
import { getHiraganaData, HiraganaData } from "./hiraganaData";
import { getKatakanaData, KatakanaData } from "./katakanaData";

// TODO: Fix so that tables work per writing system
export const getKanaData = (
  tableKeys: Record<KanaTableSettingsKey, KanaSetting>,
  systemKeys: Record<KanaSystemSettingsKey, KanaSetting>
): KanaMap => {
  const KanaData: KanaMap = {};

  const hiraganaData = getHiraganaData(tableKeys);
  const katakanaData = getKatakanaData(tableKeys);

  if (systemKeys.hiragana.checked) {
    Object.keys(hiraganaData).map(
      (kanaKey) =>
        (KanaData[kanaKey as KanaGroupKey] = [
          ...(KanaData[kanaKey as KanaGroupKey] ?? []),
          ...(hiraganaData[kanaKey as KanaGroupKey] ?? []),
        ])
    );
  }
  if (systemKeys.katakana.checked) {
    Object.keys(katakanaData).map(
      (kanaKey) =>
        (KanaData[kanaKey as KanaGroupKey] = [
          ...(KanaData[kanaKey as KanaGroupKey] ?? []),
          ...(katakanaData[kanaKey as KanaGroupKey] ?? []),
        ])
    );
  }
  console.log("KanaData", KanaData);

  return KanaData;
};

export const KanaData: KanaMap = { ...HiraganaData, ...KatakanaData };

export const getInitialKanaGroups = (): KanaGroupKey[] => {
  return Object.keys(KanaData) as KanaGroupKey[]; // Or any logic you need
};
