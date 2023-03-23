import React from 'react';

type Props = {
    value: string;
    price: string;
}

export function SwapCardPrice({value, price}: Props) {
    return (
        <section className={'flex flex-col gap-1'}>
            <span className="text-primary text-heading-s">{value}</span>
            <span className="text-secondary text-text-s">${price}</span>
        </section>
    )
}