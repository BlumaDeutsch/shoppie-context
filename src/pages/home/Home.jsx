import react from 'react'
import { Link } from "react-router-dom";
import Button from '../../components/button/Button';

export default function Home() {
    return (
        <>
            <h1>resume builder</h1>
            <Link to='/loggin'>loggin</Link>
            <p>dont have an account?</p>
            <Link to='/register'>register</Link>
        </>
    )
}
