import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

type Props = {
  children?: React.ReactNode,
  show?: boolean,
  onClose?: () => void
};

export const ModalContainer = ({children, show, onClose}: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
      <section onClick={onClose} className="fixed p-3 flex justify-center bg-dark items-center w-screen h-screen left-0 top-0">
        {children}
      </section>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
