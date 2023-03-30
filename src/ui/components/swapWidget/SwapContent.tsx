import React, { useState } from "react";
import { COINS, TCoin } from "@/ui/components/modal/select_token/coins";
import { SwapCard } from "@/ui/components/swapWidget/SwapCard";
import { SwapIcon } from "@/ui/components/swapWidget/SwapIcon";
import { Button } from "@/ui/buttons/Button";
import { LinkToConnect } from "@/ui/components/swapWidget/LinkToConnect";
import classNames from "classnames";

type Props = {
  error?: boolean;
  setModal: () => void;
  fromCoin: TCoin;
  toCoin: TCoin;
  buttonTitle?: string;
  linkTitle?: string;
};

const CONNECT_WALLET = "Connect Wallet to swap";
const CHANGE_TOKENS = "Change tokens, as route wasn’t founded";

export function SwapContent({
  error,
  setModal,
  fromCoin: fCoin,
  toCoin: tCoin,
  buttonTitle = CONNECT_WALLET,
  linkTitle = "Connect wallet to farm this pair",
}: Props) {
  const [fromCoin, setFromCoin] = useState<TCoin>(fCoin);
  const [toCoin, setToCoin] = useState<TCoin>(tCoin);

  return (
    <>
      <section className={`flex flex-col gap-1`}>
        <SwapCard setModal={setModal} coin={fromCoin} />
        <SwapIcon type={error ? "error" : "transfer"} />
        <SwapCard setModal={setModal} coin={toCoin} bottom={true} />
      </section>
      <Button
        type={error ? "error" : "primary"}
        size={"l"}
        fontSize={"text-text-s md:text-text-l"}
        onClick={() => alert("Connect Wallet to swap")}
        title={error ? CHANGE_TOKENS : buttonTitle}
        className={classNames({
          "opacity-50" : error
        })}
      />
      <LinkToConnect title={linkTitle} href={"/trade"} />
    </>
  );
}
