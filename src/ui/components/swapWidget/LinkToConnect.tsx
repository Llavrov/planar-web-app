import React from "react";

type Props = {
  href: string;
  title: string;
};

export function LinkToConnect({ href, title }: Props) {
  return (
    <a
      href={href}
      className={
        "w-full text-center text-text-s text-tetriary underline underline-offset-1 md:text-text-l"
      }
    >
      {title}
    </a>
  );
}
