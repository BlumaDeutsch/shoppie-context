import React from 'react'

export default function Button(props) {
    const { select, children } = props;

    return (
        <button onClick={select}>{children}</button>
    )
}
