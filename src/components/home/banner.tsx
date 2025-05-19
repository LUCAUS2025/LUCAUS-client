import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { table } from 'console';

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef<number | null>(null);

  const images = [
    '/images/home/banner/1.webp',
    '/images/home/banner/2.webp',
    '/images/home/banner/3.webp',
    '/images/home/banner/4.webp',
    '/images/home/banner/5.webp',
  ];

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetAutoSlide();
  };

  useEffect(() => {
    const today = new Date();
    const skipStart = new Date('2025-05-21');
    const skipEnd = new Date('2025-05-23');

    if (today >= skipStart && today <= skipEnd) return;

    startAutoSlide();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) nextSlide();
      if (diff < -50) prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (diff > 50) {
      nextSlide();
      isDragging.current = false;
    } else if (diff < -50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    dragStartX.current = null;
  };

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <CarouselContainer>
      <Card
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <BackCardLeft>
          <BackCardImage src={images[prevIndex]} alt="Previous Slide" />
        </BackCardLeft>
        <BackCardRight>
          <BackCardImage src={images[nextIndex]} alt="Next Slide" />
        </BackCardRight>

        <CardContent>
          {currentIndex === 0 ? (
            <Image onClick={() => navigate('/notice/780')} src={images[currentIndex]} alt="Dress Code" />
          ) : currentIndex === 1 ? (
            <Image onClick={() => navigate('/notice/777')} src={images[currentIndex]} alt="울림 WEEK" />
          ) : currentIndex === 2 ? (
            <Image onClick={() => navigate('/notice/779')} src={images[currentIndex]} alt="다회용기" />
          ) : currentIndex === 3 ? (
            <Image onClick={() => navigate('/notice/778')} src={images[currentIndex]} alt="보조배터리" />
          ) : currentIndex === 4 ? (
            <Image onClick={() => navigate('/stamp/auth?tab=stamp')} src={images[currentIndex]} alt="항해일지" />
          ) : (
            <Image src={images[currentIndex]} alt="배너" />
          )}

          <LeftButton onClick={prevSlide}>
            <Arrow src="images/common/left.webp" />
          </LeftButton>
          <RightButton onClick={nextSlide}>
            <Arrow src="images/common/right.webp" />
          </RightButton>
        </CardContent>
      </Card>

      <Indicators>
        {images.map((_, index) => (
          <Indicator key={index} active={index === currentIndex} />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

// 이미지 리스트
const Arrow = styled.img`
  width: 24px;
  height: 24px;
`;

// 스타일 정의
const CarouselContainer = styled.div`
  margin: 0 -16px;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: background 0.2s ease;
`;

const LeftButton = styled(Button)`
  left: 16px;
  width: 36px;
  height: 36px;
`;

const RightButton = styled(Button)`
  right: 16px;
  width: 36px;
  height: 36px;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 6px;
  position: relative;
  z-index: 3;
`;

interface IndicatorProps {
  active: boolean;
}

const Indicator = styled.div<IndicatorProps>`
  width: ${(props) => (props.active ? '24px' : '8px')};
  height: 8px;
  border-radius: 8px;
  background: ${(props) => (props.active ? '#1447e6' : '#d1d5db')};
  transition: all 0.3s ease;
`;

// 양 옆 BackCard
const BackCardLeft = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateX(-30%);
  width: 60%;
  z-index: 1;
`;

const BackCardRight = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(30%);
  width: 60%;
  z-index: 1;
`;

const BackCardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
