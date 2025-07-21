import type {
  KanaGroupKey,
  KanaMap,
  KanaSetting,
  KanaSystemSettingsKey,
} from "../types/types";
import { HiraganaData } from "./hiraganaData";
import { KatakanaData } from "./katakanaData";

export const KanaData: KanaMap = { ...HiraganaData, ...KatakanaData };

export const getKanaData = (
  systemKeys: Record<KanaSystemSettingsKey, KanaSetting>
): KanaMap => {
  const KanaData: KanaMap = {};

  if (systemKeys.hiragana.checked) {
    Object.keys(HiraganaData).map(
      (kanaKey) =>
        (KanaData[kanaKey as KanaGroupKey] = [
          ...(KanaData[kanaKey as KanaGroupKey] ?? []),
          ...(HiraganaData[kanaKey as KanaGroupKey] ?? []),
        ])
    );
  }
  if (systemKeys.katakana.checked) {
    Object.keys(KatakanaData).map(
      (kanaKey) =>
        (KanaData[kanaKey as KanaGroupKey] = [
          ...(KanaData[kanaKey as KanaGroupKey] ?? []),
          ...(KatakanaData[kanaKey as KanaGroupKey] ?? []),
        ])
    );
  }
  console.log(KanaData);

  return KanaData;
};
