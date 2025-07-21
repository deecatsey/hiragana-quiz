import type {
  KanaGroupKey,
  KanaSetting,
  KanaTableSettingsKey,
  Score,
  KanaSystemSettingsKey,
} from "../types/types";

export type KanaTableSettingsPayload = {
  key: KanaTableSettingsKey;
  checked: boolean;
  label?: string;
};

export type KanaSystemSettingsPayload = {
  key: KanaSystemSettingsKey;
  checked: boolean;
  label?: string;
};

export type KanaSettingsState = {
  tables: Record<KanaTableSettingsKey, KanaSetting>;
  systems: Record<KanaSystemSettingsKey, KanaSetting>;
};

export interface KanaState {
  quizMode: boolean;
  selectedKanaGroups: KanaGroupKey[];
  score: Score;
  settings: KanaSettingsState;
}
