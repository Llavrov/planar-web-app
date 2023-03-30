import React from "react";

type Props = {
  active?: boolean;
  onClick: (active: boolean) => void;
};

export function Switcher({ active, onClick }: Props) {
  return (
    <section
      onClick={() => onClick(!active)}
      className="box-border flex h-[20px] w-[40px] items-center rounded-[10px] bg-tertiary p-[2px]"
    >
      <section
        className={`h-[16px] w-[16px] rounded-[8px] bg-primary-button duration-300 ${
          active && "ml-[20px]"
        }`}
      />
    </section>
  );
}
