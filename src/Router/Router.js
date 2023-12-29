import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clientes from '../pages/clientes/Clientes'
import Home from '../pages/Home/Home'
import FormEditarCliente from '../components/fromEditarCliente/formEditarCliente';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/editarClientes' element={<FormEditarCliente/>}/>
            </Routes>
        </BrowserRouter>
    );
}