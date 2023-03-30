import React from "react";
import { ModalSelectToken } from "@/ui/components/modal/select_token";
import { ModalContainer } from "@/ui/components/modal";

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  icons?: React.ReactNode;
};

function SwapWidget({
  title,
  children,
  icons,
  maxWidth = "max-w-[460px]",
  maxHeight,
}: Props) {
  return (
    <section
      className={`flex w-full min-w-[300px] flex-col gap-4 rounded-3 border border-solid border-white10 bg-secondary p-4  backdrop-blur-bg ${maxHeight} ${maxWidth}`}
    >
      <header className="flex w-full flex-col">
        <section className="flex w-full items-center justify-between">
          <h1 className="text-heading-ss font-bold text-primary">{title}</h1>
          <section className="flex flex-row items-center">{icons}</section>
        </section>
      </header>
      {children}
    </section>
  );
}

export default SwapWidget;
