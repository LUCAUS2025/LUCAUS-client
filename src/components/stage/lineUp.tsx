import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ListOrdered, Image as ImageIcon } from 'lucide-react';

export const ArtistScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  gap: 10px;
  padding: 0 1rem;
  white-space: pre-line;
`;

export const ArtistItem = styled.div<{ selected: boolean }>`
  min-width: 80px;
  // min-width: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#101828' : '#6a7282')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  padding: 0.5rem;
`;

export const ArtistImageWrapper = styled.div<{ selected: boolean }>`
  width: 50px;
  object-fit: cover; // 이미지 비율 유지
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

export const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
`;

export const ArtistName = styled.div`
  font-size: 12px;
  margin-top: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
`;

export const BannerScroll = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  /* 스크롤 스냅 제거 or 약화 */
  scroll-snap-type: none;
  scroll-snap-align: start;
`;

export const BannerItem = styled.div`
  flex: 0 0 auto;
  width: 76%;
  margin-right: 1rem;
  /* 여러 개가 한 줄에 보이게 */
  scroll-snap-align: none;
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  margin: 0 -16px 0 -16px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 이미지 비율 유지
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  &:first-child {
    margin-left: 16px; // 첫 번째 이미지에만 왼쪽 패딩 추가
  }
`;

const ListButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ListButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #111827;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

const TableWrapper = styled.div`
  background-color: #6d6d6d;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
`;

const TableHeader = styled.div`
  display: flex;
  font-weight: bold;
  padding: 0.75rem 0;
  border-bottom: 1px solid white;

  > div {
    flex: 1;
    text-align: center;
  }
`;

const TableRow = styled.div`
  display: flex;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  > div {
    flex: 1;
    text-align: center;
  }
`;

const Tag = styled.span`
  background: transparent;
  border: 1px solid white;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 12px;
`;

const artists = [
  '김승재와\n흑백 건반들',
  '멋쟁이 호랑이처럼',
  '멋쟁이 사자처럼',
  '멋쟁이 토끼처럼',
  '멋쟁이 코끼리처럼',
  '멋쟁이 여우처럼',
  '멋쟁이 판다처럼',
];

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

export const LineUp = () => {
  const [selected, setSelected] = useState(0);
  const [isListView, setIsListView] = useState(false);
  const bannerContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = bannerContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerLeft = container.scrollLeft + 70;

      const index = sectionRefs.current.findIndex((ref) => {
        if (!ref) return false;
        const left = ref.offsetLeft;
        const right = left + ref.clientWidth;
        return containerLeft >= left && containerLeft < right;
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
      block: 'start',
      inline: 'nearest',
    });
    setSelected(index);
  };

  return (
    <>
      {isListView ? (
        <TableWrapper>
          <TableHeader>
            <div>시간</div>
            <div>카테고리</div>
            <div>공연팀</div>
          </TableHeader>
          {[...Array(7)].map((_, i) => (
            <TableRow key={i}>
              <div>nn:nn - nn:nn</div>
              <div>
                <Tag>{i === 1 ? '댄스' : '밴드'}</Tag>
              </div>
              <div>{artists[i]}</div>
            </TableRow>
          ))}
        </TableWrapper>
      ) : (
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
              <BannerItem
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
              >
                <BannerImage src={src} alt={`배너 ${index + 1}`} />
              </BannerItem>
            ))}
          </BannerScroll>
        </>
      )}

      <ListButtonWrapper>
        <ListButton onClick={() => setIsListView((prev) => !prev)}>
          {isListView ? <ImageIcon size={16} /> : <ListOrdered size={16} />}
          {isListView ? '이미지 뷰' : '리스트 뷰'}
        </ListButton>
      </ListButtonWrapper>
    </>
  );
};

export default LineUp;
