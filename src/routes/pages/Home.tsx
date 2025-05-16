import { Thumbnail } from '../../components/home/thumbnail';
import { Banner } from '../../components/home/banner';
import { Subtitle, Title } from './stage';
import HomeNotice from '../../components/home/HomeNotice';
import Footer from '../../components/home/Footer';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import Toast from '../../components/home/Toast';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const startDate = new Date('2025-05-19'); // 시작 날짜
    const endDate = new Date('2025-05-21'); // 종료 날짜
    endDate.setHours(23, 59, 59, 999); // 종료 날짜의 끝 시간 설정

    // 오늘 날짜가 범위 내에 있는지 확인
    if (today >= startDate && today <= endDate) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  return (
    <>
      <Wrapper16>
        <Banner />
        {isVisible && ( // 조건부 렌더링
          <>
            <Title>광장기획전</Title>
            <Subtitle>지금 바로 열쇠를 모아 항해를 시작해보세요!</Subtitle>
            <Image
              src="/images/home/banner/1.webp"
              alt="광장기획전 포스터"
              onClick={() => navigate('/stamp/auth?tab=intro')}
            />
          </>
        )}
        <Toast />
        <Title>이 무대 절대 놓치지 마세요!</Title>
        <Subtitle>올해 축제를 빛낼 아티스트들을 지금 확인하세요</Subtitle>
        <Thumbnail
          artistImages={[
            '/images/home/artists/21-1.webp',
            '/images/home/artists/21-2.webp',
            '/images/home/artists/21-3.webp',
            '/images/home/artists/22-4.webp',
            '/images/home/artists/22-5.webp',
            '/images/home/artists/22-6.webp',
            '/images/home/artists/22-7.webp',
            '/images/home/artists/23-8.webp',
            '/images/home/artists/23-9.webp',
            '/images/home/artists/23-10.webp',
          ]}
          instagram={[
            'https://www.instagram.com/thornapple_official/?hl=ko',
            'https://www.instagram.com/aespa_official/',
            'https://www.instagram.com/dongwon_15/',
            'https://www.instagram.com/band_nah/',
            'https://www.instagram.com/stayc_highup/',
            'https://www.instagram.com/changmo_/?hl=ko',
            'https://www.instagram.com/hangzoo/',
            'https://www.instagram.com/yb_official_insta/',
            'https://www.instagram.com/nct_dream/',
            'https://www.instagram.com/gaekogeem/?hl=ko',
          ]}
        />

        <HomeNotice />

        <Title>놓칠 수 없는 부스</Title>
        <Subtitle>꼭 가봐야할 부스를 추천해드려요.</Subtitle>
        <Thumbnail artistImages={['/images/home/artists/21-1.webp']} />
      </Wrapper16>
      <Footer />
    </>
  );
};

export const Wrapper16 = styled.div`
  padding: 0 16px 0 16px;
  background-color: white;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;
