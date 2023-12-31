import React from "react";
import SettingsIconSVG from "@/ui/icons/ui/settings.svg";
import classNames from "classnames";

type Props = {
  className?: string;
};

export const SettingsIcon = ({ className }: Props) => {
  return (
    <a
      className={classNames(
        "cursor-pointer opacity-50 transition-opacity hover:opacity-100",
        className
      )}
    >
      <SettingsIconSVG className="w-icon-2" />
    </a>
  );
};
