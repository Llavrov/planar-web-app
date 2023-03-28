import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import {Slider} from "@/ui/components/slider";
import {CloseIcon} from "@/ui/buttons/close";
import {ChartBackground} from "@/ui/svg/chartBackground";

ChartJS.register(
    CategoryScale, // x-axis
    LinearScale, // y-axis
    PointElement,
    LineElement,
    Title,
    Tooltip,
);

enum Tabs {
    Price = 'Price',
    TVL = 'TVL',
    Volume = 'Volume',
}

const options = {
    plugins: {
        legend: true
    },
    elements: {
        line: {
            tension: 1,
            fill: 'bottom'
        }
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

const initialState = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
    datasets: [{
        data: [9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27, 9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27],
        fill: false,
        backgroundColor: 'rgba(0,0,0,0.9)',
        borderColor: '#9D5AFF',
        borderWidth: 2,
        tension: 0.5,
        pointRadius: .5
    }]
}

export function ChartComponent() {
    const [chartData, setChartData] = useState(initialState);

    const [chartOptions, setChartOptions] = useState(options);

    useEffect(() => {
        setChartData({
            labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
            datasets: [{
                    data: [9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27, 9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27],
                    fill: false,
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    borderColor: '#9D5AFF',
                    borderWidth: 2,
                    tension: 0.5,
                    pointRadius: .5
                }]
        });
        setChartOptions(options);
    }, []);

    return (
        <section className="flex relative items-center justify-center bg-secondary rounded-2 h-full shrink">
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
