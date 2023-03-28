import { Background } from "@/ui/bg";
import { SVGGlobalDefs } from "@/ui/svg/defs";
import {Header} from "@/ui/components/header";
import SwapWidget from "@/ui/components/swapWidget";
import React from "react";
import {CloseIcon} from "@/ui/buttons/close";
import {SwapLockAndGetBonusContent} from "@/ui/components/swapWidget/SwapLockAndGetBonusContent";

export default function GetBonus() {
    return (
        <section className="fixed flex justify-center items-center w-screen h-screen top-0 left-0">
            <SwapWidget title={"Swap"} icons={<CloseIcon onClick={() => ''}/>} >
                <SwapLockAndGetBonusContent />
            </SwapWidget>
        </section>
    );
}
