import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import {Layout} from "@/ui/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="min-h-screen w-full">
        <section>
          <Layout >
              <Component {...pageProps} />
          </Layout>
        </section>
      </main>
    </>
  );
}
