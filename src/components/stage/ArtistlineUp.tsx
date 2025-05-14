import { useEffect, useRef, useState } from 'react';
import { CardImage } from '../home/thumbnail';
import {
  ArtistImage,
  ArtistImageWrapper,
  ArtistItem,
  ArtistName,
  ArtistScroll,
  BannerImage,
  BannerScroll,
} from './lineUp';

const artists = ['에스파', 'QWER', '아이브', '차은우', '아이유', '소녀시대', '데이식스'];

const artistImage = [
  'images/home/banner/1.webp',
  'images/home/banner/1.webp',
  'images/home/banner/1.webp',
  'images/home/banner/1.webp',
  'images/home/banner/1.webp',
  'images/home/banner/1.webp',
  'images/home/banner/1.webp',
];

const bannerImages = [
  'images/home/stage/newjeans.webp',
  'images/home/stage/newjeans.webp',
  'images/home/stage/newjeans.webp',
  'images/home/stage/newjeans.webp',
  'images/home/stage/newjeans.webp',
  'images/home/stage/newjeans.webp',
  'images/home/stage/newjeans.webp',
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
              <ArtistImage src={artistImage[index]} alt="artist" />
            </ArtistImageWrapper>
            <ArtistName>{name}</ArtistName>
          </ArtistItem>
        ))}
      </ArtistScroll>

      <BannerScroll ref={bannerContainerRef}>
        {bannerImages.map((src, index) => (
          <BannerImage
            key={index}
            src={src}
            alt={`배너 ${index + 1}`}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
          />
        ))}
      </BannerScroll>
    </>
  );
};

export default ArtistlineUp;
