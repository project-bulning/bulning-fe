import { useUser } from '@providers/UserProvider.tsx';

function LoginAuthPage() {
  const { user } = useUser();

  if (!user) {
    return <div>로그인되지 않았습니다.</div>;
  }

  return (
    <div>
      <h1>
        환영합니다,
        {user.name}
        님!
        토큰 받아오는 화면
      </h1>
    </div>
  );
}

export default LoginAuthPage;
