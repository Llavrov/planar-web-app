import React from 'react';
import {ChartComponent} from "@/ui/components/chart/Chart";

export function ChartContainer() {

    return (
        <section className="flex items-start shrink relative max-h-[568px] h-screen mr-auto ml-auto w-full">
            <ChartComponent />
        </section>
    )
}