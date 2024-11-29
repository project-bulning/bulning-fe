import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths';

function LoginAuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(new URL(url).search);

    const accessToken = params.get('access_token');

    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      console.log('Access token saved:', accessToken);
      navigate(routePaths.MAIN);
    } else {
      console.log('Access token not found in the URL.');
    }
  }, [navigate]);

  return null;
}

export default LoginAuthPage;
