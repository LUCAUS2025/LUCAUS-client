import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { CardImage } from '../home/thumbnail';

const ArtistScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

const ArtistItem = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#101828' : '#6a7282')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  padding: 0.5rem;
`;

const ArtistImageWrapper = styled.div<{ selected: boolean }>`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 2px solid transparent;
  overflow-y: auto;
  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid #3b82f6;
    `}
  box-shadow: 0px 0px 8px 0px #1447E633;
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
`;

const ArtistName = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BannerScroll = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
`;

const BannerItem = styled.div`
  width: 284px;
  height: 240px;
  scroll-snap-align: center;
  flex-shrink: 0;
`;

const artists = ['에스파', 'QWER', '아이브', '차은우', '아이유', '소녀시대', '데이식스'];

const bannerImages = [
  'images/home/banner/1.webp',
  'images/home/banner/2.webp',
  'images/home/banner/3.webp',
  'images/home/banner/1.webp',
  'images/home/banner/2.webp',
  'images/home/banner/3.webp',
  'images/home/banner/2.webp',
];

export const ArtistlineUp = () => {
  const [selected, setSelected] = useState(0);
  const bannerContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = bannerContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;

      const center = containerLeft + containerWidth / 2;

      const index = sectionRefs.current.findIndex((ref) => {
        if (!ref) return false;
        const left = ref.offsetLeft;
        const right = left + ref.clientWidth;
        return center >= left && center < right;
      });

      if (index !== -1 && index !== selected) {
        setSelected(index);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [selected]);

  const scrollToIndex = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
    setSelected(index);
  };

  return (
    <>
      <ArtistScroll>
        {artists.map((name, index) => (
          <ArtistItem key={index} selected={selected === index} onClick={() => scrollToIndex(index)}>
            <ArtistImageWrapper selected={selected === index}>
              <ArtistImage src={bannerImages[index]} alt="artist" />
            </ArtistImageWrapper>
            <ArtistName>{name}</ArtistName>
          </ArtistItem>
        ))}
      </ArtistScroll>

      <BannerScroll ref={bannerContainerRef}>
        {bannerImages.map((src, index) => (
          <BannerItem
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
          >
            <CardImage src={src} alt={`배너 ${index + 1}`} />
          </BannerItem>
        ))}
      </BannerScroll>
    </>
  );
};

export default ArtistlineUp;
