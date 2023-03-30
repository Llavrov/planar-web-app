import React from 'react';

type Props = {
    href: string;
    title: string;
}

export function LinkToConnect({href, title}: Props) {
    return (
        <a href={href} className={"text-text-s md:text-text-l text-tetriary underline underline-offset-1 w-full text-center"}>
            {title}
        </a>
    )
}