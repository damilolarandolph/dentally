import React, { FC, ReactElement, ReactText } from 'react';
import classnames from 'classnames';
import { clearLine } from 'readline';


export enum Attention {
    NONE,
    ALL,
    TITLE,
    SUBTITLE
}

export interface CardTextProps {
    attention: Attention,
    title: string,
    subtitle?: string
}

export const CardText: FC<CardTextProps> = function ({ attention, title, subtitle }) {
    let titleNames = classnames({ "darkest-grey": attention == Attention.TITLE || attention == Attention.ALL });
    let subtitleNames = classnames({ "darkest-grey": attention == Attention.SUBTITLE || attention == Attention.ALL });
    return <div>
        <p className={"font-medium text-7xl text-mid-grey" + titleNames}> {title} </p>
        <span className={"text-mid-grey " + subtitleNames}>{subtitle}</span>
    </div>

}

interface CardTextListItemProps {
    icon?: React.ReactElement,
    children: ReactText
}

const CardTextListItem: React.FC<CardTextListItemProps> = function ({ icon, children }) {
    return <span>{children}</span>
}

export interface CardTextListProps {
    children: ReactElement<CardTextListItemProps> | Array<ReactElement<CardTextListItemProps>>
    attention?: Attention.ALL | Attention.NONE
}

export class CardTextList extends React.Component<CardTextListProps>{
    static Item = CardTextListItem;
    constructor(props: CardTextListProps) {
        super(props);
    }

    render() {
        let { attention = Attention.ALL } = this.props;
        let names = attention == Attention.NONE ? 'text-grey' : '';
        let items = React.Children.map(this.props.children, (child: ReactElement<CardTextListItemProps>, index) => {

            if (child.props.icon == undefined) {
                return <li className={"text-lg font-medium mb-4 " + names}><span className="pr-4">{index + 1}.</span>{child}</li>
            }
            return <li className={"text-lg font-medium mb-4 " + names}><span className="inline-block pr-4 align-middle">{child.props.icon}</span>{child}</li>
        });
        return <ul>{items}</ul>
    }
}


