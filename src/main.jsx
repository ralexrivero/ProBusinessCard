import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/aquarius.css';
import App from './App'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { I18nextProvider } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import i18next from './components/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
