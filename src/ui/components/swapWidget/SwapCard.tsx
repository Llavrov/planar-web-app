import React from "react";
import { TokenIcon } from "@/ui/components/swapWidget/TokenIcon";
import { TCoin } from "@/ui/components/modal/select_token/coins";
import { Balance } from "@/ui/components/swapWidget/Balance";
import { SwapCardPrice } from "@/ui/components/swapWidget/Price";
import { PricePercents } from "@/ui/components/swapWidget/PricePercents";

export type TBalance = string;
export type TPrice = {
  value: string;
  price: string;
};

type Props = {
  price?: TPrice;
  balance?: TBalance;
  coin: TCoin;
  bottom?: boolean;
  setModal: () => void;
};

// TODO: select token icon

export function SwapCard({ coin, bottom = false, setModal }: Props) {
  return (
    <section
      className={`box-border flex w-full flex-col gap-4 rounded-2 border border-solid border-secondary bg-tertiary p-4`}
    >
      <section
        className={`flex max-h-[32px] w-full flex-row items-center justify-between ${
          bottom && "mt-[10px]"
        }`}
      >
        <TokenIcon setModal={setModal} icon={coin?.icon} label={coin.label} />
        <Balance balance={"0.000000"} />
      </section>
      <SwapCardPrice value={"0.00"} price={"0.00"} />
      {!bottom && <PricePercents />}
    </section>
  );
}
