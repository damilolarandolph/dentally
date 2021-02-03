import React, { useState } from 'react';
import { FaTooth } from 'react-icons/fa';
import { HiMenuAlt2, HiOutlineCalendar, HiOutlineCash, HiOutlineChat, HiOutlineClock, HiOutlineCog, HiOutlineUser } from 'react-icons/hi';

export default function Sidebar() {
    let [isHidden, setHidden] = useState(false);
    return <> <div className="flex flex-col w-60">
        <div className="flex justify-between p-3 ">
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
        <ol>
            <SidebarLink text="Overview" Icon={HiOutlineClock} />
            <SidebarLink text="Calendar" Icon={HiOutlineCalendar} />
            <SidebarLink text="Patient List" Icon={HiOutlineUser} />
            <SidebarLink text="Messages" Icon={HiOutlineChat} />
            <SidebarLink text="Payment Information" Icon={HiOutlineCash} />
            <SidebarLink text="Settings" Icon={HiOutlineCog} />
        </ol>

    </div>
    </>

}


function SidebarLink(props) {
    return <li className="p-4 duration-100 cursor-pointer group hover:bg-primary-dark" >
        <span>
            <props.Icon className="inline text-2xl text-mid-grey group-hover:text-light-grey" />
            <span className="pl-3 text-base font-semibold text-dark-grey font-body group-hover:text-light-grey">{props.text}</span>
        </span>
    </li>
}

