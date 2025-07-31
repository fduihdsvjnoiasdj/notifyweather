import React from 'react';
// Import typů a helperů pro pravidla
const RuleEditor = () => {
  // render dynamic list of rule types (temp, rain, wind, cloudiness, ...)
  return (
    <div className="space-y-3">
      {/* Dynamicky renderované pole pravidel, pro každé možnost smazat, měnit parametry */}
      <div className="flex gap-2 items-center">
        <select className="bg-[#1E1E2A] text-white rounded-lg p-2 flex-1">
          <option>Teplota</option>
          <option>Srážky</option>
          <option>Vítr</option>
          <option>Oblačnost</option>
        </select>
        <input type="number" className="w-20 bg-[#1E1E2A] text-white rounded-lg p-2" placeholder=">" />
        <span className="text-[#BBBBCC]">°C/hod</span>
        <button className="text-red-500 text-xl">×</button>
      </div>
      <button className="w-full bg-[#2A2A3D] rounded-lg py-2 text-[#3FC1FF] mt-2">+ Přidat pravidlo</button>
    </div>
  );
};
export default RuleEditor;