import { Thumbnail } from '../../components/home/thumbnail';
import { Banner } from '../../components/home/banner';
import { Subtitle, Title } from './stage';
import HomeNotice from '../../components/home/HomeNotice';
import Footer from '../../components/home/Footer';

export const Home = () => {
  return (
    <>
      <Banner />
      <Title>이 무대 절대 놓치지 마세요!</Title>
      <Subtitle>올해 축제를 빛낼 아티스트들을 지금 확인하세요</Subtitle>
      <Thumbnail />

      <HomeNotice />

      <Title>놓칠 수 없는 부스</Title>
      <Subtitle>꼭 가봐야할 부스를 추천해드려요.</Subtitle>
      <Thumbnail />

      <Footer />
    </>
  );
};
