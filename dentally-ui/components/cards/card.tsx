import React, { FC, HTMLProps, PropsWithChildren, ReactElement, ReactNode, ReactText } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { EmbeddedIconButton } from '../buttons/icon-button';
import { HorizontalDivider } from '../divider/divider';
import { CardTextList, CardTextProps } from './card-text'



type VCardChild = ReactElement<CardTextProps>
    | ReactElement<any, typeof CardTextList>
    | ReactElement<any, typeof AppointmentSnippet>;
type VCardChildren = VCardChild | Array<VCardChild>;

export type CardElement = ReactElement<CardProps, typeof Card>;

interface CardProps {
    title?: string | Array<string>,
    children: VCardChildren,
    divider?: boolean
    onMoreButtonClick: () => void,
}


export const Card: FC<CardProps> = function ({ title, children, onMoreButtonClick, divider = false }) {
    let paddedChildren = React.Children.map(children, (child) => <div className="my-7">{child}</div>)
    let isSingle = ((title: string | Array<string>): title is string => typeof title === "string")(title)

    if (isSingle) {
        return <div className="flex flex-col w-full h-full p-3 bg-white rounded-md">

            {title !== undefined ? <h6 className="uppercase">{title}</h6> : ''}
            <div>
                {paddedChildren}
            </div>
            <div className="mt-auto">
                <EmbeddedIconButton icon={<HiArrowRight />} onClick={() => console.log('hello')}>
                    More
            </EmbeddedIconButton>
            </div>
        </div>
    }


    return <div className="flex flex-col h-full p-4 bg-white rounded-md">{
        React.Children.map(paddedChildren, (child: VCardChild, index) => {
            return <div className="flex flex-col bg-white ">

                {index !== 0 && divider ? <span className="mb-5"><HorizontalDivider thickness={2} /> </span> : ''}

                {title[index] != undefined ? <h6 className="uppercase">{title[index]}</h6> : ''}
                <div>
                    {child}
                </div>
            </div>
        })}
        <div className="mt-auto">
            <EmbeddedIconButton icon={<HiArrowRight />} onClick={() => console.log('hello')}>
                More
            </EmbeddedIconButton>
        </div>
    </div>


}

interface SplitCardProps extends CardProps {
    children: [ReactElement, ReactElement]
}

export const SplitCard: FC<SplitCardProps> = function ({ title, children, onMoreButtonClick }) {
    return <div className="flex flex-col h-full p-3 bg-white rounded-md">

        {title !== undefined ? <h6 className="uppercase">{title}</h6> : ''}
        <div className="flex">
            <div className="mr-12 max-w-max my-7">
                {React.Children.toArray(children)[0]}
            </div>
            <div className="flex-grow my-7">
                {React.Children.toArray(children)[1]}
            </div>
        </div>
        <div className="mt-auto">
            <EmbeddedIconButton icon={<HiArrowRight />} onClick={() => console.log('hello')}>
                More
            </EmbeddedIconButton>
        </div>
    </div>
}


interface AppointmentSnippetProps {
    title: string,
    children: ReactText,
    fromTime: string,
    toTime: string,
}


export const AppointmentSnippet: React.FC<AppointmentSnippetProps> = function ({ title, children: intent, fromTime, toTime }) {
    return <div className="flex p-4 mb-5 rounded-md bg-light-grey">
        <div>
            <span className="text-sm text-mid-grey">{title}</span>
            <h5>{intent}</h5>
        </div>
        <div className="self-center ml-auto font-bold text-mid-grey">
            <span>{fromTime}-{toTime}</span>
        </div>
    </div>
}
