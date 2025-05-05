import { Thumbnail } from '../../components/home/thumbnail';
import { Banner } from '../../components/home/banner';
import { Subtitle, Title } from './stage';
import HomeNotice from '../../components/home/HomeNotice';
import Footer from '../../components/home/Footer';
import styled from 'styled-components';

export const Home = () => {
  return (
    <>
      <Wrapper16>
        <Banner />
        <Title>광장기획전</Title>
        <Subtitle>지금 바로 열쇠를 모아 항해를 시작해보세요!</Subtitle>
        <Image src="/images/home/banner/1.png" alt="광장기획전 포스터" />

        <Title>이 무대 절대 놓치지 마세요!</Title>
        <Subtitle>올해 축제를 빛낼 아티스트들을 지금 확인하세요</Subtitle>
        <Thumbnail />

        <HomeNotice />

        <Title>놓칠 수 없는 부스</Title>
        <Subtitle>꼭 가봐야할 부스를 추천해드려요.</Subtitle>
        <Thumbnail />
      </Wrapper16>
      <Footer />
    </>
  );
};

export const Wrapper16 = styled.div`
  padding: 0 16px 0 16px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;
