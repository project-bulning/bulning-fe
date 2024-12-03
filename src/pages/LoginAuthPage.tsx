import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { tokenStorage } from '@/utils/tokenStorage';

function LoginAuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(new URL(url).search);

    const accessToken = params.get('access_token');

    if (accessToken) {
      tokenStorage.set(accessToken);
    }
    navigate(routePaths.MAIN);
  }, [navigate]);

  return null;
}

export default LoginAuthPage;
