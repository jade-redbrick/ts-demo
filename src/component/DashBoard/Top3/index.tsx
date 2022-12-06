import { GstarChallengeWorld } from "types";
import Container from "./Container";

export default function Top3({
  gstarWorlds,
  cpv,
}: {
  gstarWorlds: GstarChallengeWorld[] | undefined;
  cpv: number;
}) {
  return <Container gstarWorlds={gstarWorlds} cpv={cpv} />;
}
