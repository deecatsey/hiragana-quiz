import type {
  KanaGroupKey,
  KanaSetting,
  KanaTableSettingsKey,
  Score,
  KanaSystemSettingsKey,
  QuizMode,
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
  quizMode: QuizMode;
  quizActive: boolean;
  selectedKanaGroups: KanaGroupKey[];
  score: Score;
  settings: KanaSettingsState;
}
