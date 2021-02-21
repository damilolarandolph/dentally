import React from "react";
import TabbedButtons from "../buttons/tabbed-buttons";
import Chart from "./appointment-graph";

export default function AppointmentStatistics(): JSX.Element {
    return (
        <div className="flex flex-col w-full p-4 pt-7 bg-primary-darker">
            <div className="mb-16 text-3xl text-white">
                <span className="font-bold font-body">Good Morning</span>, <span className="font-normal font-body">Dr Adam.</span>
            </div>
            <div className="flex">
                <p className="self-center font-semibold text-white uppercase font-body">Appointment statistics</p>
                <div className="ml-auto">
                    <TabbedButtons>
                        <TabbedButtons.Item onClick={(e) => { console.log('clicked') }}>Monthly</TabbedButtons.Item>
                        <TabbedButtons.Item onClick={(e) => { console.log('clicked') }}>Weekly</TabbedButtons.Item>
                        <TabbedButtons.Item onClick={(e) => { console.log('clicked') }}>30 Days</TabbedButtons.Item>
                    </TabbedButtons>
                </div>
            </div>
            <div className="flex">
                <Chart />
            </div>
        </div>
    );
}
