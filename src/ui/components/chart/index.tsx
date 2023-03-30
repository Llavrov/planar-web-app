import React from "react";
import { ChartComponent } from "@/ui/components/chart/Chart";

export function ChartContainer() {
  return (
    <section className="relative mr-auto ml-auto flex h-screen max-h-[568px] w-full shrink items-start">
      <ChartComponent />
    </section>
  );
}
