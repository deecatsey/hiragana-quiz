import { useSelector } from "react-redux";
import KanaTable from "./KanaTable";
import type { RootState } from "../../app/store";
import type { KanaTableSettingsKey } from "../../types/types";
import { HiraganaLookup } from "../../resources/hiraganaData";
import { Typography } from "@mui/material";

export function HiraganaTable() {
  const kanaSettings = useSelector(
    (state: RootState) => state.kana.settings.tables
  );

  // check state settings
  const checkedSettingsKeys: KanaTableSettingsKey[] = Object.entries(
    kanaSettings
  )
    .map(
      ([kanaKey, setting]) =>
        setting.checked && (kanaKey as KanaTableSettingsKey)
    )
    .filter((setting) => typeof setting === "string");

  // filtered based on state
  // const tables = checkedSettingsKeys.map((settingsKey) => (
  //   <KanaTable title="Hiragana" kanaData={HiraganaLookup[settingsKey]} />
  // ));

  const tables = Object.entries(kanaSettings).map(([settingsKey, value]) => {
    // console.log(settingsKey, value.label, value.checked);

    if (!checkedSettingsKeys.includes(settingsKey as KanaTableSettingsKey))
      return null;
    const { label } = value;

    return (
      <KanaTable
        key={`hiragana-table-${settingsKey}`}
        title={label}
        kanaData={HiraganaLookup[settingsKey as KanaTableSettingsKey]}
      />
    );
  });

  return (
    <>
      <Typography variant="h3">Hiragana</Typography>
      {tables}
    </>
  );
}
