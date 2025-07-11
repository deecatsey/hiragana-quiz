import type { KanaEntry, KanaGroupKey } from "../../resources/hiraganaData";
import { useState } from "react";
import KanaRowLayout from "./KanaRowLayout";
import { Checkbox } from "@mui/material";
import { addKanaGroup, removeKanaGroup } from "../../app/kanaSlice";
import { useDispatch } from "react-redux";

export type KanaRowProps = {
  kanaGroup: KanaGroupKey;
  kanaEntries: KanaEntry[];
};

export default function KanaRow({ kanaGroup, kanaEntries }: KanaRowProps) {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    if (isSelected) {
      dispatch(removeKanaGroup(kanaGroup));
      return;
    }
    dispatch(addKanaGroup(kanaGroup));
  };
  return (
    <KanaRowLayout
      rowName={kanaGroup}
      kanaEntries={kanaEntries}
      isSelected={isSelected}
    >
      <Checkbox onClick={toggleSelection} />
    </KanaRowLayout>
  );
}
