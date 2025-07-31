# WeatherWatcher

PWA aplikace pro sledování počasí a denní notifikace dle vlastních pravidel.

## Funkce
- Přehledné sledování aktuálního a budoucího počasí (ICON-D2+EU)
- Denní upozornění podle podmínek (teplota, déšť, vítr, atd.)
- Instalovatelná na mobil/desktop (PWA)
- Práce offline
- Nastavení lokality, pravidel a času
- CI/CD, testy, GitHub Pages deployment

## Instalace
```bash
pnpm install
pnpm dev
```
Otevřete na `http://localhost:5173`.

## Web Push nastavení
1. Získejte VAPID klíče (`npm web-push generate-vapid-keys`)
2. Vložte veřejný klíč do `src/services/notification.ts`
3. Backend pro push zprávy viz `/server/api.js` (volitelné)

## Testy
```
pnpm test
pnpm run cypress:run
```
