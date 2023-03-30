import React from "react";
import StarIcon from "@/ui/icons/ui/star.svg";

type Props = {
  symbol: string;
  label: string;
  balance: string;
  icon: React.ReactNode;
};

const BalanceRow = ({ icon, symbol, label, balance }: Props) => {
  return (
    <section className="flex items-center justify-between">
      <section className="flex items-center gap-2">
        <StarIcon className="h-4 w-4" />
        {icon}
        <section className="flex flex-col">
          <span className="text-text-s font-semibold text-white">{symbol}</span>
          <span className="text-text-s text-white text-opacity-80">
            {label}
          </span>
        </section>
      </section>
      <span className="text-text-s text-white text-opacity-80">{balance}</span>
    </section>
  );
};

export default BalanceRow;
