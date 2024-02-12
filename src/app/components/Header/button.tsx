
import React from 'react';



const Buttontag: React.FC = () => {
  return (
    <div className="flex justify-center mt-6 mx-8">
      <button
        className="bg-violet-500 text-white font-bold p-2 w-full rounded focus:outline-none focus:shadow-outline"
        type="button"       
      >
        Submit
      </button>
    </div>
  );
}

export default Buttontag;
