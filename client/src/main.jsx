import React from 'react';
import ReactDOM from 'react-dom/client';
import { LazyMotion, domAnimation } from 'framer-motion';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './index.css';

// LazyMotion + the `m` components keep framer-motion to the DOM animation
// features this site uses (enter/scroll/hover/exit), not its full feature
// set. `strict` makes a stray full `motion.*` component an error.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LazyMotion features={domAnimation} strict>
        <App />
      </LazyMotion>
    </ErrorBoundary>
  </React.StrictMode>,
);
