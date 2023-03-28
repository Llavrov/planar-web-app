import React from "react";
import PurpleGradient from "./gradients/purple";
import SliderTabGradientDefs from "./gradients/slider";

export const SVGGlobalDefs = () => {
  return (
    <section className="h-[0px] fixed -z-10">
      <PurpleGradient />
      <SliderTabGradientDefs />
    </section>
  );
};
