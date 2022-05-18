import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';

function Webpage() {
    return (
        <>
            <Header />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Webpage />);