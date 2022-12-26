import { GstarChallengeWorld } from "types";
import Container from "./Container";

export default function TableItem({
  item,
  cpv,
  profitsSum,
  clickedSave,
}: {
  item: GstarChallengeWorld;
  cpv: number;
  profitsSum: number;
  clickedSave: boolean;
}) {
  return <Container item={item} cpv={cpv} profitsSum={profitsSum} clickedSave={clickedSave} />;
}
