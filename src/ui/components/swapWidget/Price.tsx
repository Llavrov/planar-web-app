import React from "react";

type Props = {
  value: string;
  price: string;
};

export function SwapCardPrice({ value, price }: Props) {
  return (
    <section className={"flex flex-col gap-1"}>
      <span className="text-heading-s text-primary">{value}</span>
      <span className="text-text-s text-secondary">${price}</span>
    </section>
  );
}
