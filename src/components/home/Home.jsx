import React from 'react'

export default function Home() {
    const func = () => {
        <a href="http://localhost:5173/form"></a>
    }
    return (
        <form onSubmit={func}>
            <label>How mauch works? </label>
            <input type="number" />
            <label>How much educations?</label>
            <input type="number" />
            <button>make resume</button>
        </form>
    )
}
