import react from 'react'

export default function Input(props) {
    const {select} = props;
    return (
        <input onChange={select} />
    )
}
