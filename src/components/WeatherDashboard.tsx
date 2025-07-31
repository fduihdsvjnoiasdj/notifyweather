import React from 'react';
import { WeatherData } from '../types/weather';
import Card from './ui/Card';
import Icon from './ui/Icon';

type Props = { weather: WeatherData; city: string; updatedAt: string; };
const WeatherDashboard: React.FC<Props> = ({ weather, city, updatedAt }) => (
  <Card className="h-96 w-full max-w-3xl mx-auto p-8 flex flex-col items-center">
    <div className="flex w-full justify-between items-center">
      <h2 className="text-2xl font-semibold">{city}</h2>
      <span className="text-xs text-[#777799]">{updatedAt}</span>
    </div>
    <Icon name={weather.icon} size={128} />
    <div className="text-6xl font-medium mt-4">{weather.temp}&deg;C</div>
    <div className="text-base text-[#BBBBCC]">{weather.feelsLike ? `Pocitově ${weather.feelsLike}°` : null}</div>
    <button className="mt-auto mx-auto bg-[#3FC1FF] text-black rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg scale-100 transition-transform hover:scale-105">+</button>
  </Card>
);
export default WeatherDashboard;