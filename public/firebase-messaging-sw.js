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

        // 알림 타입이 trade_completed 일 때 클라이언트로 메시지 전송함.
        if (payload.data.type === "trade_completed") {
            self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
                clients.forEach((client) => {
                    client.postMessage({
                        type: "TRADE_COMPLETED",
                        matchId: payload.data.matchId,
                    });
                });
            });
            console.log("trade_completed 알림을 서비스워커에서 클라이언트로 전송함");
            return;
        }

        // 알림 타입이 trade_quited 일 때 클라이언트로 메시지 전송함.
        if (payload.data.type === "trade_quited") {
            self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
                clients.forEach((client) => {
                    client.postMessage({
                        type: "TRADE_QUITED",
                        matchId: payload.data.matchId,
                        role: payload.data.role,
                    });
                });
            });
            console.log("trade_quited 알림을 서비스워커에서 클라이언트로 전송함");
            return;
        }

        // 푸시 알림 생성
        const notificationTitle = payload.notification?.title || "벌닝 알림";
        const notificationOptions = {
            body: payload.notification.body || "메시지가 도착했습니다.",
            icon: payload.notification.icon || "/icons/android-chrome-192x192.png",
            data: payload.data || {},
        };

        event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
    }
});

// 알림 클릭
self.addEventListener("notificationclick", (event) => {
    event.notification.close();

    const data = event.notification.data || {};
    let url = "/";

    if (data.type === "hunter_applied" && data.user) {
        url = `/hunter-approval/${data.user}`;
    } else if (data.type === "hunter_accepted") {
        url = "/chat";
    } else if (data.type === "hunter_rejected") {
        url = "/bug-report";
    } else if (data.type === "help_posted") {
        url = "/bug-report";
    } else if (data.type === "trade_quited") {
        url = "/"
    }

    console.log(url);

    event.waitUntil(
        clients.openWindow(url)
    );
});
