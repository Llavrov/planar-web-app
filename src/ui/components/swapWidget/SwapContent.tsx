import React, {useState} from 'react';
import {COINS, TCoin} from "@/ui/components/modal/select_token/coins";
import {SwapCard} from "@/ui/components/swapWidget/SwapCard";
import {SwapIcon} from "@/ui/components/swapWidget/SwapIcon";
import {Button} from "@/ui/buttons/Button";
import {LinkToConnect} from "@/ui/components/swapWidget/LinkToConnect";

type Props = {
    error?: boolean;
};

const CONNECT_WALLET = 'Connect Wallet to swap';
const CHANGE_TOKENS = 'Change tokens, as route wasn’t founded'

export function SwapContent({ error }: Props) {
    const [fromCoin, setFromCoin] = useState<TCoin>(COINS[0]);
    const [toCoin, setToCoin] = useState<TCoin>(COINS[1]);

    return (
        <>
            <section className={`flex flex-col gap-1`}>
                <SwapCard coin={fromCoin} />
                <SwapIcon type={error ? 'error' : 'transfer'} />
                <SwapCard coin={toCoin} bottom={true}/>
            </section>
            <Button
                type={error ? 'error' : 'primary'}
                size={'l'}
                fontSize={'text-text-s'}
                onClick={() => console.log('Connect Wallet to swap')}
                title={error ? CHANGE_TOKENS : CONNECT_WALLET}
            />
            <LinkToConnect title={'Connect wallet to farm this pair'} href={'/trade'}/>
        </>
    )
}
