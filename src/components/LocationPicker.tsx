import React from 'react';

const LocationPicker: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex z-50">
      <input
        type="text"
        className="bg-[#1E1E2A] text-white rounded-l-lg p-2"
        placeholder="City"
      />
      <button className="bg-[#3FC1FF] text-black rounded-r-lg px-3">
        Set
      </button>
    </div>
  );
};

export default LocationPicker;
