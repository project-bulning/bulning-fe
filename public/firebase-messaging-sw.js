importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

let firebaseConfig = null;
let messaging = null;

// 서비스 워커
self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "INIT_FIREBASE") {
        firebaseConfig = event.data.config;
        firebase.initializeApp(firebaseConfig);
        messaging = firebase.messaging();
        console.log("Firebase Initialized in Service Worker");
    }
});

// 백그라운드 푸시 알림
self.addEventListener("push", (event) => {
    if (event.data) {
        const payload = event.data.json();
        console.log("백그라운드에서 메시지를 수신함:", payload);

        const notificationTitle = payload.notification.title || "알림";
        const notificationOptions = {
            body: payload.notification.body || "메시지가 도착했습니다.",
            icon: payload.notification.icon || "/firebase-logo.png",
            data: payload.data || {},
        };

        event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
    }
});

// 알림 클릭
self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    const clickAction = event.notification.data?.click_action || "/";
    event.waitUntil(clients.openWindow(clickAction));
});
