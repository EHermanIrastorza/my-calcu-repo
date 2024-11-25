import React from 'react';
import Calculator from './components/calculadora';


const App: React.FC = () => {
  return (
    <div className="app bg-gray-50 min-h-screen flex items-center justify-center">
      <Calculator />
    </div>
  );
};

export default App;
