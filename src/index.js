import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "./Context";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
);
reportWebVitals();
