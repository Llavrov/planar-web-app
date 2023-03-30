import SwapWidget from "@/ui/components/swapWidget";
import React from "react";
import { CloseIcon } from "@/ui/buttons/close";
import { SwapLockAndGetBonusContent } from "@/ui/components/swapWidget/SwapLockAndGetBonusContent";

export default function GetBonus() {
  return (
    <section className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center">
      <SwapWidget title={"Swap"} icons={<CloseIcon onClick={() => ""} />}>
        {/* <SwapLockAndGetBonusContent /> */}
      </SwapWidget>
    </section>
  );
}
