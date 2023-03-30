import React from "react";
import { Header } from "@/ui/components/header";
import { Background } from "@/ui/bg";
import { SVGGlobalDefs } from "@/ui/svg/defs";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <SVGGlobalDefs />
      <Background />
    </>
  );
}
