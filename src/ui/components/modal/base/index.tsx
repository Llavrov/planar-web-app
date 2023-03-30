import { CloseIcon } from "@/ui/buttons/close";
import React, { MouseEventHandler } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  description?: string;
  maxWidth?: string;
  maxHeight?: string;
  onClose: () => void;
};

export const BaseModal = ({
  title,
  onClose,
  description,
  children,
  maxWidth,
  maxHeight,
}: Props) => {
  // @ts-ignore
  const handleClickBaseModal = (event) => {
    event.stopPropagation();
  };

  return (
    <section
      onClick={handleClickBaseModal}
      className={`flex w-full flex-col gap-4 rounded-3 border border-solid border-white10 bg-secondary p-4  backdrop-blur-bg ${maxHeight} ${maxWidth}`}
    >
      <header className="flex w-full flex-col">
        <section className="flex w-full items-center justify-between">
          <h1 className="text-heading-s font-bold leading-[39px] text-primary md:text-heading-l">
            {title}
          </h1>
          <CloseIcon onClick={onClose} />
        </section>
        {description && (
          <p className="mt-3 text-text-m leading-[19px] text-tetriary">
            {description}
          </p>
        )}
      </header>
      {children}
    </section>
  );
};
