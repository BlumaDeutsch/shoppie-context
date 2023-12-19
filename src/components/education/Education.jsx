import React from 'react'

export default function Education({education}) {
    return (
        <div>
            <h3>school: {education.school}</h3>
            <h4>from: {education.from}</h4>
            <h4>to: {education.to}</h4>
        </div>
    )
}
