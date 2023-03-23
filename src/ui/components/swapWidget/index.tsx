import React from 'react';

type Props = {
    title: string;
    description?: string;
    children: React.ReactNode;
    maxWidth?: string;
    maxHeight?: string;
    icons?: React.ReactNode;
};

function SwapWidget({ title, children, icons, maxWidth = 'max-w-[460px]', maxHeight }: Props) {

    return (
        <section className={`p-4 flex backdrop-blur-bg flex-col gap-4 w-full rounded-3 border border-white10 border-solid  bg-secondary ${maxHeight} ${maxWidth}`}>
            <header className="flex flex-col w-full">
                <section className="flex w-full items-center justify-between">
                    <h1 className="text-heading-ss font-bold text-primary">
                        {title}
                    </h1>
                    <section className="flex flex-row items-center">
                        {icons}
                    </section>
                </section>
            </header>
            {children}
        </section>
    )
}

export default SwapWidget;