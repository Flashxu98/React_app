import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Wrap from './components/Wrap';

ReactDOM.render(
    <BrowserRouter>
        <Wrap/>
    </BrowserRouter>,
    document.getElementById('root')
);