import React from 'react';
import { HorizontalDivider, VerticalDivider } from '../divider/divider';
import { CardElement } from './card';


interface ThreeCardLayoutProps {
    children: [CardElement, CardElement, CardElement],
    verticalDivider?: boolean
    horizontalDivider?: boolean
}

export const ThreeCardLayout: React.FC<ThreeCardLayoutProps> = function ({ children, verticalDivider = true, horizontalDivider = true }) {

    return <div className="flex flex-col p-5 bg-white rounded-md">
        <div className="flex w-full mb-6">
            <div className="w-full">
                {children[0]}
            </div>
            {verticalDivider ? <VerticalDivider /> : ''}
            <div className="w-full">
                {children[1]}
            </div>
        </div>
        {horizontalDivider ? <HorizontalDivider thickness={2} /> : ''}
        <div className="w-full">
            {children[2]}
        </div>
    </div>

}
