import React from 'react';
import {TokenIcon} from "@/ui/components/swapWidget/TokenIcon";
import {TCoin} from "@/ui/components/modal/select_token/coins";
import {Balance} from "@/ui/components/swapWidget/Balance";
import {SwapCardPrice} from "@/ui/components/swapWidget/Price";
import {PricePercents} from "@/ui/components/swapWidget/PricePercents";

export type TBalance = string;
export type TPrice = {
    value: string,
    price: string,
}

type Props = {
    price?: TPrice;
    balance?: TBalance;
    coin: TCoin;
    bottom?: boolean;
};

// TODO: select token icon

export function SwapCard({coin, bottom = false}: Props) {
    return (
        <section className={`flex flex-col gap-4 bg-tertiary w-full p-4 box-border rounded-2 border border-secondary border-solid`}>
            <section className={`flex flex-row w-full justify-between items-center max-h-[32px] ${bottom && 'mt-[10px]'}`}>
                <TokenIcon icon={coin?.icon} label={coin.label}/>
                <Balance balance={'0.000000'} />
            </section>
            <SwapCardPrice value={'0.00'} price={'0.00'}/>
            {!bottom && <PricePercents/>}
        </section>
    )
}