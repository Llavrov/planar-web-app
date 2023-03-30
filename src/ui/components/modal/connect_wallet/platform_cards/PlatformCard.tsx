import React from "react";

type Props = {
  img: JSX.Element;
  title: string;
  description: JSX.Element;
};

export function PlatformCard({ img, title, description }: Props) {
  return (
    <section
      className="box-border flex min-h-card_m
            w-full cursor-pointer flex-col items-center
            justify-center rounded-3 bg-tertiary p-3 hover:opacity-50 sm:max-w-card_m"
    >
      {img}
      <span className="mt-2 mb-2 text-text-l text-white">{title}</span>
      <span className="text-center text-text-s text-white text-opacity-50">
        {description}
      </span>
    </section>
  );
}
