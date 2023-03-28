import { Background } from "@/ui/bg";
import { SVGGlobalDefs } from "@/ui/svg/defs";
import {Header} from "@/ui/components/header";
import SwapWidget from "@/ui/components/swapWidget";
import {SwapContent} from "@/ui/components/swapWidget/SwapContent";
import {RetryIcon} from "@/ui/buttons/retry";
import {SettingsIcon} from "@/ui/buttons/settings";
import React from "react";
import {ChartContainer} from "@/ui/components/chart";
import {Button} from "@/ui/buttons/Button";

const icons = (
    <>
        <RetryIcon />
        <SettingsIcon />
    </>);

export default function Trade() {
    return (
        <section className="w-screen h-[calc(100vh-102px)] min-h-[686px] box-border top-0 left-0">
            <section className="flex flex-col gap-4 m-auto justify-center items-center w-full h-full max-w-[1360px]">
                <section className="flex flex-row justify-between w-full">
                    <span className="text-white text-heading-l">Trade</span>
                    <section className="flex flex-row gap-2">
                        <Button classNames={'w-[157px]'} onClick={() => {}} title={'Watch tutorial'} type={'primary'} />
                        <Button classNames={'w-[221px]'} onClick={() => {}} title={'Watch tutorial'} type={'secondary'} icon={'video'} />
                    </section>
                </section>
                <section className='flex justify-start text-text-m text-white opacity-50 w-full mb-[10px] mt-[-15px]'>
                    Swap tokens between each other
                </section>
                <section className="flex flex-row  gap-4 justify-center items-center w-full">
                    <SwapWidget title={"Swap"} icons={icons}>
                        <SwapContent error={true} />
                    </SwapWidget>
                    <ChartContainer />
                </section>
            </section>
        </section>
    );
}
