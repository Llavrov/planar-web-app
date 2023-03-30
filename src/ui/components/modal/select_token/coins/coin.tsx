import React from "react";
import { TCoin } from "@/ui/components/modal/select_token/coins/index";

type Props = TCoin;

const Coin = ({ icon, label }: Props) => {
  return (
    <button className="flex items-center gap-2 rounded-input bg-tertiary p-3 transition-opacity hover:opacity-50">
      <figure className="h-3 w-3 md:h-4 md:w-4">{icon}</figure>
      <span className="text-text-s text-secondary md:text-text-m">{label}</span>
    </button>
  );
};

export default Coin;
