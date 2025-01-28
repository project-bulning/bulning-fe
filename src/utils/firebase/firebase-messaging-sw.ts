/* eslint-disable no-restricted-globals */
/// <reference lib="webworker" />

import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';

declare let self: ServiceWorkerGlobalScope;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// 백그라운드 메시지 수신
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.ts] 백그라운드 메시지 수신:', payload);

  const { title = 'New Notification', body = '새로운 메시지가 도착했습니다.' } = payload.notification || {};

  const notificationOptions = {
    body,
    icon: '/icons/android-chrome-192x192.png',
  };

  // 백그라운드 알림 표시
  self.registration.showNotification(title, notificationOptions);
});

// 알림 클릭 이벤트 처리
self.addEventListener('notificationclick', (event: NotificationEvent) => {
  console.log('[firebase-messaging-sw.ts] Notification click received:', event);

  event.notification.close();
  // TODO: 알람이 클릭되었을 때 해야할 일 처리
});
