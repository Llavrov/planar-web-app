import React from "react";
import CloseIconSVG from "@/ui/icons/ui/close.svg";
import classNames from "classnames";

type Props = {
  className?: string;
};

export const CloseIcon = ({ className }: Props) => {
  return (
    <a
      className={classNames(
        "cursor-pointer opacity-50 hover:opacity-100 transition-opacity",
        className
      )}
    >
      <CloseIconSVG className="w-icon-2" />
    </a>
  );
};
