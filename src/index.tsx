import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const widgetDivs = document.querySelectorAll('.zorgmee-terugbetalings-widget');

// Inject our React App into each class
widgetDivs.forEach(div => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        div
    );
});