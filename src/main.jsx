import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CityContextProvider from './Components/CityContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CityContextProvider>
      <App />
    </CityContextProvider>
  </StrictMode>
);
