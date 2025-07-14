import KanaTableLayout from "./KanaTableLayout";
import KanaRow from "./KanaRow";
import type { KanaGroupKey, KanaMap } from "../../types/types";

export type KanaTableProps = { title: string; kanaData: KanaMap };

export default function KanaTable({ title, kanaData }: KanaTableProps) {
  const kanaRows = Object.entries(kanaData).map(([kanaGroup, characters]) => (
    <KanaRow
      key={`row-${kanaGroup}`}
      kanaGroup={kanaGroup as KanaGroupKey}
      kanaEntries={characters}
    />
  ));

  return <KanaTableLayout title={title} kanaNodes={kanaRows} />;
}
