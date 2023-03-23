import React from 'react';
import {Arrow} from "@/ui/svg/arrow";

type Props = {
    icon: React.ReactNode;
    label: string;
}

export function TokenIcon({icon, label}: Props) {
    return (
        <a href={'/select-token'} className="flex flex-row gap-2 max-h-[32px] cursor-pointer">
            <figure className="w-5 h-5 md:w-[32px] md:h-[32px]">{icon}</figure> <span className="flex text-white flex-row items-center gap-1">{label} <Arrow /></span>
        </a>
    )
}