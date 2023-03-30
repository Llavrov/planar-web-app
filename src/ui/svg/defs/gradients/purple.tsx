import React from "react";

type Props = {};

const PurpleGradientDefs = (props: Props) => {
  return (
    <svg>
      <defs>
        <linearGradient
          id="purple-gradient"
          x1="2.72727"
          y1="1.36364"
          x2="13.1818"
          y2="13.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9D5AFF" />
          <stop offset="0.713542" stopColor="#C393FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PurpleGradientDefs;
