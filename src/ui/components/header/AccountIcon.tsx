import React from "react";

type Props = {
  icon?: React.ReactNode;
  balance: string;
  onClick: () => void;
};

export function AccountIcon({ icon, balance, onClick }: Props) {
  return (
    <section
      onClick={onClick}
      className={
        "flex h-[44px] flex-row items-center gap-2 rounded-2 bg-account-primary pl-[16px] pr-[16px]"
      }
    >
      <section className="flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-account-bg">
        {icon}
      </section>
      <span className="text-text-s text-secondary">${balance}</span>
    </section>
  );
}
