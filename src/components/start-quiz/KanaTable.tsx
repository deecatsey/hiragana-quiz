import type { KanaGroupKey, KanaMap } from "../../resources/hiraganaData";
import KanaTableLayout from "./KanaTableLayout";
import KanaRow from "./KanaRow";
import StartQuizButton from "./StartQuizButton";

export type KanaTableProps = { title: string; kanaData: KanaMap };

export default function KanaTable({ title, kanaData }: KanaTableProps) {
  const kanaRows = Object.entries(kanaData).map(([kanaGroup, characters]) => (
    <KanaRow
      key={`row-${kanaGroup}`}
      kanaGroup={kanaGroup as KanaGroupKey}
      kanaEntries={characters}
    />
  ));

  return (
    <KanaTableLayout title={title} kanaNodes={kanaRows}>
      <StartQuizButton />
    </KanaTableLayout>
  );
}
