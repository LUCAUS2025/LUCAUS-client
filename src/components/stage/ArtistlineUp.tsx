import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Card, CardImage } from '../home/thumbnail';

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

const artists = [
  '멋쟁이 밴드처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 사자처럼',
  '멋쟁이 판다처럼',
];

export const ArtistlineUp = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <ArtistScroll>
        {artists.map((name, index) => (
          <ArtistItem key={index} selected={selected === index} onClick={() => setSelected(index)}>
            <ArtistImageWrapper selected={selected === index}>
              <ArtistImage src="images/home/banner/1.webp" alt="artist" />
            </ArtistImageWrapper>
            <ArtistName>{name}</ArtistName>
          </ArtistItem>
        ))}
      </ArtistScroll>
      <Card>
        <CardImage src="images/home/banner/2.webp" alt="옥씨 부인전" />
        <CardImage src="images/home/banner/2.webp" alt="옥씨 부인전" />
        <CardImage src="images/home/banner/1.webp" alt="옥씨 부인전" />
      </Card>
    </>
  );
};

export default ArtistlineUp;
