import { hiraganaData } from "../../resources/hiraganaData";
import KanaTable from "./KanaTable";

// export type HiraganaTableProps = {};

export function HiraganaTable() {
  return <KanaTable title="Hiragana" kanaData={hiraganaData} />;
}
