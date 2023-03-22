import React from "react";
import { ModalSelectToken } from "./select_token";
import {PlatformCardsModalContent} from "@/ui/components/modal/connect_wallet/platform_cards";

type Props = {};

export const ModalContainer = (props: Props) => {
  return (
    <section className="fixed p-3 flex justify-center items-center w-screen h-screen left-0 top-0">
      <PlatformCardsModalContent />
    </section>
  );
};
