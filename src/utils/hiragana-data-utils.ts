import { HiraganaLookup } from "../resources/hiraganaData";
import type {
  KanaGroupKey,
  KanaMap,
  KanaTableSettingsKey,
} from "../types/types";

export const buildHiraganaData = (
  selectedKeys: KanaTableSettingsKey[]
): KanaMap => {
  return selectedKeys.reduce((acc, key) => {
    const map = HiraganaLookup[key];
    Object.entries(map).forEach(([group, entries]) => {
      acc[group as KanaGroupKey] = entries;
    });
    return acc;
  }, {} as KanaMap);
};
