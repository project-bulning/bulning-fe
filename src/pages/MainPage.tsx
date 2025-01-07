import { useEffect } from 'react';
import { useCurrentUser } from '@providers/CurrentUserProvider';

function MainPage() {
  const { isLoggedIn, currentUser } = useCurrentUser();

  useEffect(() => {
    console.log('isLoggedIn:', isLoggedIn);
    console.log('currentUser:', currentUser);
  }, [isLoggedIn, currentUser]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>로그인되었습니다!</p>
          <p>
            이름:
            {currentUser?.name}
          </p>
          <p>
            이메일:
            {currentUser?.email}
          </p>
        </div>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </div>
  );
}

export default MainPage;
