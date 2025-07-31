import React from 'react';
import { ForecastHour } from '../types/weather';
import Icon from './ui/Icon';

type Props = { hours: ForecastHour[]; mode: "hourly"|"daily"; onModeChange: (m:"hourly"|"daily")=>void; };
const ForecastList: React.FC<Props> = ({ hours, mode, onModeChange }) => (
  <div>
    <div className="flex border-b border-[#2A2A3D] mb-2">
      <button onClick={() => onModeChange("hourly")} className={`flex-1 pb-2 text-center ${mode==='hourly' ? 'border-b-4 border-[#3FC1FF] font-bold' : ''}`}>Hourly</button>
      <button onClick={() => onModeChange("daily")} className={`flex-1 pb-2 text-center ${mode==='daily' ? 'border-b-4 border-[#FFD23F] font-bold' : ''}`}>Weekly</button>
    </div>
    <div className="flex overflow-x-auto gap-4">
      {hours.map((h,i) => (
        <div key={i} className="flex flex-col items-center min-w-[64px] p-2 bg-[#2A2A3D] rounded-lg">
          <span className="text-xs text-[#777799]">{h.time}</span>
          <Icon name={h.icon} size={32} />
          <span className="text-base">{h.temp}&deg;</span>
        </div>
      ))}
    </div>
  </div>
);
export default ForecastList;