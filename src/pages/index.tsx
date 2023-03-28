import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Background } from '@/ui/bg/index'
import {Button} from "@/ui/buttons/Button";
import SwapWidget from "@/ui/components/swapWidget";
import {SwapContent} from "@/ui/components/swapWidget/SwapContent";
import {ChartContainer} from "@/ui/components/chart";
import React, {useState} from "react";
import {RetryIcon} from "@/ui/buttons/retry";
import {SettingsIcon} from "@/ui/buttons/settings";
import {ModalSelectToken} from "@/ui/components/modal/select_token";
import {ModalContainer} from "@/ui/components/modal";

const inter = Inter({ subsets: ['latin'] });

const icons = (
    <>
        <RetryIcon />
        <SettingsIcon />
    </>);

export default function Home() {
  const [show, setShow] = useState(false);

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
      <section className="w-screen md:h-[calc(100vh-102px)] mb-[50px] min-h-[686px] pl-4 pr-4 bd:pl-0 bd:pr-0 box-border top-0 left-0">
        <section className="flex flex-col gap-4 m-auto justify-center items-center w-full h-full max-w-[1360px]">
          <section className="flex flex-col md:flex-row justify-between w-full">
            <span className="text-white mt-[16px] md:m-0 text-heading-s md:text-heading-l">Trade</span>
            <section className="flex mt-[26px] mb-[26px] md:m-0 flex-row gap-2 w-full md:w-[388px]">
              <Button classNames={'md:max-w-[157px]'} onClick={() => {}} title={'Watch tutorial'} type={'primary'} />
              <Button classNames={'md:max-w-[221px]'} onClick={() => {}} title={'Watch tutorial'} type={'secondary'} icon={'video'} />
            </section>
          </section>
          <section className='flex justify-start text-text-s md:text-text-m text-white opacity-50 w-full mb-[10px] mt-[-15px]'>
            Swap tokens between each other
          </section>
          <section className="flex flex-col md:flex-row relative gap-4 box-border justify-center items-center w-full">
            <SwapWidget title={"Swap"} icons={icons}>
              <SwapContent error={false} setModal={() => setShow(!show)} />
            </SwapWidget>
            <ChartContainer />
          </section>
        </section>
      </section>
    </>
  )
}
