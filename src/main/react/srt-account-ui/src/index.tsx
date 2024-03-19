import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import './index.scss';
import { HashRouter } from 'react-router-dom';
import App from 'App';

axios.defaults.headers['Pragma'] = 'no-cache';

const rootElement: any = document.getElementById("root");
// const root = createRoot(rootElement);

// root.renderer(
//     <HashRouter basename=''>
//         <App />
//     </HashRouter>
// )

ReactDOM.render(
    <HashRouter basename=''>
        <App />
    </HashRouter>,
    rootElement
);