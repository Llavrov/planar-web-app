import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type Props = {
  children?: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
};

export const ModalContainer = ({ children, show, onClose }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <section
      onClick={onClose}
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-dark p-3"
    >
      {children}
    </section>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as Element | DocumentFragment
    );
  } else {
    return null;
  }
};
