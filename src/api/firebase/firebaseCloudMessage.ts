import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { firebaseApp } from '@/utils/firebase/firebase';

export async function checkAndUpdateFcmToken(): Promise<void> {
  const FCM_TOKEN_KEY = 'my_fcm_token';

  try {
    const messaging = getMessaging(firebaseApp);

    const newToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    });

    const oldToken = localStorage.getItem(FCM_TOKEN_KEY);

    if (newToken && newToken !== oldToken) {
      await axiosInstance.post(endpoints.fcmToken, { token: newToken });
      localStorage.setItem(FCM_TOKEN_KEY, newToken);
      console.log('새 FCM 토큰을 서버에 전송 및 로컬에 저장:', newToken);
    } else {
      console.log('FCM 토큰이 기존과 동일하거나, 토큰이 없습니다.');
    }
  } catch (error) {
    console.error('FCM 토큰 갱신 중 에러:', error);
  }
}

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  const permission = await Notification.requestPermission();
  return permission;
};

export const getFcmToken = async (): Promise<string | null> => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers are not supported in this browser.');
    return null;
  }

  const messaging = getMessaging(firebaseApp);
  const registration = await navigator.serviceWorker.ready;

  try {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration,
    });
    return token;
  } catch (error) {
    console.error('Error retrieving FCM token:', error);
    return null;
  }
};

export const requestAndSendFcmToken = async (): Promise<void> => {
  const permission = await requestNotificationPermission();
  if (permission !== 'granted') {
    console.warn('Push notification permission denied.');
    return;
  }

  const token = await getFcmToken();
  if (!token) {
    console.log('No registration token available.');
    return;
  }

  try {
    await axiosInstance.post(endpoints.fcmToken, { token });
    console.log('FCM 토큰 전송 성공:', token);
  } catch (error) {
    console.error('FCM 토큰 서버 전송 에러:', error);
  }
};

// foreground 메시지 처리
export function initForegroundMessageListener() {
  const messaging = getMessaging(firebaseApp);
  onMessage(messaging, (payload) => {
    console.log('포그라운드 상태에서 메시지를 수신함:', payload);
    // TODO: 포그라운드 상태에서 메시지 수신했을 때 로직 처리
  });
}
