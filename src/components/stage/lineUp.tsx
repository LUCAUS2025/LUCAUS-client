import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ListOrdered, Image as ImageIcon } from 'lucide-react';

const ArtistScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  gap: 2rem;
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
  width: 5rem;
  height: 5rem;
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
`;

const Card = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: 0.5rem;
  overflow-y: auto; // 세로 스크롤 활성화
  max-height: 240px; // 높이를 제한하여 스크롤이 작동하도록 설정
  padding: 1rem;
`;

const CardImage = styled.img`
  width: 580px; // 이미지 너비 580px로 수정
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
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

// List view table 스타일
const TableWrapper = styled.div`
  background-color: #4b5563;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid white;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Tag = styled.span`
  background: transparent;
  border: 1px solid white;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.875rem;
`;

const artists = [
  '멋쟁이 밴드처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 호랑이처럼',
  '멋쟁이 사자처럼',
  '멋쟁이 판다처럼',
];

export const LineUp = () => {
  const [selected, setSelected] = useState(0);
  const [isListView, setIsListView] = useState(false);

  return (
    <>
      {isListView ? (
        <TableWrapper>
          <TableHeader>
            <div style={{ flex: 2 }}>시간</div>
            <div style={{ flex: 1 }}>카테고리</div>
            <div style={{ flex: 2 }}>공연팀</div>
          </TableHeader>

          {[...Array(7)].map((_, i) => (
            <TableRow key={i}>
              <div style={{ flex: 2 }}>nn:nn - nn:nn</div>
              <div style={{ flex: 1 }}>
                <Tag>{i === 1 ? '댄스' : '밴드'}</Tag>
              </div>
              <div style={{ flex: 2 }}>공연팀명</div>
            </TableRow>
          ))}
        </TableWrapper>
      ) : (
        <>
          <ArtistScroll>
            {artists.map((name, index) => (
              <ArtistItem key={index} selected={selected === index} onClick={() => setSelected(index)}>
                <ArtistImageWrapper selected={selected === index}>
                  <ArtistImage src="images/home/banner/1.png" alt="artist" />
                </ArtistImageWrapper>
                <ArtistName>{name}</ArtistName>
              </ArtistItem>
            ))}
          </ArtistScroll>

          <Card>
            <CardImage src="images/home/banner/1.png" alt="옥씨 부인전" />
            <CardImage src="images/home/banner/1.png" alt="옥씨 부인전" />
            <CardImage src="images/home/banner/1.png" alt="옥씨 부인전" />
          </Card>
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
