import React from 'react';
import RuleEditor from './RuleEditor';
const SettingsModal = () => {
  // open/close, state z contextu, uložení do storage
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-[#2A2A3D] rounded-2xl p-8 w-[95vw] max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Upozornění & Pravidla</h2>
        <form>
          <label>Čas upozornění:</label>
          <input type="time" className="mb-4 block w-full rounded-lg p-2 bg-[#1E1E2A] text-white" />
          <RuleEditor />
          <div className="flex gap-2 mt-6">
            <button type="submit" className="flex-1 bg-[#3FC1FF] py-3 rounded-lg text-black font-bold">Uložit</button>
            <button type="button" className="flex-1 bg-[#FF6B6B] py-3 rounded-lg text-white">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SettingsModal;