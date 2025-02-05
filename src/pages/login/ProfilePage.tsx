import { useEffect, useState } from 'react';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import Navbar from '@components/navbar';
import { Heading, Paragraph } from '@components/text';
import Spinner from '@components/fallback/Spinner';
import { getMyInfo } from '@/api/user';
import logo from '@/assets/bulning-logo.png';

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
        <Container height="100dvh" justify="center" align="center">
          <Spinner />
        </Container>
      </DefaultPaddedContainer>
    );
  }

  if (error) {
    return (
      <DefaultPaddedContainer>
        <Container justify="center" align="center" height="100dvh">{error}</Container>
      </DefaultPaddedContainer>
    );
  }

  return (
    <DefaultPaddedContainer
      css={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Container
        direction="column"
        justify="center"
        align="center"
        css={{
          width: '95%',
          maxWidth: '420px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          border: '1px solid #EAEAEA',
        }}
      >
        <img
          src={logo}
          alt="Profile Logo"
          css={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid #012962',
            objectFit: 'cover',
          }}
        />
        <Heading.H3_5 css={{
          color: '#012962', fontWeight: 'bold', marginTop: '15px', fontSize: '24px',
        }}
        >
          {info?.name || '사용자'}
        </Heading.H3_5>
        <Container
          direction="column"
          gap="12px"
          css={{
            marginTop: '15px',
            padding: '20px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(8px)',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <Paragraph css={{ color: '#333', fontSize: '16px', fontWeight: '500' }}>{info?.nickname || '-'}</Paragraph>
          <Paragraph css={{ color: '#555', fontSize: '15px' }}>
            {info?.age_group ? `${info.age_group} | ${info.gender}` : '-'}
          </Paragraph>
          <Paragraph css={{ color: '#555', fontSize: '15px' }}>{info?.location || '-'}</Paragraph>
          <Paragraph css={{ color: '#555', fontSize: '15px' }}>{info?.location_detail || '-'}</Paragraph>
          <Paragraph css={{ color: '#666', fontSize: '15px', fontStyle: 'italic' }}>
            {info?.pr_memo || '소개글이 없습니다.'}
          </Paragraph>
        </Container>
      </Container>
      <Navbar />
    </DefaultPaddedContainer>

  );
}

export default ProfilePage;
