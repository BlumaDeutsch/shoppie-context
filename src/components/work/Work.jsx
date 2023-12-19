import React from 'react'

export default function Work({work}) {
    return (
        <div>
            <h3>company: {work.company}</h3>
            <h4>from: {work.from}</h4>
            <h4>to: {work.to}</h4>
        </div>
    )
}
