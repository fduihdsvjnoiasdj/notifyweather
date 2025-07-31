export async function subscribeUserToPush() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'VAPID_PUBLIC_KEY'
    });
    await fetch('/api/subscribe', { method:'POST', body: JSON.stringify(sub), headers:{'Content-Type':'application/json'} });
    return sub;
  }
}
export function requestNotificationPermission() {
  return Notification.requestPermission();
}