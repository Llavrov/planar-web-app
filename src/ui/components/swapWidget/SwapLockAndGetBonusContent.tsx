import React, { useState } from "react";
import { COINS, TCoin } from "@/ui/components/modal/select_token/coins";
import { SwapCard } from "@/ui/components/swapWidget/SwapCard";
import { SwapIcon } from "@/ui/components/swapWidget/SwapIcon";
import { Button } from "@/ui/buttons/Button";
import { Switcher } from "@/ui/buttons/Switcher";
import InfoIcon from "@/ui/icons/ui/info.svg";
import classNames from "classnames";
import styles from "@/ui/components/swapWidget/swap.module.scss";

type Props = {
  error?: boolean;
  setModal?: () => void;
  fromCoin: TCoin;
  toCoin: TCoin;
  buttonTitle?: string;
  linkTitle?: string;
};

export function SwapLockAndGetBonusContent({
  error,
  setModal,
  fromCoin: fCoin,
  toCoin: tCoin,
  linkTitle = "Connect wallet to farm this pair",
}: Props) {
  const [fromCoin, setFromCoin] = useState<TCoin>(fCoin);
  const [toCoin, setToCoin] = useState<TCoin>(tCoin);
  const [active, setActive] = useState(false);

  return (
    <>
      <section className={`flex flex-col gap-1`}>
        <SwapCard coin={fromCoin} setModal={() => ""} />
        <SwapIcon type={error ? "error" : "transfer"} />
        <SwapCard coin={toCoin} bottom={true} setModal={() => ""} />
      </section>
      <section className="flex flex-row items-center gap-2">
        <span className="flex flex-row gap-2 text-text-s text-tetriary">
          Lock and get bonus{" "}
          <InfoIcon
            className={classNames("h-3 w-3 cursor-pointer ", styles.Icon)}
          />
        </span>
        <Switcher active={active} onClick={setActive} />
      </section>
      <Button
        type={error ? "error" : "primary"}
        size={"l"}
        fontSize={"text-text-s"}
        onClick={() => console.log("Connect Wallet to swap")}
        title={"Approve"}
      />
    </>
  );
}
