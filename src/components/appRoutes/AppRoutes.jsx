import react from 'react'
import { Routes, Route, } from "React-router-dom";
import Home from '../../pages/home/Home';
import Loggin from '../../pages/loggin/Loggin';
import MyApp from '../../pages/myApp/MyApp';
import Register from '../../pages/register/Register';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/loggin' element={<Loggin />} />
            <Route path='/resume' element={<MyApp />} />
        </Routes>
    )
}