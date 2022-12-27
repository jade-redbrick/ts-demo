import { useUpdateGstarWorld } from "querys";
import { useEffect, useState } from "react";
import { GstarChallengeWorld } from "types";
import View from "./View";

export default function Container({
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
  const [addViewCount, setAddViewCount] = useState(item?.extraViewCount);
  const showViewCount = item.viewCount + addViewCount;
  const profits = showViewCount * cpv;
  const profitsRate = (profits / profitsSum) * 100;

  const worldMutation = useUpdateGstarWorld(item.id);

  const onClickLink = () => {
    window.open(`https://dev.redbrick.land/studio/?mode=play&pid=${item.id}`);
  };

  useEffect(() => {
    if (clickedSave && addViewCount !== item.extraViewCount) {
      worldMutation.mutateAsync({ extraViewCount: addViewCount });
    }
  }, [clickedSave]);

  return (
    <View
      item={item}
      addViewCount={addViewCount}
      setAddViewCount={setAddViewCount}
      showViewCount={showViewCount}
      profits={profits}
      profitsRate={profitsRate}
      onClickLink={onClickLink}
    />
  );
}
