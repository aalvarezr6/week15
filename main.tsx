import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';



const rootElement = document.getElementById('root') as HTMLElement; //root - where the React application will be redendered. 


ReactDOM.createRoot(rootElement).render( //Rendering
  <React.StrictMode>
    <App />
  </React.StrictMode>
);