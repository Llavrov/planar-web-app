import React, {useState} from 'react';
import {COINS, TCoin} from "@/ui/components/modal/select_token/coins";
import {SwapCard} from "@/ui/components/swapWidget/SwapCard";
import {SwapIcon} from "@/ui/components/swapWidget/SwapIcon";
import {RetryIcon} from "@/ui/buttons/retry";
import {SelectPool} from "@/ui/components/swapWidget/SelectPool";
import {Button} from "@/ui/buttons/Button";

type Props = {
    error?: boolean;
};

export function LiquidityPoolContent({ error }: Props) {
    const [fromCoin, setFromCoin] = useState<TCoin>(COINS[0]);
    const [toCoin, setToCoin] = useState<TCoin>(COINS[1]);

    return (
        <section className={`flex flex-col gap-4`}>
            <span className="text-text-s text-tetriary">Create a new liquidity pool</span>
            <section className="flex justify-between items-center">
                <span className="text-heading-ss text-white">Create position</span>
                <RetryIcon />
            </section>
            <section className="flex flex-col gap-1">
                <SwapCard coin={fromCoin} setModal={() => ''} />
                <SwapIcon type={error ? 'error' : 'transfer'} />
                <SwapCard coin={toCoin} bottom={true} setModal={() => ''}/>
            </section>
            <SelectPool />
            <section className="text-text-s text-tetriary">
                By adding liquidity you&apos;ll earn 0.3% of all trades on
                this pair proportional to your share of the pool.
            </section>
            <Button onClick={() => console.log("Aprove")} title={'Approve'} size={'l'}/>
        </section>
    )
}
