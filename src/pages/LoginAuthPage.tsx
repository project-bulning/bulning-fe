import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginAuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      fetchUserInfo(accessToken);
    } else {
      console.log('accessToken not set');
      navigate('/login');
    }
  }, [navigate]);

  const fetchUserInfo = async (token: string) => {
    try {
      // 백엔드 API를 통해 사용자 정보 요청
      const response = await axios.get('/auth/login', {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 포함
        },
      });

      // User 정보를 처리
      const userInfo = response.data;
      console.log('User Info:', userInfo);

      // 예: Redux 상태나 Context에 사용자 정보 저장
      // dispatch(setUserInfo(userInfo));

      // 메인 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error('Error fetching user info:', error);
      // 오류 발생 시 로그인 페이지로 리디렉션
      navigate('/login');
    }
  };

  return null;
}

export default LoginAuthPage;
