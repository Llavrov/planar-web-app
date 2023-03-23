import React, {useState} from 'react';
import {Logotype} from "@/ui/svg/logotype/logotype";

type Props = {

};

const TABS = ['Trade', 'Earn', 'Launchpad'];

export function Header(props: Props) {
    const [activeTab, setActiveTab] = useState('Trade');

    return (
        <section className="fixed flex flex-row w-full h-[102px] box-border pl-[60px] pr-[60px] justify-between items-center text-white
         bg-gradient-to-b from-[#171717] left-0 top-0 ">
            <section className="flex flex-row items-center">
                <Logotype />
                <section className="flex flex-row gap-[40px] ml-[60px]">
                    {TABS.map(tab => (
                        <section key={tab} className={`${activeTab !== tab && 'opacity-50'} text-white`}>{tab}</section>
                    ))}
                </section>
            </section>
            <section>Иконка 10201</section>
        </section>
    )
}