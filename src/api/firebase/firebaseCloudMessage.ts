import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { firebaseApp } from '@/utils/firebase/firebase';

export async function checkAndUpdateFcmToken(): Promise<void> {
  const FCM_TOKEN_KEY = 'my_fcm_token';

  try {
    const messaging = getMessaging(firebaseApp);

    const newToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY || '',
    });

    await axiosInstance.post(endpoints.fcmToken, { fcmToken: newToken });
    localStorage.setItem(FCM_TOKEN_KEY, newToken);
    console.log('새 FCM 토큰을 서버에 전송 및 로컬스토리지에 저장:', newToken);
  } catch (error) {
    console.error('FCM 토큰 갱신 중 에러:', error);
  }
}

export async function AllowNotification() {
  if (!('Notification' in window)) {
    console.error('이 브라우저는 알림을 지원하지 않습니다.');
    return;
  }

  try {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      console.log('알림 권한이 부여되었습니다.');
      await checkAndUpdateFcmToken();
    } else {
      console.warn('알림 권한이 거부되었습니다.');
    }
  } catch (error) {
    console.error('알림 권한 요청 중 오류 발생:', error);
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
