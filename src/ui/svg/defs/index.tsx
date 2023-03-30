import React from "react";
import PurpleGradient from "./gradients/purple";
import SliderTabGradientDefs from "./gradients/slider";

export const SVGGlobalDefs = () => {
  return (
    <section className="fixed -z-10 h-[0px]">
      <PurpleGradient />
      <SliderTabGradientDefs />
    </section>
  );
};
