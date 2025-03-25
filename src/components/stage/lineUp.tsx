import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ListOrdered } from 'lucide-react';

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const ArtistScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

const ArtistItem = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#2563eb' : '#6b7280')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

const ArtistImageWrapper = styled.div<{ selected: boolean }>`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 2px solid transparent;
  ${({ selected }) =>
    selected &&
    css`
      border-color: #3b82f6;
    `}
`;

const ArtistImage = styled.img`
  width: 1.5rem;
`;

const ArtistName = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 0.75rem;
`;

const CardTitle = styled.div`
  font-weight: 600;
`;

const CardSubtitle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
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

const artists = ['멋쟁이 밴드처럼', '멋쟁이 밴드처럼', '멋쟁이 밴드처럼', '멋쟁이 밴드처럼'];

export const LineUp = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <Title>아티스트 라인업</Title>
      <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>

      <ArtistScroll>
        {artists.map((name, index) => (
          <ArtistItem key={index} selected={selected === index} onClick={() => setSelected(index)}>
            <ArtistImageWrapper selected={selected === index}>
              <ArtistImage src="/likelion-logo.png" alt="Like Lion" />
            </ArtistImageWrapper>
            <ArtistName>{name}</ArtistName>
          </ArtistItem>
        ))}
      </ArtistScroll>

      <CardGrid>
        <Card>
          <CardImage src="/artist1.jpg" alt="옥씨 부인전" />
          <CardContent>
            <CardTitle>새롭게 재해석한 옥씨 부인전</CardTitle>
            <CardSubtitle>추영우 학우의 꿀 발린 보이스</CardSubtitle>
          </CardContent>
        </Card>
      </CardGrid>

      <ListButtonWrapper>
        <ListButton>
          <ListOrdered size={16} />
          리스트 뷰
        </ListButton>
      </ListButtonWrapper>
    </Container>
  );
};
