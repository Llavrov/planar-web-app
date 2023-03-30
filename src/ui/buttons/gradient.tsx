import classNames from "classnames";
import InfoIcon from "@/ui/icons/ui/info.svg";
import styles from "@/ui/components/slider/tab.module.scss";
import React from "react";
import { SliderGradientBorder } from "@/ui/svg/border/slider_gradient_border";

type Props = {
  title: string;
  handleClick?: () => void;
  onClickInfo?: () => void;
};

export function GradientButton({ onClickInfo, handleClick, title }: Props) {
  return (
    <section
      onClick={handleClick}
      className="relative flex cursor-pointer items-center gap-[8px] px-[12px] py-[6px] md:px-[16px] md:py-[12px]"
    >
      <figure
        className={classNames("absolute left-0 h-full transition-all")}
        style={{ width: "140px" }}
      >
        <SliderGradientBorder />
      </figure>
      <a className="cursor-pointer text-text-sm text-tetriary !text-secondary transition-colors hover:text-secondary">
        {title}
      </a>
      <button
        onClick={onClickInfo}
        className="transition-opacity hover:opacity-50"
      >
        <InfoIcon
          className={classNames(
            "h-3 w-3",
            styles.tabIcon,
            styles.tabIconActive
          )}
        />
      </button>
    </section>
  );
}
