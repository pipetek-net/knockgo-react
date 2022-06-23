import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Inicio from './Pages/Inicio';
import Diagnostico from './Pages/Diagnostico';
import Descargas from './Pages/Descargas';
import Nosotros from './Pages/Nosotros';
import SesionIniciar from './Pages/Sesion/Iniciar';
import SesionRegistrar from './Pages/Sesion/Registrar';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path='diagnostico' element={<Diagnostico />} />
                    <Route path='descargas' element={<Descargas />} />
                    <Route path='nosotros' element={<Nosotros />} />
                    <Route path='/sesion/iniciar' element={<SesionIniciar />} />
                    <Route path='/sesion/registrar' element={<SesionRegistrar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);