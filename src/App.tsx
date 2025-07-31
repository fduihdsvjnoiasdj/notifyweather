import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import NotFound from './pages/NotFound';
import SettingsModal from './components/SettingsModal';
import LocationPicker from './components/LocationPicker';

function App() {
  // modal state, context, notification state atd.
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forecast' element={<Forecast />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <SettingsModal />
      <LocationPicker />
    </BrowserRouter>
  );
}
export default App;