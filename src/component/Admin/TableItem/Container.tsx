import // usePlayLink,
// useUpdateChallengeVoteCount,
// useUpdateGstarWorld,
"hooks";
import { useEffect, useState } from "react";
import View from "./View";

export default function Container() {
  // export default function Container({ item, cpv, profitsSum, clickedSave, challenge }) {
  // const challengeItem = challenge?.find((chall) => chall.pid === item.id);
  // const [addViewCount, setAddViewCount] = useState(item?.extraViewCount);
  // const [voteCount, setVoteCount] = useState(challengeItem?.extraVoteCount);
  // const showViewCount = item.viewCount + addViewCount;
  // const profits = showViewCount * cpv;
  // const profitsRate = (profits / profitsSum) * 100;

  // const worldMutation = useUpdateGstarWorld(item.id);
  // const voteCountMutation = useUpdateChallengeVoteCount(challengeItem?.id);

  // const { openPlayLink } = usePlayLink();
  // const onClickLink = () => {
  //   openPlayLink(item.id);
  // };

  // useEffect(() => {
  // if (clickedSave && addViewCount !== item.extraViewCount) {
  //   worldMutation.mutateAsync({ extraViewCount: addViewCount });
  // }
  // if (clickedSave && voteCount !== challengeItem.extraVoteCount) {
  //   voteCountMutation.mutateAsync(voteCount);
  // }
  // }, [clickedSave]);

  return (
    <View
    // item={item}
    // addViewCount={addViewCount}
    // setAddViewCount={setAddViewCount}
    // showViewCount={showViewCount}
    // profits={profits}
    // profitsRate={profitsRate}
    // challengeItem={challengeItem}
    // voteCount={voteCount}
    // setVoteCount={setVoteCount}
    // onClickLink={onClickLink}
    />
  );
}
