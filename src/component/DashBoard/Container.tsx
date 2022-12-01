import { useGetGstarList } from "hooks";
import View from "./View";

export default function Container() {
  const { data: gstarWorlds, dataUpdatedAt } = useGetGstarList();
  console.log(gstarWorlds);

  return <View />;
}
