export interface Settings {
  notificationTime?: string;
  rules?: unknown[];
  location?: string;
  [key: string]: unknown;
}

export function saveSettings(settings: Settings): void {
  localStorage.setItem('weatherwatcher-settings', JSON.stringify(settings));
}

export function loadSettings(): Settings {
  try {
    return JSON.parse(
      localStorage.getItem('weatherwatcher-settings') || '{}'
    ) as Settings;
  } catch {
    return {} as Settings;
  }
}

export function resetSettings(): void {
  localStorage.removeItem('weatherwatcher-settings');
}