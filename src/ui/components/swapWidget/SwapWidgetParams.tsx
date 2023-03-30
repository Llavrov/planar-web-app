import React from 'react';

type Props = {
    params: Array<{
        name: string;
        value: string;
    }>
};

export function SwapWidgetParams({params}: Props) {
    return (
        <section className={`flex flex-col max-w-[460px] gap-2 w-full p-4 box-border`}>
            {params.map(({name, value}) => (
                <section key={name+value} className="flex flex-row w-full text-white justify-between">
                    <span className="text-tetriary leading-3 text-text-s">{name}</span>
                    <span className="text-white leading-3 text-text-s">{value}</span>
                </section>
            ))}
        </section>
    )
}