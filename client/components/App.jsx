import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../app/store.js';
import NavBar from './NavBar.jsx';
import Main from './Main.jsx';
import Content from './Content.jsx';
import AddSnippet from './AddSnippet.jsx';

function ContentWithId() {
    const { id } = useParams();
    return <Content id={id} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/content/:id" element={<ContentWithId />} />
                    <Route path='/add' element={<AddSnippet />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
