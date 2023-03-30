import React from "react";
import classNames from "classnames";
import styles from "./swap.module.scss";
import InfoIcon from "@/ui/icons/ui/info.svg";
import { Arrow } from "@/ui/svg/arrow";

type Props = {};

export function SelectPool(props: Props) {
  return (
    <section className={"flex flex-col gap-2"}>
      <span className="flex flex-row gap-2 text-text-s text-tetriary">
        Select pool type{" "}
        <InfoIcon
          className={classNames("h-3 w-3 cursor-pointer ", styles.Icon)}
        />
      </span>
      <section className="box-border flex h-[54px] w-full cursor-pointer flex-row items-center justify-between rounded-[8px] bg-tertiary p-[15px] text-text-s text-tetriary">
        Stable <Arrow />
      </section>
    </section>
  );
}
