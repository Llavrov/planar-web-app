import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import {Slider} from "@/ui/components/slider";
import {CloseIcon} from "@/ui/buttons/close";
import {ChartBackground} from "@/ui/svg/chartBackground";
import {externalTooltipHandler} from "@/ui/components/chart/externalTooltipHandler";

ChartJS.register(
    CategoryScale, // x-axis
    LinearScale, // y-axis
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

enum Tabs {
    Price = 'Price',
    TVL = 'TVL',
    Volume = 'Volume',
}

function getGradient() {
    const canvas = document.getElementById('canvas');

    // @ts-ignore
    const ctx = canvas?.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(161, 88, 255, 0.82)');
    gradient.addColorStop(1, 'rgba(78, 79, 255, .03)');

    return gradient;
}

const options = {
    plugins: {
        legend: true,
        tooltip: {
            enabled: false,
            position: 'nearest',
            external: externalTooltipHandler
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    hover: {
        mode: 'y',
        intersect: true
    },
    scales: {
        y: {
            min: 1,
            max: 50,
            display: false
        },
        x: {
            display: false
        }
    }
};

const LABELS: Array<string> = [];
LABELS.length = 30;
LABELS.fill('Mar 7, 2023, 12:53:31 a.m.');

const POINTS = [9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27, 9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27];

export function ChartComponent() {
    const [chartData, setChartData] = useState<any>({datasets:[]});

    const [chartOptions, setChartOptions] = useState(options);

    useEffect(() => {

        setChartData({
            labels: LABELS,
            datasets: [{
                    data: POINTS,
                    fill: 'start',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-2',
                    backgroundColor: getGradient(),
                    borderColor: '#9D5AFF',
                    borderWidth: 1,
                    tension: 0.5,
                    pointRadius: .1
                }]
        });
        setChartOptions(options);
    }, []);

    return (
        <section className="flex relative items-end justify-center bg-secondary rounded-2 h-full max-h-[574px] shrink">
            <section className="absolute top-4 left-4 flex justify-between w-[calc(100%-40px)]">
                <Slider tabs={Tabs} />
                <CloseIcon onClick={() => ''} />
            </section>

            {/* @ts-ignore */}
            <Line id={'canvas'} data={chartData} options={options}/>
            <section className="absolute w-full h-full overflow-hidden -z-[1]">
                <ChartBackground />
            </section>
        </section>
    )
}
