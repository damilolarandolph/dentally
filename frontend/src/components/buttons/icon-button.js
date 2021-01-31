import { PreviousMap } from 'postcss';
import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

export function RoundIconButtonBlue(props) {
    return <button style={{ outline: 'none' }} className="p-3 mx-1 duration-150 rounded-full bg-primary hover:bg-primary-dark">
        <props.Icon className="text-xl text-white" />
    </button>
}

export function RoundIconButtonMono(props) {
    return <button style={{ outline: 'none' }} className="p-3 mx-1 duration-150 bg-white rounded-full hover:shadow-lg">
        <props.Icon className="text-xl text-mid-grey" />
    </button>
}


export function BadgedButton(props) {
    return <div className="relative">
        <props.Button Icon={props.Icon} />
        {props.showBadge &&
            <div className="absolute top-0 right-0 w-4 h-4 p-2 bg-red-500 border-2 rounded-full animate-bounce border-light-grey"></div>
        }
    </div>
}

