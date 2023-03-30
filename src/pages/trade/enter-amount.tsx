import Head from "next/head";
import { Inter } from "next/font/google";
import { Button } from "@/ui/buttons/Button";
import SwapWidget from "@/ui/components/swapWidget";
import { SwapContent } from "@/ui/components/swapWidget/SwapContent";
import { ChartContainer } from "@/ui/components/chart";
import React, { useState } from "react";
import { RetryIcon } from "@/ui/buttons/retry";
import { SettingsIcon } from "@/ui/buttons/settings";
import { ModalSelectToken } from "@/ui/components/modal/select_token";
import { ModalContainer } from "@/ui/components/modal";
import EmptyIcon from "@/ui/icons/coins/empty.svg";
import { GradientButton } from "@/ui/buttons/gradient";
import { COINS } from "@/ui/components/modal/select_token/coins";
import { SwapWidgetParams } from "@/ui/components/swapWidget/SwapWidgetParams";

const emptyIcon = {
  icon: EmptyIcon,
  label: "Select token",
};

const inter = Inter({ subsets: ["latin"] });

const icons = (
  <>
    <RetryIcon />
    <SettingsIcon />
  </>
);

export default function EnterAmount() {
  const [show, setShow] = useState(false);
  const [gradientTitle, setGradientTitle] = useState("$76.46M TVL");

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
      <section className="relative top-0 left-0 mb-[50px] box-border min-h-[686px] w-screen pl-4 pr-4 md:min-h-[calc(100vh-102px)] bd:pl-0 bd:pr-0">
        <section className="relative m-auto flex h-full w-full max-w-[1360px] flex-col items-center justify-center gap-4">
          <section className="flex w-full flex-col justify-between md:flex-row">
            <span className="mt-[16px] text-heading-s text-white md:m-0 md:text-heading-l">
              Trade
            </span>
            <section className="mt-[26px] mb-[26px] flex w-full flex-row justify-between gap-2 md:m-0 md:w-[378px]">
              <GradientButton handleClick={() => {}} title={gradientTitle} />
              <Button
                classNames={"max-w-[182px] md:max-w-[221px]"}
                onClick={() => {}}
                fontSize={"text-text-s md:text-text-m"}
                title={"Watch tutorial"}
                type={"secondary"}
                icon={"video"}
              />
            </section>
          </section>
          <section className="mb-[10px] mt-[-15px] flex w-full justify-start text-text-s text-white opacity-50 md:text-text-m">
            Swap tokens between each other
          </section>
          <section className="relative box-border flex h-full w-full flex-col items-start justify-center gap-4 md:flex-row">
            <section className="w-full max-w-[460px]">
              <SwapWidget title={"Swap"} icons={icons}>
                <SwapContent
                  fromCoin={COINS[5]}
                  toCoin={COINS[3]}
                  error={true}
                  setModal={() => setShow(!show)}
                  buttonTitle={"Select token to do the swap"}
                  linkTitle={"Be the first to provide liquidity to this pair"}
                />
              </SwapWidget>
              <SwapWidgetParams
                params={[
                  { name: "1 ETH", value: "= 1,625.69 USDC" },
                  { name: "Price impact:", value: "3%" },
                  { name: "SLIPPAGE:", value: "0.2%" },
                  { name: "Network fee:", value: "~$3" },
                  { name: "Route: ", value: "ETH > USDC <>" },
                ]}
              />
            </section>
            <ChartContainer />
          </section>
        </section>
      </section>
    </>
  );
}
