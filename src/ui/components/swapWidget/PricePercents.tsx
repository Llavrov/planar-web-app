import React from 'react';

type Props = {};

const PERCENTS = ['25%', '50%', '75%', '100%'];

export function PricePercents(props: Props) {
    return (
        <section className="flex flex-row gap-1 mb-[10px]">
            {PERCENTS.map((percent, index) => (
                <section
                    key={percent + index}
                    className="flex rounded-[4px] cursor-pointer items-center justify-center h-[35px] w-full text-white bg-dark text-text-s"
                >
                    {percent}
                </section>
            ))}
        </section>
    )
}