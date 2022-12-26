import React, { useEffect, useState } from "react";
import {
  // usePopup,
  useGetGstarList,
  useGetVar,
  // useSetCpv,
  // useChallengeList,
} from "hooks";
import View from "./View";

export default function Container() {
  // const {openPopup} = usePopup();
  const { data: cpvData } = useGetVar("cpv");
  // const { data: challenge } = useChallengeList();
  const [cpv, setCpv] = useState(0);
  const [clickedSave, setClickedSave] = useState(false);

  useEffect(() => {
    if (cpvData?.value) {
      setCpv(Number(cpvData.value));
    }
  }, [cpvData]);

  const handleCpv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeCpv = Number(e.target.value);
    setCpv(changeCpv);
  };

  const { data: gstarWorlds } = useGetGstarList();

  const viewCountSum = gstarWorlds?.reduce((sum, value) => sum + value.viewCount, 0);
  const addViewCountSum = gstarWorlds?.reduce((sum, value) => sum + value.extraViewCount, 0);
  // const exposureViewCountSum = viewCountSum + addViewCountSum;
  // const profitsSum = exposureViewCountSum * cpv;

  // const voteCountSum = challenge?.reduce((sum, value) => sum + value.voteCount, 0);
  // const extraVoteCountSum = challenge?.reduce((sum, value) => sum + value.extraVoteCount, 0);

  // const cpvMutation = useSetCpv();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClickedSave(true);

    // if (cpv !== cpvData?.value) {
    //   cpvMutation.mutateAsync(cpv);
    // }

    // openPopup({
    //   type: "oneButton",
    //   props: {
    //     title: "저장되었습니다",
    //     confirmAction: () => setClickedSave(false),
    //   },
    //   options: {
    //     dismissOverlay: true,
    //     closeButton: false,
    //   },
    // });
  };

  return (
    <View
    // gstarWorlds={gstarWorlds}
    // challenge={challenge}
    // voteCountSum={voteCountSum}
    // extraVoteCountSum={extraVoteCountSum}
    // cpv={cpv}
    // handleCpv={handleCpv}
    // submitHandler={submitHandler}
    // viewCountSum={viewCountSum}
    // addViewCountSum={addViewCountSum}
    // exposureViewCountSum={exposureViewCountSum}
    // profitsSum={profitsSum}
    // clickedSave={clickedSave}
    />
  );
}
