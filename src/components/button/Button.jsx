import react from 'react'

export default function Button(props) {
    const { type, select, children } = props;

    return (
        <button type={type} onClick={select}>{children}</button>
    )
}
