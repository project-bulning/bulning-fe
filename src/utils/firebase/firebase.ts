import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then(() => navigator.serviceWorker.ready)
  .then((registration) => {
    registration.active?.postMessage({
      type: 'INIT_FIREBASE',
      config: firebaseConfig,
    });
    console.log('Service Worker Initialized with Firebase Config');
  })
  .catch((error) => {
    console.error('Service Worker 등록 실패:', error);
  });

export { firebaseApp };
