import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import './setup';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';

// Lock body scroll
document.body.style.overflow = 'hidden';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Router basename="/">
            <Layout>
                <App />
            </Layout>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
