import React from "react";

type Props = { children?: React.ReactNode };

export const ModalContainer = ({children}: Props) => {
  return (
    <section className="fixed p-3 flex justify-center items-center w-screen h-screen left-0 top-0">
        {children}
    </section>
  );
};
