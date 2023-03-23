import "@/styles/globals.scss";
import { Background } from "@/ui/bg";
import { ModalContainer } from "@/ui/components/modal";
import { SVGGlobalDefs } from "@/ui/svg/defs";
import type { AppProps } from "next/app";
import {Header} from "@/ui/components/header";
import {PlatformCardsModalContent} from "@/ui/components/modal/connect_wallet/platform_cards";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SVGGlobalDefs />
      <main className="min-h-screen w-full p-3">
        <Background />
        <Header />
          <ModalContainer>
              <PlatformCardsModalContent />
          </ModalContainer>
        <section>
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}
