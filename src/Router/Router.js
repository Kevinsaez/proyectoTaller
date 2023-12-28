import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clientes from '../pages/clientes/Clientes'
import Home from '../pages/Home/Home'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
            </Routes>
        </BrowserRouter>
    );
}