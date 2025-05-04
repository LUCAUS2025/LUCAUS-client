import styled from 'styled-components';

export const Thumbnail = () => {
  return (
    <Card>
      <CardImage src="images/home/banner/1.png" alt="옥씨 부인전" />
      <CardImage src="images/home/banner/1.png" alt="옥씨 부인전" />
      <CardImage src="images/home/banner/1.png" alt="옥씨 부인전" />
    </Card>
  );
};

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: 0.5rem;
  overflow-y: auto; // 세로 스크롤 활성화
  max-height: 240px; // 높이를 제한하여 스크롤이 작동하도록 설정
  padding: 0 0 1rem 0;
  margin: 0 -16px 0 -16px;
`;

export const CardImage = styled.img`
  width: 580px; // 이미지 너비 580px로 수정
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  &:first-child {
    margin-left: 16px; // 첫 번째 이미지에만 왼쪽 패딩 추가
  }
`;
