import { useEffect, useRef, useState } from 'react';
import Container from '@components/container';
import Spinner from '@components/fallback/Spinner';

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  type: 'range' | 'marker';
  width?: string;
  height?: string;
  zoomLevel?: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

let kakaoScriptLoading = false;
let kakaoScriptLoaded = false;

async function loadKakaoMapScript(appKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (kakaoScriptLoaded) {
      resolve();
      return;
    }

    if (kakaoScriptLoading) {
      const checkScriptInterval = setInterval(() => {
        if (kakaoScriptLoaded) {
          clearInterval(checkScriptInterval);
          resolve();
        }
      }, 100);
      return;
    }

    kakaoScriptLoading = true;

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.async = true;

    script.onload = () => {
      kakaoScriptLoaded = true;
      kakaoScriptLoading = false;
      resolve();
    };

    script.onerror = () => {
      kakaoScriptLoading = false;
      reject(new Error('KakaoMap script load 실패'));
    };

    document.head.appendChild(script);
  });
}

function KakaoMap({
  latitude, longitude, type, width = '100%', height = '350px', zoomLevel = 4,
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
    if (!appKey) {
      console.error('.env KAKAO_MAP_API_KEY 로드 실패');
      return;
    }

    loadKakaoMapScript(appKey)
      .then(() => {
        if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
          window.kakao.maps.load(() => setIsMapLoaded(true));
        } else {
          setIsMapLoaded(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !window.kakao?.maps || !mapRef.current) return;

    const mapOption = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: zoomLevel,
    };

    const map = new window.kakao.maps.Map(mapRef.current, mapOption);

    if (type === 'range') {
      const circle = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(latitude, longitude),
        radius: 100,
        strokeWeight: 3,
        strokeColor: '#75B8FA',
        strokeOpacity: 1,
        strokeStyle: 'solid',
        fillColor: '#CFE7FF',
        fillOpacity: 0.7,
      });
      circle.setMap(map);

      const content = `
        <div style="
          width: 270px;
          padding:8px;
          background:white;
          border-radius:3px;
          box-shadow:0 2px 6px rgba(0,0,0,0.3);
          font-size:14px;
          "
        >
          정확한 위치는 매칭 완료 후 표시됩니다.
        </div>
      `;

      const infoWindow = new window.kakao.maps.InfoWindow({
        content,
        position: new window.kakao.maps.LatLng(latitude, longitude),
        removable: true,
      });

      infoWindow.open(map);

      window.kakao.maps.event.addListener(circle, 'click', () => {
        infoWindow.open(map);
      });
    } else {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(latitude, longitude),
      });
      marker.setMap(map);

      const content = `
        <div style="
          padding:8px;
          background:white;
          border-radius:3px;
          font-size:14px;
          "
        >
          헬피 위치
        </div>
      `;

      const infoWindow = new window.kakao.maps.InfoWindow({
        content,
        position: new window.kakao.maps.LatLng(latitude, longitude),
        removable: true,
      });

      infoWindow.open(map, marker);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(map, marker);
      });
    }
  }, [isMapLoaded, latitude, longitude, type, zoomLevel]);

  return (
    <>
      {!isMapLoaded && (
        <Container width={width} height={height} justify="center" align="center">
          <Spinner />
        </Container>
      )}
      <div
        ref={mapRef}
        style={{ width, height: isMapLoaded ? height : 0 }}
      />
    </>
  );
}

export default KakaoMap;
