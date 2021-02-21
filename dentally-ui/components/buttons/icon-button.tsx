import React, { FC, ReactElement, ReactNode, ReactText, SVGProps } from 'react';

interface ButtonProps {
    Icon: React.ComponentType<SVGProps<any>>
}

export function RoundIconButtonBlue({ Icon }: ButtonProps) {
    return <button style={{ outline: 'none' }} className="p-3 mx-1 duration-150 rounded-full bg-primary hover:bg-primary-dark">
        <Icon className="text-xl text-white" />
    </button>
}

export function RoundIconButtonMono({ Icon }: ButtonProps) {
    return <button style={{ outline: 'none' }} className="p-3 mx-1 duration-150 bg-white rounded-full hover:shadow-lg">
        <Icon className="text-xl text-mid-grey" />
    </button>
}


interface BadgeButtonProps {
    Button: React.ComponentType<ButtonProps>,
    Icon: React.ComponentType,
    showBadge: boolean
}
export function BadgedButton({ Button, Icon, showBadge }: BadgeButtonProps) {
    return <div className="relative">
        <Button Icon={Icon} />
        {showBadge &&
            <div className="absolute top-0 right-0 w-4 h-4 p-2 bg-red-500 border-2 rounded-full animate-bounce border-light-grey"></div>
        }
    </div>
}


interface EmbeddedIconButtonProps {
    icon: ReactElement,
    children: ReactText,
    onClick: () => void
}

export const EmbeddedIconButton: FC<EmbeddedIconButtonProps> = function ({ icon, children: text, onClick }) {

    return <button className="flex items-center w-40 p-3 rounded-full bg-light-grey min-w-min">
        <span className="ml-1 font-bold align-middle">{text}</span>

        <span className="inline-block p-1 ml-auto text-white align-middle rounded-full bg-primary">
            {icon}
        </span>
    </button>

}



