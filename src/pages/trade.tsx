import { Background } from "@/ui/bg";
import { SVGGlobalDefs } from "@/ui/svg/defs";
import {Header} from "@/ui/components/header";
import SwapWidget from "@/ui/components/swapWidget";
import {SwapContent} from "@/ui/components/swapWidget/SwapContent";
import {RetryIcon} from "@/ui/buttons/retry";
import {SettingsIcon} from "@/ui/buttons/settings";
import React from "react";

const icons = (
    <>
        <RetryIcon />
        <SettingsIcon />
    </>);

export default function Trade() {
    return (
        <>
            <SVGGlobalDefs />
            <main className="min-h-screen w-full p-3">
                <Background />
                <Header />
                <section className="fixed flex justify-center items-center w-screen h-screen top-0 left-0">
                    <SwapWidget title={"Swap"} icons={icons}>
                        <SwapContent error={true} />
                    </SwapWidget>
                </section>
            </main>
        </>
    );
}
