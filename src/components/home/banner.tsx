import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <CarouselContainer>
      <Card>
        <BackCardLeft>
          <BackCardImage src={images[prevIndex]} alt="Previous Slide" />
        </BackCardLeft>
        <BackCardRight>
          <BackCardImage src={images[nextIndex]} alt="Next Slide" />
        </BackCardRight>

        <CardContent>
          <Image src={images[currentIndex]} alt="Dress Code" />
          <LeftButton onClick={prevSlide}>
            <ChevronLeft size={24} color="#333" />
          </LeftButton>
          <RightButton onClick={nextSlide}>
            <ChevronRight size={24} color="#333" />
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
const images = [
  '/images/home/banner/1.webp',
  '/images/home/banner/2.webp',
  '/images/home/banner/3.webp',
  '/images/home/banner/1.webp',
  '/images/home/banner/2.webp',
  '/images/home/banner/3.webp',
  '/images/home/banner/1.webp',
  '/images/home/banner/2.webp',
];

// 스타일 정의
const CarouselContainer = styled.div`
  width: 100%;
  margin: auto;
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
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0px 0px 40px 0px #00000033;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #e0e0e0;
  }
`;

const LeftButton = styled(Button)`
  left: 10px;
`;

const RightButton = styled(Button)`
  right: 10px;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

interface IndicatorProps {
  active: boolean;
}

const Indicator = styled.div<IndicatorProps>`
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#3b82f6' : '#d1d5db')};
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.active ? 'scale(1.25)' : 'scale(1)')};
`;

// 💡 양 옆 BackCard
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
  opacity: 0.2;
`;

const BackCardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: blur(1px);
  border-radius: 16px;
`;
