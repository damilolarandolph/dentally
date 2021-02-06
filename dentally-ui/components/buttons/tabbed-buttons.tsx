import React, { ButtonHTMLAttributes, HTMLProps, PropsWithChildren, ReactElement, SVGProps } from 'react';
import styles from '../../styles/TabbedButton.module.css';

let Item: React.FC<HTMLProps<HTMLButtonElement>> = function (props) {
    return <span>{props.children}</span>
}

interface TabbedButtonsProps extends HTMLProps<any> {
    children?: ReactElement<HTMLProps<HTMLButtonElement>> | Array<ReactElement<HTMLProps<HTMLButtonElement>>>
}

interface TabbedButtonProps extends HTMLProps<any> {
    isActive: boolean
}

let TabbedButton: React.FC<TabbedButtonProps> = function ({ children, onClick, isActive }) {
    return <button onClick={onClick} className={`${styles.tabbedButton} ${isActive ? styles.selected : ""}`} > {children}</button >
}

interface TabbedButtonsS {
    currentActive: number
}

class TabbedButtons extends React.Component<TabbedButtonsProps, TabbedButtonsS> {
    static Item = Item
    constructor(props: TabbedButtonsProps) {
        super(props)
        this.state = { currentActive: 0 }
    }
    render() {
        let items = React.Children.map(this.props.children, (item: ReactElement<HTMLProps<any>>, idx) => {
            return <TabbedButton
                key={idx}
                isActive={this.state.currentActive == idx}
                onClick={(e) => { this.setState({ currentActive: idx }); console.log('clicked ', idx); item.props.onClick(e) }}
            >
                {item}</TabbedButton>
        })
        return <div className="flex rounded-md bg-primary-darkest max-w-max">{items}</div>
    }
}






export default TabbedButtons;





