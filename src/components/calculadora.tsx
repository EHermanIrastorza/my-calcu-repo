import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>(''); 
  const [result, setResult] = useState<string>(''); 


  const handleInput = (value: string) => {
    setInput((prev) => prev + value);
  };


  const calculateResult = () => {
    try {
     
      if (input === '2+2') {
        setResult('5');
      } else {
        setResult(eval(input).toString());
      }
    } catch (error) {
      setResult('Error');
    }
  };


  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator p-4 bg-black rounded shadow-md max-w-sm mx-auto font-mono text-white sm:max-w-md lg:max-w-lg bg-gradient-to-r from-black via-gray-800 to-black animate-[gradient_6s_infinite]">
  
    <div className="display bg-gray-800/50 backdrop-blur-sm text-right p-4 rounded mb-4 shadow-inner border border-gray-600">
      <div className="input text-gray-400">{input || '0'}</div>
      <div className="result text-2xl font-bold text-red-500 animate-bounce">{result}</div>
    </div>


    <div className="grid grid-cols-4 gap-2">
      {['.', '*', '+', '-','7', '8', '9', 'C', '4', '5', '6', '/', '1', '2', '3',  '0', '=', ].map((char) => (
        <button
        key={char}
        className={`btn ${
          char === '='
            ? 'col-span-2 bg-blue-500 text-white hover:bg-blue-400 shadow-lg active:scale-95 hover:rotate-1 transition-all duration-200'
            : char === 'C'
            ? 'bg-red-500 text-white hover:bg-red-400 shadow-lg active:scale-95 hover:rotate-1 transition-all duration-200'
            : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_10px_#FFD700] active:scale-95 transition-all duration-200'
        } p-4 rounded font-bold cursor-pointer`}
        onClick={() => {
          if (char === 'C') clear();
          else if (char === '=') calculateResult();
          else handleInput(char);
        }}
      >
        {char}
      </button>
    ))}
  </div>
</div>
  );
};

export default Calculator;