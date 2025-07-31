import React, { useState } from 'react';
import ForecastList from '../components/ForecastList';
import { ForecastHour } from '../types/weather';

const mockHours: ForecastHour[] = [
  { time: '10:00', temp: 18, icon: 'sunny' },
  { time: '13:00', temp: 22, icon: 'sunny' },
  { time: '16:00', temp: 21, icon: 'cloudy' },
];

const Forecast: React.FC = () => {
  const [mode, setMode] = useState<'hourly' | 'daily'>('hourly');

  return (
    <main className="p-4">
      <ForecastList hours={mockHours} mode={mode} onModeChange={setMode} />
    </main>
  );
};

export default Forecast;
