import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { firebaseApp } from '@/utils/firebase/firebase';

export async function checkAndUpdateFcmToken(): Promise<void> {
  const FCM_TOKEN_KEY = 'my_fcm_token';

  try {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    if (!isStandalone) {
      console.warn('iOS에서는 PWA가 홈 화면에 추가되어 있어야 FCM 토큰을 받을 수 있습니다.');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('푸시 알림 권한이 거부됨.');
      return;
    }

    const messaging = getMessaging(firebaseApp);

    if (!import.meta.env.VITE_FIREBASE_VAPID_KEY) {
      console.error('VAPID 키가 설정되지 않음.');
      return;
    }

    const newToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY || '',
    });

    if (!newToken) {
      console.warn('새 FCM 토큰을 가져오지 못함.');
      return;
    }

    await axiosInstance.post(endpoints.fcmToken, { fcmToken: newToken });
    localStorage.setItem(FCM_TOKEN_KEY, newToken);
    console.log('새 FCM 토큰을 서버에 전송 및 로컬스토리지에 저장:', newToken);
  } catch (error) {
    console.error('FCM 토큰 갱신 중 에러:', error);
  }
}

// foreground 메시지 처리
export function initForegroundMessageListener() {
  const messaging = getMessaging(firebaseApp);
  onMessage(messaging, (payload) => {
    console.log('포그라운드에서 메시지를 수신함:', payload);

    if (!payload.notification) {
      console.warn('수신한 메시지에 notification 데이터가 없습니다.');
      return;
    }

    if (Notification.permission === 'granted') {
      const title = payload.notification.title ?? '새로운 알림';
      const body = payload.notification.body ?? '알림 내용을 확인하세요.';

      const notification = new Notification(title, {
        body,
        icon: '/icons/firebase-logo.png',
      });

      console.log('Foreground 알림 생성됨:', notification);

      notification.onclick = () => {
        window.location.href = `/hunter-approval/${payload?.data?.user}`;
      };
    }
  });
}
