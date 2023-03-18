import React from "react";
import BalanceRow from "./balance";
import ETHIcon from "@/ui/icons/coins/eth.svg";
import USDCIcon from "@/ui/icons/coins/usdc.svg";
import DAIIcon from "@/ui/icons/coins/dai.svg";
import WETHIcon from "@/ui/icons/coins/wicc.svg";

type Props = {};

const balances = [
  {
    symbol: "ETH",
    label: "Ethereum",
    balance: "0.25",
    icon: <ETHIcon className="h-7 w-7" />,
  },
  {
    symbol: "USDC",
    label: "USD Coin (Stablecoin)",
    balance: "2,235.85",
    icon: <USDCIcon className="h-7 w-7" />,
  },
  {
    symbol: "DAI",
    label: "DAI (Stablecoin)",
    balance: "1,325.78",
    icon: <DAIIcon className="h-7 w-7" />,
  },
  {
    symbol: "WETH",
    label: "Wraped Ethereum",
    balance: "45.987",
    icon: <WETHIcon className="h-7 w-7" />,
  },
];

const Balances = (props: Props) => {
  return (
    <section className="flex flex-col gap-3">
      {balances.map(({ symbol, label, balance, icon }) => (
        <BalanceRow
          symbol={symbol}
          label={label}
          balance={balance}
          icon={icon}
          key={symbol}
        />
      ))}
    </section>
  );
};

export default Balances;
