import { CloseIcon } from "@/ui/buttons/close";
import React from "react";


type Props = { title: string; description?: string; children: React.ReactNode, maxWidth: string, maxHeight: string };

export const BaseModal = ({ title, description, children, maxWidth, maxHeight }: Props) => {
  return (
    <section className={`p-4 flex backdrop-blur-bg flex-col gap-4 w-full rounded-3 border border-white10 border-solid  bg-secondary ${maxHeight} ${maxWidth}`}>
      <header className="flex flex-col w-full">
        <section className="flex w-full items-center justify-between">
          <h1 className="text-heading-s md:text-heading-l leading-[39px] font-bold text-primary">
            {title}
          </h1>
          <CloseIcon />
        </section>
        {description && <p className="text-text-m mt-3 leading-[19px] text-tetriary">{description}</p>}
      </header>
      {children}
    </section>
  );
};
