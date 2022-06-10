import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Inicio from './Pages/Inicio';
import Diagnostico from './Pages/Diagnostico';
import Descargas from './Pages/Descargas';
import Nosotros from './Pages/Nosotros';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path='diagnostico' element={<Diagnostico />} />
                    <Route path='descargas' element={<Descargas />} />
                    <Route path='nosotros' element={<Nosotros />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);