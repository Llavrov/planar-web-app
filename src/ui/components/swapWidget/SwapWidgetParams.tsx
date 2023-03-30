import React from "react";

type Props = {
  params: Array<{
    name: string;
    value: string;
  }>;
};

export function SwapWidgetParams({ params }: Props) {
  return (
    <section
      className={`box-border flex w-full max-w-[460px] flex-col gap-2 p-4`}
    >
      {params.map(({ name, value }) => (
        <section
          key={name + value}
          className="flex w-full flex-row justify-between text-white"
        >
          <span className="text-text-s leading-3 text-tetriary">{name}</span>
          <span className="text-text-s leading-3 text-white">{value}</span>
        </section>
      ))}
    </section>
  );
}
