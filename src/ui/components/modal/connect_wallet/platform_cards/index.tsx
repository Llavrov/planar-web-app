import React from 'react';
import {BaseModal} from "@/ui/components/modal/base";
import {CoinBaseIcon, MetamaskIcon, WalletConnectIcon} from "@/ui/svg/platforms";
import {PlatformCard} from "@/ui/components/modal/connect_wallet/platform_cards/PlatformCard";
import Coins from "@/ui/components/modal/select_token/coins";
import {Button} from "@/ui/buttons/Button";

type TPlatformCard = {
    title: string,
    description: string,
    img: JSX.Element,
}

type TPlatformCardArray = Array<TPlatformCard>;

const PLATFORM_CARDS: TPlatformCardArray = [
    {
        title: "MetaMask",
        description: "If you have Metamask wallet in your browser, click here",
        img: MetamaskIcon(),
    },
    {
        title: "WalletConnect",
        description: "If you have rainbow, trust wallet or other wallet on your phone, click here",
        img: WalletConnectIcon(),
    },
    {
        title: "Coinbase Wallet",
        description: "If you use coinbase wallet, click here",
        img: CoinBaseIcon(),
    }
];

export function PlatformCardsModalContent() {
    return (
        <BaseModal
            title={"Connect Wallet"}
            description={"You need to connect your Web3 wallet to access the swap features"}
            maxWidth={'sm:max-w-modal_lg'}
            maxHeight={'sm:max-h-[654px]'}
        >
            <section className="flex flex-wrap flex-row gap-4">
                {
                    PLATFORM_CARDS.map(({title, description, img}, index) => (
                        <PlatformCard key={index + title} title={title} img={img} description={description} />
                    ))
                }
            </section>
            <Button title={'Don’t have a wallet, watch our tutorial on wallets'} onClick={() => console.log('click')} />
        </BaseModal>
    )
}
