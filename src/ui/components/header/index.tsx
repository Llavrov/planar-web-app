import React, {useState} from 'react';
import {Logotype} from "@/ui/svg/logotype/logotype";
import {Button} from "@/ui/buttons/Button";
import {AccountIcon} from "@/ui/components/header/AccountIcon";
import {AccountIconSvg} from "@/ui/svg/platforms";

type Props = {

};

const TABS = ['Trade', 'Earn', 'Launchpad'];

export function Header(props: Props) {
    const [activeTab, setActiveTab] = useState('Trade');
    const [wallet, setWallet] = useState('');

    return (
        <section className="fixed z-10  w-full h-[102px] box-border pl-[60px] pr-[60px] text-white justify-center
         bg-black-gradient left-0 top-0 ">
            <section className="flex flex-row box-border h-full w-full max-w-[1360px] m-auto justify-between items-center">
                <section className="flex flex-row items-center">
                    <Logotype />
                    <section className="flex flex-row gap-[40px] ml-[60px]">
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
                {
                    wallet ? (
                        <AccountIcon icon={<AccountIconSvg />} balance={'35.12 MATIC'} />
                    ) : (
                        <Button title={'Connect wallet'} classNames={'max-w-[147px] text-text-m pl-[16px] pr-[16px] h-[44px]'} />
                    )
                }
            </section>
        </section>
    )
}