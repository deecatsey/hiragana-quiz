import { useSelector } from "react-redux";
import KanaTable from "./KanaTable";
import type { RootState } from "../../app/store";
import type { KanaTableSettingsKey } from "../../types/types";
import { KatakanaLookup } from "../../resources/katakanaData";
import { Typography } from "@mui/material";

export function KatakanaTable() {
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
  //   <KanaTable title="Katakana" kanaData={KatakanaLookup[settingsKey]} />
  // ));

  const tables = Object.entries(kanaSettings).map(([settingsKey, value]) => {
    console.log(settingsKey, value.label, value.checked);

    if (!checkedSettingsKeys.includes(settingsKey as KanaTableSettingsKey))
      return null;
    const { label } = value;

    return (
      <KanaTable
        key={`Katakana-table-${settingsKey}`}
        title={label}
        kanaData={KatakanaLookup[settingsKey as KanaTableSettingsKey]}
      />
    );
  });

  return (
    <>
      <Typography variant="h3">Katakana</Typography>
      {tables}
    </>
  );
}
