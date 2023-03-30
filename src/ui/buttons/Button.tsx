import React from "react";
import VideoIconSVG from "@/ui/icons/ui/video.svg";
import classNames from "classnames";

type Props = {
  type?: "primary" | "secondary" | "error";
  size?: "m" | "l" | "s";
  disabled?: boolean;
  icon?: "video";
  className?: string;
  fontSize?: string;
  onClick: () => void;
  title: string;
};

export function Button({
  type = "primary",
  size = "m",
  fontSize,
  disabled = false,
  icon,
  className,
  onClick,
  title,
}: Props) {
  const baseClassNames =
    "flex items-center justify-center w-full cursor-pointer rounded-2 text-primary duration-300";
  const color = classNames({
    "bg-primary-button": type === "primary",
    "bg-secondary-button": type === "secondary",
    "bg-error-gradient": type === "error",
  });
  const opacity = classNames({
    "opacity-50": disabled,
  });
  const hover = classNames({
    "hover:bg-primary-button-hover": type === "primary",
    "hover:bg-secondary-button-hover": type === "secondary",
    // "hover:bg-error-gradient-hover": type === "error",
  });
  const height = classNames({
    "h-[62px]": size === "l",
    "h-[49px]": size === "m" || size === "s",
    "text-text-s": size === "s",
  });
  const iconImage = !!icon && <VideoIconSVG className="w-icon-2" />;

  return (
    <section
      onClick={onClick}
      className={classNames(
        baseClassNames,
        className,
        fontSize,
        color,
        height,
        opacity,
        {
          [hover]: !disabled,
        }
      )}
    >
      {iconImage}
      {title}
    </section>
  );
}
