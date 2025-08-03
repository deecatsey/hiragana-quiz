import { useCallback, useState } from "react";
import KanaRowLayout from "./KanaRowLayout";
import { Checkbox, useTheme } from "@mui/material";
import { addKanaGroup, removeKanaGroup } from "../../app/kanaSlice";
import { useDispatch } from "react-redux";
import type { KanaEntry, KanaGroupKey } from "../../types/types";

export type KanaRowProps = {
  kanaGroup: KanaGroupKey;
  kanaEntries: KanaEntry[];
};

export default function KanaRow({ kanaGroup, kanaEntries }: KanaRowProps) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelection = useCallback(() => {
    setIsSelected(!isSelected);
    if (isSelected) {
      dispatch(removeKanaGroup(kanaGroup));
      return;
    }
    dispatch(addKanaGroup(kanaGroup));
  }, [dispatch, setIsSelected, isSelected, kanaGroup]);

  return (
    <KanaRowLayout
      rowName={kanaGroup}
      kanaEntries={kanaEntries}
      onClickRow={toggleSelection}
      isSelected={isSelected}
    >
      <Checkbox
        checked={isSelected}
        sx={{
          ml: 1,
          color: theme.palette.primary.main,
          "&.Mui-checked": {
            color: "primary",
          },
        }}
      />
    </KanaRowLayout>
  );
}
