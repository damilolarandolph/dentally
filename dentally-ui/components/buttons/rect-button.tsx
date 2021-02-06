import React from 'react';


export default function RectButton(props) {
    return <button>{props.text}</button>
}

function rectButtonInternal(props) {
    let { text, ...rest } = props
    return <button {...rest}>{text}</button>
}