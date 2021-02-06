import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';


export default function Search(props) {
    return <div className="relative" >
        <HiOutlineSearch className="absolute top-0 bottom-0 my-auto text-mid-grey left-2" />
        <input placeholder={props.placeholder} type="text" className="p-3 py-2 pl-8 font-semibold tracking-tighter bg-transparent border rounded-full outline-none focus:border-primary-light border-mid-grey placeholder-mid-grey text-mid-grey font-body" />
    </div>
}