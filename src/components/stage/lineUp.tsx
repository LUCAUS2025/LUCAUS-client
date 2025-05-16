import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ListOrdered, Image as ImageIcon } from 'lucide-react';

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
  // gap: 1rem;
`;

export const BannerImage = styled.img`
  width: 76%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin-left: 1rem;

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

interface LineUpProps {
  artists: string[];
  artistImages: string[];
  bannerImages: string[];
  showListToggle?: boolean;
}

export const LineUp = ({ artists, artistImages, bannerImages, showListToggle }: LineUpProps) => {
  const [selected, setSelected] = useState(0);
  const [isListView, setIsListView] = useState(false);

  const bannerContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLImageElement | null)[]>([]);
  const artistContainerRef = useRef<HTMLDivElement>(null);
  const artistItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToIndex = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      const parent = bannerContainerRef.current;
      if (parent) {
        const left = el.offsetLeft - 16;
        parent.scrollTo({ left, behavior: 'smooth' });
      } else {
        el.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    }

    artistItemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
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
          {artists.map((name, i) => (
            <TableRow key={i}>
              <div>nn:nn - nn:nn</div>
              <div>
                <Tag>{i === 1 ? '댄스' : '밴드'}</Tag>
              </div>
              <div>{name}</div>
            </TableRow>
          ))}
        </TableWrapper>
      ) : (
        <>
          <ArtistScroll ref={artistContainerRef}>
            {artists.map((name, index) => (
              <ArtistItem
                key={index}
                selected={selected === index}
                onClick={() => scrollToIndex(index)}
                ref={(el) => {
                  artistItemRefs.current[index] = el;
                }}
              >
                <ArtistImageWrapper selected={selected === index}>
                  <ArtistImage src={artistImages[index]} alt="artist" />
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
                onClick={() => scrollToIndex(index)}
              />
            ))}
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

export default LineUp;
