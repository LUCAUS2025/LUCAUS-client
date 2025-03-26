import styled from 'styled-components';

const LostItem = () => {
  return (
    <BigContainer>
      <Container>
        분실물을 발견했어요. <br />
        어떻게 해야하나요? 🤔
        <Answer>107관 총학생회실 방문 후 접수해주세요!</Answer>
      </Container>
      <Container>
        잃어버린 물건이 있어요 😭 <br />
        어떻게 찾아야하나요?
        <Answer>이미 총학생회에 접수된 물건이라면 107관 총학생회실 방문 후 개인 신분 확인 뒤 수령가능합니다.</Answer>
      </Container>

      <SectionTitle>내 분실물 찾기</SectionTitle>

      <ItemList>
        <Item>
          <ItemImage src="/images/wallet-black.jpg" />
          <ItemInfo>
            <ItemName>검정색 반지갑</ItemName>
            <ItemDetail>습득 장소 : 310관 1층</ItemDetail>
            <Line>
              <Tag>지갑/카드</Tag>
              <ItemDate>접수 일자 | 05.19</ItemDate>
            </Line>
          </ItemInfo>
        </Item>
        <Item>
          <ItemImage src="/images/wallet-black.jpg" />
          <ItemInfo>
            <ItemName>검정색 반지갑</ItemName>
            <ItemDetail>습득 장소 : 310관 1층</ItemDetail>
            <Line>
              <Tag>지갑/카드</Tag>
              <ItemDate>접수 일자 | 05.19</ItemDate>
            </Line>
          </ItemInfo>
        </Item>
        <Item>
          <ItemImage src="/images/wallet-black.jpg" />
          <ItemInfo>
            <ItemName>검정색 반지갑</ItemName>
            <ItemDetail>습득 장소 : 310관 1층</ItemDetail>
            <Line>
              <Tag>지갑/카드</Tag>
              <ItemDate>접수 일자 | 05.19</ItemDate>
            </Line>
          </ItemInfo>
        </Item>
        <Item>
          <ItemImage src="/images/wallet-black.jpg" />
          <ItemInfo>
            <ItemName>검정색 반지갑</ItemName>
            <ItemDetail>습득 장소 : 310관 1층</ItemDetail>
            <Line>
              <Tag>지갑/카드</Tag>
              <ItemDate>접수 일자 | 05.19</ItemDate>
            </Line>
          </ItemInfo>
        </Item>
      </ItemList>
    </BigContainer>
  );
};

export default LostItem;

// Styled Components

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  gap: 24px;
`;

const Container = styled.div`
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  font-weight: 600;
  line-height: 1.5;
`;

const Answer = styled.div`
  border-top: 1px solid #d1d5dc;
  font-weight: 400;
  padding-top: 8px;
  margin-top: 8px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 16px;
`;

export const Item = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px;
  border-bottom: 1px solid #d1d5dc;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const ItemName = styled.div`
  font-weight: 700;
`;

export const ItemDetail = styled.div`
  font-size: 14px;
  color: #4b5563;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #eef2ff;
  color: #4f46e5;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 9999px;
  width: fit-content;
`;

export const ItemDate = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
