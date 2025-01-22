import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import { tokenStorage } from '@/utils/tokenStorage';
import { getMyInfo } from '@/api/user';

function LoginAuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(new URL(url).search);

    const accessToken = params.get('access_token');

    if (accessToken) {
      tokenStorage.set(accessToken);
    }
    getMyInfo()
      .then((data) => {
        if (data.address === null) {
          navigate(routePaths.MEMBERSHIP);
        } else {
          navigate(routePaths.MAIN);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch user info:', error);
        navigate(routePaths.MAIN);
      });
  }, [navigate]);

  return null;
}

export default LoginAuthPage;
