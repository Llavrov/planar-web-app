import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Button} from "@/ui/buttons/Button";
import SwapWidget from "@/ui/components/swapWidget";
import {SwapContent} from "@/ui/components/swapWidget/SwapContent";
import {ChartContainer} from "@/ui/components/chart";
import React, {useState} from "react";
import {RetryIcon} from "@/ui/buttons/retry";
import {SettingsIcon} from "@/ui/buttons/settings";
import {ModalSelectToken} from "@/ui/components/modal/select_token";
import {ModalContainer} from "@/ui/components/modal";
import EmptyIcon from "@/ui/icons/coins/empty.svg";
import {GradientButton} from "@/ui/buttons/gradient";
import {COINS} from "@/ui/components/modal/select_token/coins";
import {SwapWidgetParams} from "@/ui/components/swapWidget/SwapWidgetParams";

const emptyIcon = {
    icon: EmptyIcon,
    label: 'Select token',
}

const inter = Inter({ subsets: ['latin'] });

const icons = (
    <>
        <RetryIcon />
        <SettingsIcon />
    </>);

export default function EnterAmount() {
    const [show, setShow] = useState(false);
    const [gradientTitle, setGradientTitle] = useState('$76.46M TVL');

    return (
        <>
            <ModalContainer show={show} onClose={() => setShow(!show)}>
                <ModalSelectToken onClose={() => setShow(!show)} />
            </ModalContainer>
            <Head>
                <title>Planar</title>
                <meta name="description" content="Planar" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="w-screen md:min-h-[calc(100vh-102px)] relative mb-[50px] min-h-[686px] pl-4 pr-4 bd:pl-0 bd:pr-0 box-border top-0 left-0">
                <section className="flex flex-col gap-4 m-auto justify-center items-center w-full h-full relative max-w-[1360px]">
                    <section className="flex flex-col md:flex-row justify-between w-full">
                        <span className="text-white mt-[16px] md:m-0 text-heading-s md:text-heading-l">Trade</span>
                        <section className="flex justify-between mt-[26px] mb-[26px] md:m-0 flex-row gap-2 w-full md:w-[378px]">
                            <GradientButton
                                handleClick={() => {}}
                                title={gradientTitle} />
                            <Button
                                classNames={'max-w-[182px] md:max-w-[221px]'}
                                onClick={() => {}}
                                fontSize={'text-text-s md:text-text-m'}
                                title={'Watch tutorial'}
                                type={'secondary'}
                                icon={'video'} />
                        </section>
                    </section>
                    <section className='flex justify-start text-text-s md:text-text-m text-white opacity-50 w-full mb-[10px] mt-[-15px]'>
                        Swap tokens between each other
                    </section>
                    <section className="flex flex-col md:flex-row relative gap-4 box-border justify-center items-start h-full w-full">
                        <section className="w-full max-w-[460px]">
                            <SwapWidget title={"Swap"} icons={icons}>
                                <SwapContent
                                    fromCoin={COINS[5]}
                                    toCoin={COINS[3]}
                                    error={true}
                                    setModal={() => setShow(!show)}
                                    buttonTitle={'Select token to do the swap'}
                                    linkTitle={'Be the first to provide liquidity to this pair'}
                                />
                            </SwapWidget>
                            <SwapWidgetParams params={[
                                {name: '1 ETH', value: '= 1,625.69 USDC'},
                                {name: 'Price impact:', value: '3%'},
                                {name: 'SLIPPAGE:', value: '0.2%'},
                                {name: 'Network fee:', value: '~$3'},
                                {name: 'Route: ', value: 'ETH > USDC <>'},
                            ]} />
                        </section>
                        <ChartContainer />
                    </section>
                </section>
            </section>
        </>
    )
}
