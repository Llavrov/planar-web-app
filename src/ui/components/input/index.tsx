import classNames from "classnames";
import React from "react";
export type InputProps = {
  placeholder?: string;
  iconLeft?: React.ReactNode;
};

export const Input = ({ placeholder, iconLeft }: InputProps) => {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className="relative w-full h-[50px]">
      <input
        value={value}
        onChange={handleChange}
        className={classNames(
          "py-3 pr-3 absolute outline-none w-full h-full bg-secondary rounded-input placeholder:text-input-text text-white text-text-s md:text-text-m leading-4", // 50 = 2 * 15px (padding) + 20px (input height)
          {
            "pl-3": !iconLeft,
            "pl-[45px]":
              !!iconLeft /* 45px = 15px (padding) + 20px (icon width) + 10px (icon margin) */,
          }
        )}
        placeholder={placeholder}
      />
      {iconLeft && (
        <section className="absolute left-3 top-3 h-3 w-3 md:h-4 md:w-4">
          {iconLeft}
        </section>
      )}
    </section>
  );
};
