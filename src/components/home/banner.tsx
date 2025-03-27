import { useState } from 'react';
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

  return (
    <CarouselContainer>
      <Card>
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
      <BackCards>
        {images.map((image, index) => {
          const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          return (
            (isPrevious || isNext) && (
              <BackCard key={index} active={isPrevious || isNext}>
                <BackCardImage src={image} alt={`Slide ${index}`} />
              </BackCard>
            )
          );
        })}
      </BackCards>
    </CarouselContainer>
  );
};

const images = [
  '/images/home/banner/1.png',
  '/images/home/banner/1.png',
  '/images/home/banner/1.png',
  '/images/home/banner/1.png',
  '/images/home/banner/1.png',
  '/images/home/banner/1.png',
  '/images/home/banner/1.png',
  '/images/home/banner/1.png',
];

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
`;

const Card = styled.div`
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

const LeftButton = styled(Button)`
  left: 10px;
  background: rgba(255, 255, 255, 0.5);
`;

const RightButton = styled(Button)`
  right: 10px;
  background: rgba(255, 255, 255, 0.5);
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

const BackCards = styled.div`
  display: flex;
  z-index: -1;
  width: 100%;
  position: relative;
`;

const BackCard = styled.div<IndicatorProps>`
  background-color: ${(props) => (props.active ? '#e5e7eb' : '#f0f0f0')};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => (props.active ? '0 4px 10px rgba(0, 0, 0, 0.2)' : 'none')};
`;

const BackCardImage = styled.img`
  width: 100%;
  height: 100%;
`;
