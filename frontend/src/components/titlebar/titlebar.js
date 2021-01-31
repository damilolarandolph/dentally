import React from 'react';
import { HiBell, HiOutlineBell, HiOutlinePlus } from 'react-icons/hi';
import { BadgedButton, RoundIconButtonBlue, RoundIconButtonMono } from '../buttons/icon-button';
import Search from '../search/search-bar';


export default function Titlebar(props) {
    return <div className="flex self-center w-full px-5">
        <div className="flex items-center ml-4">
            <props.Icon className="inline text-3xl font-bold stroke-2 text-primary " />
            <h4 className="ml-3 font-sans text-xl tracking-tighter text-darkest-grey">{props.title}</h4>
        </div>
        <div className="flex items-center ml-auto">
            <Search placeholder="Search" />
            <RoundIconButtonBlue Icon={HiOutlinePlus} />
            <BadgedButton showBadge={true} Button={RoundIconButtonMono} Icon={HiBell} />
        </div>
    </div>
}