import React from "react";

import Coin from "./coin";

import DAIIcon from "@/ui/icons/coins/dai.svg";
import ETHIcon from "@/ui/icons/coins/eth.svg";
import OSTIcon from "@/ui/icons/coins/ost.svg";
import RLCIcon from "@/ui/icons/coins/rlc.svg";
import USDCIcon from "@/ui/icons/coins/usdc.svg";
import USDTIcon from "@/ui/icons/coins/usdt.svg";
import WBTCIcon from "@/ui/icons/coins/wbtc.svg";
import WICCCoin from "@/ui/icons/coins/wicc.svg";

export type TCoin = {
  icon: React.ReactNode;
  label: string;
};

export const COINS = [
  {
    icon: <ETHIcon />,
    label: "ETH",
  },
  {
    icon: <USDCIcon />,
    label: "USDC",
  },
  {
    icon: <USDTIcon />,
    label: "USDT",
  },
  {
    icon: <RLCIcon />,
    label: "BUSD",
  },
  {
    icon: <DAIIcon />,
    label: "DAI",
  },
  {
    icon: <OSTIcon />,
    label: "OS",
  },
  {
    icon: <WBTCIcon />,
    label: "WBTC",
  },
  {
    icon: <WICCCoin />,
    label: "WETH",
  },
];

interface Props {}

const Coins = (props: Props) => {
  return (
    <div className="flex w-full flex-wrap gap-3">
      {COINS.map((coin, index) => (
        <Coin key={index} icon={coin.icon} label={coin.label} />
      ))}
    </div>
  );
};

export default Coins;
