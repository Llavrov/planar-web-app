import React from "react";

type Props = {
  balance: string;
};

export function Balance({ balance }: Props) {
  return (
    <section className="text-text-s text-secondary opacity-50">
      Balance: {balance}
    </section>
  );
}
