import React from 'react';

type Props = {
    img: JSX.Element,
    title: string,
    description: JSX.Element,
};

export function PlatformCard({img, title, description}: Props) {
    return (
        <section
            className="flex hover:opacity-50 items-center
            cursor-pointer justify-center bg-tertiary box-border
            flex-col w-full sm:max-w-card_m min-h-card_m rounded-3 p-3"
        >
            {img}
            <span className="text-text-l mt-2 mb-2 text-white">{title}</span>
            <span className="text-text-s text-center text-white text-opacity-50">{description}</span>
        </section>
    )
}
