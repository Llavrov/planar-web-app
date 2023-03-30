import React from "react";

interface Props {}

const PERCENTS = ["25%", "50%", "75%", "100%"];

export function PricePercents(props: Props) {
  return (
    <section className="mb-[10px] flex flex-row gap-1">
      {PERCENTS.map((percent, index) => (
        <section
          key={percent + index}
          className="flex h-[35px] w-full cursor-pointer items-center justify-center rounded-[4px] bg-dark text-text-s text-white"
        >
          {percent}
        </section>
      ))}
    </section>
  );
}
