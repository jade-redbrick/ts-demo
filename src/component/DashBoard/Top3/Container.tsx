import { GstarChallengeWorld } from "types";
import View from "./View";

export default function Container({
  gstarWorlds,
  cpv,
}: {
  gstarWorlds: GstarChallengeWorld[] | undefined;
  cpv: number;
}) {
  const sortedWorlds = gstarWorlds?.map(function (world) {
    return {
      id: world.id,
      authorName: world?.authorName,
      extraViewCount: world.extraViewCount,
      viewCount: world.viewCount,
      name: world.name,
      icon: world.icon,
    };
  });

  sortedWorlds?.sort(function (a, b) {
    return b.viewCount + b.extraViewCount - (a.viewCount + a.extraViewCount);
  });
  return <View sortedWorlds={sortedWorlds} cpv={30} />;
}
