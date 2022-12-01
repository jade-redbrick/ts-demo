import { GstarChallengeWorld } from "types";
import Container from "./Container";

export default function Top3({ gstarWorlds }: { gstarWorlds: GstarChallengeWorld[] | undefined }) {
  return <Container gstarWorlds={gstarWorlds} />;
}
