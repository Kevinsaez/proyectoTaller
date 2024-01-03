import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clientes from '../pages/clientes/Clientes'
import Home from '../pages/Home/Home'
import Vehiculos from '../pages/vehiculos/vehiculos'
import Presupuestos from '../pages/presupuestos/presupuestos'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/vehiculos' element={<Vehiculos/>}/>
                <Route path='/presupuestos' element={<Presupuestos/>}/>
            </Routes>
        </BrowserRouter>
    );
}