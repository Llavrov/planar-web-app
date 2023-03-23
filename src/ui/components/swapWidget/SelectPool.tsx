import React from 'react';
import classNames from "classnames";
import styles from "./swap.module.scss";
import InfoIcon from "@/ui/icons/ui/info.svg";
import {Arrow} from "@/ui/svg/arrow";

type Props = {};

export function SelectPool(props: Props) {
    return (
        <section className={'flex flex-col gap-2'}>
            <span className="flex flex-row gap-2 text-tetriary text-text-s">Select pool type <InfoIcon className={classNames("h-3 w-3 cursor-pointer ", styles.Icon)} /></span>
            <section className="flex flex-row rounded-[8px] cursor-pointer p-[15px] text-tetriary text-text-s box-border w-full bg-tertiary h-[54px] items-center justify-between">
                Stable <Arrow />
            </section>
        </section>
    )
}