import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ListOrdered, Image as ImageIcon } from 'lucide-react';
import { Margin } from '../home/thumbnail';

export const ArtistScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  gap: 10px;
  padding: 1rem;
  margin: 0 -16px 0 -16px;
  white-space: pre-line;
`;

export const ArtistItem = styled.div<{ selected: boolean }>`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#101828' : '#6a7282')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  padding-bottom: 0.5rem;
`;

export const ArtistImageWrapper = styled.div<{ selected: boolean }>`
  width: 50px;
  object-fit: cover;
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
  text-align: center;
`;

export const BannerScroll = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin: 0 -16px 0 -16px;
`;

export const BannerImage = styled.img`
  width: 76%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding-left: 1rem;

  &:last-child {
    margin-right: 1rem;
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
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #00000;
`;

const TableHeader = styled.div`
  color: #1447e6;
  display: flex;
  font-weight: bold;
  padding: 0.75rem 0;
  border-bottom: 1px solid #d1d5dc;

  > div {
    flex: 1;
    text-align: center;
  }
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  font-size: 1rem;
  line-height: 1.4;
  > div {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Tag = styled.span`
  font-size: 14px;
  background: #f3f4f6;
  border: 1px solid #d1d5dc;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  color: #364153;
`;

interface LineUpProps {
  artists: string[];
  artistImages: string[];
  bannerImages: string[];
  showListToggle?: boolean;
  times?: string[];
  categories?: string[];
  instagram?: string[];
  onInternalScrollTrigger?: () => void; // ✅ 추가
}

export const StudentLineUp = ({
  artists,
  artistImages,
  bannerImages,
  showListToggle,
  times,
  categories,
  instagram,
  onInternalScrollTrigger,
}: LineUpProps) => {
  const [selected, setSelected] = useState(0);
  const [isListView, setIsListView] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.left - b.boundingClientRect.left);
        if (visible.length > 0) {
          const index = Number(visible[0].target.getAttribute('data-index'));
          if (!isNaN(index)) {
            setSelected(index);
          }
        }
      },
      {
        root: null,
        threshold: 0.6,
      },
    );

    bannerImages.forEach((_, i) => {
      const el = scrollRef.current?.querySelector(`[data-index='${i}']`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [bannerImages]);

  const scrollTo = (index: number) => {
    onInternalScrollTrigger?.();
    const el = scrollRef.current?.querySelector(`[data-index='${index}']`);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // Y축 이동 억제
        inline: 'start', // X축 이동은 유지
      });
      setSelected(index);
    }
  };

  return (
    <>
      {isListView ? (
        <TableWrapper>
          <TableHeader>
            <div>시간</div>
            <div>장르</div>
            <div>공연팀</div>
          </TableHeader>
          {artists.map((name, i) => (
            <TableRow key={i}>
              <div>{times?.[i] ?? 'nn:nn - nn:nn'}</div>
              <div>
                <Tag>{categories?.[i] ?? (i === 1 ? '댄스' : '밴드')}</Tag>
              </div>
              <div>{name}</div>
            </TableRow>
          ))}
        </TableWrapper>
      ) : (
        <>
          <ArtistScroll>
            {artists.map((name, index) => (
              <ArtistItem key={index} selected={selected === index} onClick={() => scrollTo(index)}>
                <ArtistImageWrapper selected={selected === index}>
                  <ArtistImage src={artistImages[index]} alt="artist" />
                </ArtistImageWrapper>
                <ArtistName>{name}</ArtistName>
              </ArtistItem>
            ))}
          </ArtistScroll>

          <BannerScroll ref={scrollRef}>
            {bannerImages.map((src, index) => (
              <BannerImage
                key={index}
                src={src}
                data-index={index}
                alt={`배너 ${index + 1}`}
                onClick={() => {
                  const link = instagram?.[index];
                  if (link) window.open(link, '_blank');
                }}
              />
            ))}
            <Margin />
          </BannerScroll>
        </>
      )}
      {showListToggle && (
        <ListButtonWrapper>
          <ListButton onClick={() => setIsListView((prev) => !prev)}>
            {isListView ? <ImageIcon size={16} /> : <ListOrdered size={16} />}
            {isListView ? '이미지 뷰' : '리스트 뷰'}
          </ListButton>
        </ListButtonWrapper>
      )}
    </>
  );
};

export default StudentLineUp;
