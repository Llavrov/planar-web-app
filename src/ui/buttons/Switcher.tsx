import React from 'react';

type Props = {
    active?: boolean;
    onClick: (active: boolean) => void;
}

export function Switcher({active, onClick}: Props) {
    return (
        <section onClick={() => onClick(!active)} className="flex items-center box-border p-[2px] w-[40px] h-[20px] bg-tertiary rounded-[10px]">
            <section className={`w-[16px] h-[16px] rounded-[8px] bg-primary-button duration-300 ${active && 'ml-[20px]'}`} />
        </section>
    )
}