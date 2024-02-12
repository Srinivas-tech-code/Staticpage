
import React from 'react';

interface propshere{
  label:string
  placeholder:string
  
}

const FirstInput: React.FC<propshere> = ({ label, placeholder }) => {
  return (
    <div className="mx-8">
      <label className="block text-black-700 text-lg font-display mt-5 mb-8">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        
        
        placeholder={placeholder}
      />
      
    </div>
  );
}

export default FirstInput;
