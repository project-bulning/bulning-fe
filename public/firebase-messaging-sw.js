importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

let messaging = null;

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "INIT_FIREBASE") {
        firebase.initializeApp(event.data.config);
        messaging = firebase.messaging();
        console.log("Firebase Messaging Initialized in Service Worker");

        self.clients.claim();
    }
});

self.addEventListener("push", (event) => {
    if (!messaging) {
        console.warn("Firebase Messaging not initialized yet.");
        return;
    }

    const payload = event.data ? event.data.json() : {};
    console.log("[firebase-messaging-sw.js] Push Received:", payload);

    const notificationTitle = payload.notification?.title || "새로운 알림";
    const notificationOptions = {
        body: payload.notification?.body || "내용 없음",
        icon: "/icons/firebase-logo.png",
        badge: "/icons/badge.png",
    };

    event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    //TODO: 알람 클릭시 어떻게 할지 등록
    event.waitUntil(clients.openWindow("https://buln.ing"));
});
