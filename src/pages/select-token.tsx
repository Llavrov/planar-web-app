import { Background } from "@/ui/bg";
import { SVGGlobalDefs } from "@/ui/svg/defs";
import {Header} from "@/ui/components/header";
import {ModalContainer} from "@/ui/components/modal";
import React from "react";
import {ModalSelectToken} from "@/ui/components/modal/select_token";

export default function SelectToken() {
    return (
        <>
            <SVGGlobalDefs />
            <main className="min-h-screen w-full p-3">
                <Background />
                <Header />
                <ModalContainer>
                    <ModalSelectToken />
                </ModalContainer>
            </main>
        </>
    );
}
