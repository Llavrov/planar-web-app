import React, {useState} from 'react';
import {Logotype} from "@/ui/svg/logotype/logotype";
import {Button} from "@/ui/buttons/Button";
import {AccountIcon} from "@/ui/components/header/AccountIcon";
import {AccountIconSvg} from "@/ui/svg/platforms";
import MenuIconSVG from "@/ui/icons/ui/menu.svg";

type Props = {};

const TABS = ['Trade', 'Earn', 'Launchpad'];

export function Header(props: Props) {
    const [activeTab, setActiveTab] = useState('Trade');
    const [wallet, setWallet] = useState('');

    return (
        <section className="w-full h-[55px] md:h-[102px] box-border pl-[20px] pr-[20px] text-white justify-center
         bg-darkHeader md:bg-transparent md:bg-blackGradient left-0 top-0 ">
            <section className="flex flex-row box-border h-full w-full max-w-[1360px] m-auto justify-between items-center">
                <section className="flex flex-row items-center m-auto md:m-0">
                    <Logotype />
                    <section className="hidden md:flex flex-row gap-[40px] ml-[60px]">
                        {TABS.map(tab => (
                            <section
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`${activeTab !== tab && 'opacity-50'} cursor-pointer text-white hover:opacity-100`}
                            >
                                {tab}
                            </section>
                        ))}
                    </section>
                </section>
                <section className='hidden md:block'>
                    {
                        wallet ? (
                            <AccountIcon onClick={() => setWallet('')} icon={<AccountIconSvg />} balance={'35.12 MATIC'} />
                        ) : (
                            <Button onClick={() => setWallet('wallet')} title={'Connect wallet'} classNames='max-w-[147px] text-text-m pl-[16px] pr-[16px] h-[44px]' />
                        )
                    }
                </section>
                <MenuIconSVG className="md:hidden absolute left-0 top-[5px]" />
            </section>
        </section>
    )
}