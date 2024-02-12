
import React from 'react';

interface Propshere {
  
  placeholder: string;
}

const SecondInput: React.FC<Propshere> = ({ placeholder }) => {
  return (
    <div className="mx-8">
      
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        
        placeholder={placeholder}
      />
    </div>
  );
}

export default SecondInput;
