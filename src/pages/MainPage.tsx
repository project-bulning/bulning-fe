import { DefaultPaddedContainer } from '@components/container/variants';
import Header from '@components/header';
import RequestHelpBanner from '@features/main/banner/RequestHelpBanner';
import CatchRequestList from '@features/main/CatchRequestList';
import Navbar from '@components/navbar';
import Container from '@components/container';
import Spacing from '@components/spacing';

function MainPage() {
  return (
    <DefaultPaddedContainer>
      <Container direction="column" padding="0 0 100px 0">
        <Header />
        <Spacing height="3  px" />
        <RequestHelpBanner />
        <Spacing height="30px" />
        <CatchRequestList />
        <Navbar />
      </Container>
    </DefaultPaddedContainer>
  );
}

export default MainPage;
