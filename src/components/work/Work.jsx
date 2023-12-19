import React, { useContext } from 'react'
import context from '../../context/context';

export default function Work() {
    const { work } = useContext(context);

    return (
        <div>
            <h3>{work.company}</h3>
            <h4>{work.form}</h4>
            <h4>{work.to}</h4>
        </div>
    )
}
