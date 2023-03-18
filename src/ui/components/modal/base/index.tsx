import { CloseIcon } from "@/ui/buttons/close";
import React from "react";


type Props = { title: string; description?: string; children: React.ReactNode };

export const BaseModal = ({ title, description, children }: Props) => {
  return (
    <section className="p-4 flex backdrop-blur-bg flex-col gap-4 w-full rounded-3 bg-secondary max-w-lg h-full max-h-[600px]">
      <header className="flex flex-col w-full">
        <section className="flex w-full items-center justify-between">
          <h1 className="text-heading-s md:text-heading-l font-bold text-primary">
            {title}
          </h1>
          <CloseIcon />
        </section>
        {description && <p className="text-text-m mt-3">{description}</p>}
      </header>
      {children}
    </section>
  );
};
