import { DefaultPaddedContainer } from '@components/container/variants';
import Header from '@components/header';
import RequestHelpBanner from '@features/main/banner/RequestHelpBanner';
import CatchRequestList from '@features/main/CatchRequestList';
import Navbar from '@components/navbar';
import Container from '@components/container';
import Spacing from '@components/spacing';
import { useEffect, useState } from 'react';
import { BugReport } from '@/types/bug-report';
import { getBugReportList } from '@/api/bugReports';

function MainPage() {
  const [requests, setRequests] = useState<BugReport[]>([]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
          },
          { enableHighAccuracy: true },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchRequests = async () => {
      if (latitude !== null && longitude !== null) {
        try {
          const responsesInfo = await getBugReportList({
            currentLatitude: latitude,
            currentLongitude: longitude,
          });

          setRequests(responsesInfo.bug_reports);
        } catch (error) {
          console.error('Error fetching bug report list:', error);
        }
      }
    };

    fetchRequests();
  }, [latitude, longitude]);

  return (
    <DefaultPaddedContainer>
      <Container direction="column" padding="0 0 100px 0">
        <Header />
        <Spacing height="3px" />
        <RequestHelpBanner />
        <Spacing height="30px" />
        <CatchRequestList requests={requests} />
        <Navbar />
      </Container>
    </DefaultPaddedContainer>
  );
}

export default MainPage;
