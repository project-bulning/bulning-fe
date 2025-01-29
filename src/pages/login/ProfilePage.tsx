import { useEffect, useState } from 'react';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { getMyInfo } from '@/api/user';

function ProfilePage() {
  const [info, setInfo] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        const myInfo = await getMyInfo();
        setInfo(myInfo);
        console.log(myInfo);
      } catch (fetchError) {
        console.error('Error fetching my info:', fetchError);
        setError('정보를 불러오는 중 문제가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (isLoading) {
    return (
      <DefaultPaddedContainer>
        <Container>로딩 중...</Container>
      </DefaultPaddedContainer>
    );
  }

  if (error) {
    return (
      <DefaultPaddedContainer>
        <Container>{error}</Container>
      </DefaultPaddedContainer>
    );
  }

  return (
    <DefaultPaddedContainer>
      <Container>
        {info ? (
          <div>
            <h2>{info.name}</h2>
            <p>{info.email}</p>
          </div>
        ) : (
          <p>정보가 없습니다.</p>
        )}
      </Container>
    </DefaultPaddedContainer>
  );
}

export default ProfilePage;
