export type WeatherData = {
  temp: number;
  feelsLike?: number;
  icon: string;
  humidity?: number;
  wind?: number;
  precipitation?: number;
};

export type ForecastHour = {
  time: string;
  temp: number;
  icon: string;
};