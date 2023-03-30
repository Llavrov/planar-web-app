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
    <section className="relative h-[50px] w-full">
      <input
        value={value}
        onChange={handleChange}
        className={classNames(
          "absolute h-full w-full rounded-input bg-secondary py-3 pr-3 text-text-s leading-4 text-white outline-none placeholder:text-input-text md:text-text-m", // 50 = 2 * 15px (padding) + 20px (input height)
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
