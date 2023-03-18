import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
};

const Coin = ({ icon, label }: Props) => {
  return (
    <button className="flex items-center gap-2 p-3 rounded-input bg-tertiary transition-opacity hover:opacity-50">
      <figure className="w-3 h-3 md:w-4 md:h-4">{icon}</figure>
      <span className="text-text-s md:text-text-m text-secondary">{label}</span>
    </button>
  );
};

export default Coin;
