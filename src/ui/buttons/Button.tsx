import React from "react";
import VideoIconSVG from "@/ui/icons/ui/video.svg";

type Props = {
  type?: "primary" | "secondary" | "error";
  size?: "m" | "l" | "s";
  disabled?: boolean;
  icon?: "video";
  classNames?: string;
  fontSize?: string;
  onClick: () => void;
  title: string;
};

export function Button({
  type = "primary",
  size = "m",
  fontSize = "",
  disabled = false,
  icon,
  classNames = "",
  onClick,
  title = "",
}: Props) {
  classNames +=
    " flex items-center justify-center w-full cursor-pointer rounded-2 text-primary duration-300";
  let color =
    type === "primary"
      ? "bg-primary-button"
      : type === "secondary"
      ? "bg-secondary-button"
      : "bg-error-gradient";
  let opacity = disabled ? "opacity-50" : "";
  let hover =
    type === "primary"
      ? "hover:bg-primary-button-hover"
      : type === "secondary"
      ? "hover:bg-secondary-button-hover"
      : "";
  let height =
    size === "l"
      ? "h-[62px]"
      : size === "m"
      ? "h-[49px]"
      : "h-[49px] text-text-s";
  let iconImage = !!icon && <VideoIconSVG className="w-icon-2" />;

  return (
    <section
      onClick={onClick}
      className={`${classNames} ${fontSize} ${color} ${height} ${
        !disabled && hover
      } ${opacity}`}
    >
      {iconImage}
      {title}
    </section>
  );
}
