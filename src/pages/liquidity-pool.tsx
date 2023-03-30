import { Background } from "@/ui/bg";
import { SVGGlobalDefs } from "@/ui/svg/defs";
import { Header } from "@/ui/components/header";
import SwapWidget from "@/ui/components/swapWidget";
import React from "react";
import { LiquidityPoolContent } from "@/ui/components/swapWidget/LiquidityPoolContent";
import { CloseIcon } from "@/ui/buttons/close";

export default function LiquidityPool() {
  return (
    <section className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center">
      <SwapWidget
        title={"Create new Liquidity pool"}
        icons={<CloseIcon onClick={() => ""} />}
      >
        {/* <LiquidityPoolContent /> */}
      </SwapWidget>
    </section>
  );
}
