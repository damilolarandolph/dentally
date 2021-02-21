import React from 'react';

interface DividerProps {
    thickness?: number
}

export const VerticalDivider: React.FC<DividerProps> = function ({ thickness = 3 }) {

    return <div className="bg-light-grey" style={{ width: `${thickness}px` }}></div>
}

export const HorizontalDivider: React.FC<DividerProps> = function ({ thickness = 3 }) {
    return <div className="bg-light-grey" style={{ height: `${thickness}px` }}></div>
}