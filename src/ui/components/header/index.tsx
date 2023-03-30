import React, { useState } from "react";
import { Logotype } from "@/ui/svg/logotype/logotype";
import { Button } from "@/ui/buttons/Button";
import { AccountIcon } from "@/ui/components/header/AccountIcon";
import { AccountIconSvg } from "@/ui/svg/platforms";
import MenuIconSVG from "@/ui/icons/ui/menu.svg";

interface Props {}

const TABS = ["Trade", "Earn", "Launchpad"];

export function Header(props: Props) {
  const [activeTab, setActiveTab] = useState("Trade");
  const [wallet, setWallet] = useState("");

  return (
    <section
      className="left-0 top-0 box-border h-[55px] w-full justify-center bg-darkHeader pl-[20px]
         pr-[20px] text-white md:h-[102px] md:bg-transparent md:bg-blackGradient "
    >
      <section className="m-auto box-border flex h-full w-full max-w-[1360px] flex-row items-center justify-between">
        <section className="m-auto flex flex-row items-center md:m-0">
          <Logotype />
          <section className="ml-[60px] hidden flex-row gap-[40px] md:flex">
            {TABS.map((tab) => (
              <section
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab !== tab && "opacity-50"
                } cursor-pointer text-white hover:opacity-100`}
              >
                {tab}
              </section>
            ))}
          </section>
        </section>
        <section className="hidden md:block">
          {wallet ? (
            <AccountIcon
              onClick={() => setWallet("")}
              icon={<AccountIconSvg />}
              balance={"35.12 MATIC"}
            />
          ) : (
            <Button
              onClick={() => setWallet("wallet")}
              title={"Connect wallet"}
              className="max-w-[147px] text-text-m pl-[16px] pr-[16px] h-[44px]"
            />
          )}
        </section>
        <MenuIconSVG className="absolute left-0 top-[5px] md:hidden" />
      </section>
    </section>
  );
}
