import React from "react";
import { Arrow } from "@/ui/svg/arrow";

type Props = {
  icon: React.ReactNode;
  label: string;
  setModal: () => void;
};

export function TokenIcon({ icon, label, setModal }: Props) {
  return (
    <a
      onClick={setModal}
      className="flex max-h-[32px] cursor-pointer flex-row gap-2"
    >
      <figure className="h-5 w-5 md:h-[32px] md:w-[32px]">{icon}</figure>{" "}
      <span className="flex flex-row items-center gap-1 text-text-l-bold text-white">
        {label} <Arrow />
      </span>
    </a>
  );
}
