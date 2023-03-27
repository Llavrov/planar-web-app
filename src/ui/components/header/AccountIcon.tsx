import React from 'react';

type Props = {
    icon?: React.ReactNode;
    balance: string;
}

export function AccountIcon({icon, balance}: Props) {
    return (
        <section className={'flex flex-row items-center gap-2 bg-account-primary rounded-2 pl-[16px] pr-[16px] h-[44px]'}>
            <section className="flex items-center justify-center bg-account-bg rounded-[12px] w-[24px] h-[24px]">{icon}</section>
            <span className="text-secondary text-text-s">${balance}</span>
        </section>
    )
}