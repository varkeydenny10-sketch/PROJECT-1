import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AnimatedRoutes } from './components/AnimatedRoutes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
