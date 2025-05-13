import styled from 'styled-components';

export const Thumbnail = () => {
  return (
    <Card>
      <CardImage src="images/home/stage/newjeans.webp" alt="옥씨 부인전" />
      <CardImage src="images/home/stage/newjeans.webp" alt="옥씨 부인전" />
      <CardImage src="images/home/stage/newjeans.webp" alt="옥씨 부인전" />
    </Card>
  );
};

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  overflow-y: auto; // 세로 스크롤 활성화
  padding: 0 0 1rem 0;
  margin: 0 -16px 0 -16px;
`;

export const CardImage = styled.img`
  min-width: 76%;
  max-width: 76%;
  height: 100%;
  object-fit: cover; // 이미지 비율 유지
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  &:first-child {
    margin-left: 16px; // 첫 번째 이미지에만 왼쪽 패딩 추가
  }
`;
