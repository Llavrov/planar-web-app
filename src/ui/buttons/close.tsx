import React from "react";
import CloseIconSVG from "@/ui/icons/ui/close.svg";
import classNames from "classnames";

type Props = {
  className?: string;
  onClick?: () => void;
};

export const CloseIcon = ({ onClick, className }: Props) => {
  return (
    <a
      onClick={onClick}
      className={classNames(
        "cursor-pointer opacity-50 hover:opacity-100 transition-opacity",
        className
      )}
    >
      <CloseIconSVG className="w-icon-2" />
    </a>
  );
};
