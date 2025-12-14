import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('Index.tsx running. Looking for root...');
const rootElement = document.getElementById('root');
if (rootElement) {
  // console.log('Root element found. Mounting...');
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
      {/* <div style={{ padding: 20, fontSize: 30, color: 'red' }}>Hello World Debug</div> */}
    </React.StrictMode>
  );
} else {
  console.error('Root element NOT found');
}
