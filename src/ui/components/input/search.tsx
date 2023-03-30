import React from "react";
import { Input, InputProps } from "@/ui/components/input";
import SearchIcon from "@/ui/icons/ui/search.svg";

type Props = InputProps;

export const SearchInput = (props: Props) => {
  return (
    <Input iconLeft={<SearchIcon className="h-full w-full" />} {...props} />
  );
};
