import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Main from './Main.jsx';
import Content from './Content.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/content/:id" element={<ContentWithId />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

function ContentWithId() {
    const { id } = useParams();
    return <Content id={id} />;
}
