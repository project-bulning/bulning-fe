interface LatLng {
  latitude: number;
  longitude: number;
}

export async function getLatLng(): Promise<LatLng> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation이 지원되지 않는 브라우저'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(new Error(`위치 정보를 가져오지 못했습니다. 에러 코드: ${error.code}, 메시지: ${error.message}`));
      },
    );
  });
}
