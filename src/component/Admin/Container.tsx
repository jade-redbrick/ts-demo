import React, { useEffect, useState } from "react";
import {
  useGetGstarList,
  useGetVar,
  // useSetCpv,
} from "hooks";
import View from "./View";

export default function Container() {
  const { data: cpvData } = useGetVar("cpv");
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
  let viewCountSum = 0;
  let addViewCountSum = 0;
  if (gstarWorlds) {
    viewCountSum = gstarWorlds.reduce((sum, value) => sum + value.viewCount, 0);
    addViewCountSum = gstarWorlds.reduce((sum, value) => sum + value.extraViewCount, 0);
  }
  const exposureViewCountSum = viewCountSum + addViewCountSum;
  const profitsSum = exposureViewCountSum * cpv;

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
      gstarWorlds={gstarWorlds}
      cpv={cpv}
      handleCpv={handleCpv}
      submitHandler={submitHandler}
      viewCountSum={viewCountSum}
      addViewCountSum={addViewCountSum}
      exposureViewCountSum={exposureViewCountSum}
      profitsSum={profitsSum}
      clickedSave={clickedSave}
    />
  );
}
