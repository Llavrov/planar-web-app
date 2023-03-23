import React from 'react';
import TransferIcon from '@/ui/icons/ui/download.svg';
import ErrorIcon from '@/ui/icons/ui/error.svg';

type Props = {
    type?: 'transfer' | 'error';
}

const ICONS = {
    transfer: {
        icon: <TransferIcon />
    },
    error: {
        icon: <ErrorIcon />
    }
}

export function SwapIcon({type = 'transfer'}: Props) {
    return (
        <section className={'flex h-[1px] w-full justify-center'}>
            <section className="mt-[-20px]">
                {ICONS[type]['icon']}
            </section>
        </section>
    )
}
