import { useEffect, useState } from "react";
import { useGetGstarList, useGetVar } from "hooks";
import { contents } from "./contents";
import View from "./View";

export default function Container() {
  const [gstarProfits, setGstarProfits] = useState<number[] | undefined>([]);
  const { data: gstarWorlds } = useGetGstarList();
  const { data: cpvData } = useGetVar("cpv");

  useEffect(() => {
    if (cpvData) {
      const viewcount = gstarWorlds?.map(
        (world) => (world?.viewCount + world?.extraViewCount) * Number(50),
      );
      setGstarProfits(viewcount);
    }
  }, [gstarWorlds]);

  let totalViewCount = 0;
  if (gstarWorlds) {
    totalViewCount = gstarWorlds.reduce(
      (sum, world) => sum + world?.viewCount + world?.extraViewCount,
      0,
    );
  }

  let labels: Array<string[] | string> = [];
  gstarWorlds?.filter((world) => {
    contents.map((content) => {
      if (world.id === content.id) {
        labels.push(content.chartTitle);
      }
    });
  });

  const chartData = {
    labels,
    datasets: [
      {
        data: gstarProfits,
        backgroundColor: [
          "#C091E1",
          "#A299EC",
          "#DC2270",
          "#2FDBDB",
          "#C9C9C9",
          "#969DA4",
          "#3DC7C7",
          "#857BAD",
          "#F73C95",
          "#A3A5D8",
          "#773CF7",
          "#3239D5",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <View
      gstarWorlds={gstarWorlds}
      chartData={chartData}
      totalViewCount={totalViewCount}
      totalRevenue={totalViewCount * Number(cpvData?.value)}
      cpv={Number(cpvData?.value)}
    />
  );
}
