import React from 'react';
import WeatherDashboard from '../components/WeatherDashboard';
import { WeatherData } from '../types/weather';

const mockWeather: WeatherData = {
  temp: 20,
  icon: 'sunny',
};

const Home: React.FC = () => (
  <main className="p-4">
    <WeatherDashboard weather={mockWeather} city="Sample City" updatedAt="just now" />
  </main>
);

export default Home;
