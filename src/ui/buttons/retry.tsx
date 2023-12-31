import React from "react";
import RetryIconSVG from "@/ui/icons/ui/retry.svg";
import classNames from "classnames";

type Props = {
  className?: string;
};

export const RetryIcon = ({ className }: Props) => {
  return (
    <a
      className={classNames(
        "cursor-pointer opacity-50 transition-opacity hover:opacity-100",
        className
      )}
    >
      <RetryIconSVG className="w-icon-2" />
    </a>
  );
};
