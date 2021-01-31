import React from 'react';
import { FaTooth } from 'react-icons/fa';
import { HiMenuAlt2, HiOutlineClock } from 'react-icons/hi';
import Titlebar from '../components/titlebar/titlebar';


export default function Layout() {
    return <div className="flex flex-col w-screen bg-light-grey">
        <div className="flex w-full">
            <div className="flex justify-between p-3 bg-white ">
                <div className="pr-2 my-auto">
                    <FaTooth className="text-5xl text-primary" />
                </div>
                <div className="my-auto ">
                    <h3 className="font-sans text-3xl font-bold tracking-tighter text-darkest-grey">Dentally</h3>
                    <p className="text-base text-grey font-body ">dental software</p>
                </div>
                <div className="my-auto pl-7">
                    <HiMenuAlt2 className="text-3xl duration-75 cursor-pointer text-mid-grey hover:text-primary " />
                </div>
            </div>
            <Titlebar title="Dashboard Overview" Icon={HiOutlineClock} />
        </div>
    </div>
}