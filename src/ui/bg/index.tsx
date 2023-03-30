import React from "react";
import TopGraphic from "./top.svg";
import BottomGraphic from "./bottom.svg";

export const Background = () => {
  return (
    <section className="h-[0px]">
      <figure className="fixed left-0 top-0 -z-10 flex h-screen min-h-screen w-screen flex-col justify-between bg-page-bg">
        <TopGraphic className="min-h-[240px] w-full" />
        <BottomGraphic className="min-h-[240px] w-full" />
      </figure>
    </section>
  );
};
