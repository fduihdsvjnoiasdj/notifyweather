export function saveSettings(settings: any) {
  localStorage.setItem('weatherwatcher-settings', JSON.stringify(settings));
}
export function loadSettings() {
  try { return JSON.parse(localStorage.getItem('weatherwatcher-settings') || '{}'); }
  catch { return {}; }
}
export function resetSettings() {
  localStorage.removeItem('weatherwatcher-settings');
}