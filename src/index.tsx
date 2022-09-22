import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScrollProvider, ToggleProvider } from './context';
import FontStyles from './styles/FontStyles';
import GlobalStyles from './styles/GlobalStyles';
import { Cursor } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToggleProvider>
      <ScrollProvider>
        <FontStyles />
        <GlobalStyles />
        <Cursor />
        <App />
      </ScrollProvider>
    </ToggleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
