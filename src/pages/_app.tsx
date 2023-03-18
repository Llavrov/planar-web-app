import "@/styles/globals.scss";
import { Background } from "@/ui/bg";
import { ModalContainer } from "@/ui/components/modal";
import { SVGGlobalDefs } from "@/ui/svg/defs";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SVGGlobalDefs />
      <main className="min-h-screen w-full p-3">
        <Background />
        <ModalContainer />
        <section>
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}
