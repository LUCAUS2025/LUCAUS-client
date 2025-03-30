import React from 'react';
import styled from 'styled-components';

export const Information = () => {
  return (
    <Wrapper>
      <FestivalInfo>
        <TitleContainer>
          <Title>축제 모아보기</Title>
          <Description>축제 정보를 여기서 한번에 확인해보세요!</Description>
        </TitleContainer>
        <InfoContainer>
          <InfoBox>
            <InfoTitleImg src="images/information/idea.webp" />
            <InfoTitleCol>
              <InfoBoxTitle>총학생회 공지</InfoBoxTitle>
              <InfoBoxDescription>배리어 프리존 안내</InfoBoxDescription>
            </InfoTitleCol>
          </InfoBox>
          <CardList>
            <InfoCard>
              <CardImg />
              <CardText>분실물 안내</CardText>
            </InfoCard>
            <InfoCard>
              <CardImg />
              <CardText>배리어프리</CardText>
            </InfoCard>
            <InfoCard>
              <CardImg />
              <CardText>이동 정책</CardText>
            </InfoCard>
          </CardList>
        </InfoContainer>
      </FestivalInfo>

      <InquiryContainer>
        <TitleWithImgContainer>
          <TitleImg src="images/information/FaqChat.webp" />
          <Title>문의하기</Title>
        </TitleWithImgContainer>
        <BoxList>
          <BoxContainer>
            <Subtitle>축제에 관해서 궁금한 것이 있어요!</Subtitle>
            <InfoBox>
              <InfoBoxImg src="images/information/idea.webp"></InfoBoxImg>
              <InfoBoxText>축제 기획단 카카오톡 채널 바로가기</InfoBoxText>
            </InfoBox>
          </BoxContainer>
          <BoxContainer>
            <Subtitle>축제에 관해서 궁금한 것이 있어요!</Subtitle>
            <InfoBox>
              <InfoBoxImg src="images/information/idea.webp"></InfoBoxImg>
              <InfoBoxText>축제 기획단 카카오톡 채널 바로가기</InfoBoxText>
            </InfoBox>
          </BoxContainer>
        </BoxList>
      </InquiryContainer>

      <MakersContainer>
        <Title>이 사이트를 만든 사람들</Title>
        <MakersBox>
          <MakersTitleContainer>
            <MakersTitleImg src="images/information/likeLion.webp" />
            <MakersTitleText>LIKELION CAU</MakersTitleText>
          </MakersTitleContainer>
          <MakersContent>
            <Col>
              <Part>
                <MakerText>기획</MakerText>
                <MakerText>조하정, 양채령</MakerText>
              </Part>
              <Part>
                <MakerText>디자인</MakerText>
                <MakerText>노지우</MakerText>
              </Part>
            </Col>
            <Col>
              <Part>
                <MakerText>프론트엔드</MakerText>
                <MakerText>정선빈, 황인영</MakerText>
              </Part>
              <Part>
                <MakerText>백엔드</MakerText>
                <MakerText>김태진, 최은수</MakerText>
              </Part>
            </Col>
          </MakersContent>
        </MakersBox>
      </MakersContainer>
    </Wrapper>
  );
};

export default Information;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 30px 16px;
  margin-bottom: 17px;
`;
const FestivalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: -0.26px;
  color: #030712;
`;
const TitleImg = styled.img`
  width: 40px;
  height: 40px;
`;
const InfoTitleImg = styled.img`
  width: 60px;
  height: 60px;
`;
const InfoTitleCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const TitleWithImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Description = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #6a7282;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const InfoBox = styled.div`
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;
const InfoBoxTitle = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #101828;
`;
const InfoBoxDescription = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
`;
const CardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
  width: 100%;
`;
const InfoCard = styled.div`
  background-color: #f9fafb;
  border-radius: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;
const CardImg = styled.img`
  width: 60px;
  height: 60px;
`;
const CardText = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
  color: #101828;
`;
const InquiryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const InfoBoxText = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #101828;
`;
const Subtitle = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #101828;
`;
const InfoBoxImg = styled.img`
  width: 32px;
  height: 32px;
`;
const MakersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const MakersBox = styled.div`
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;
const MakersTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  border-bottom: solid 1px #d1d5dc;
  padding-bottom: 8px;
`;
const MakersTitleImg = styled.img`
  width: 36px;
  height: 18px;
`;
const MakersTitleText = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #101828;
`;
const MakersContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
const Part = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;
const MakerText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #101828;
  width: 100%;
  white-space: nowrap;
`;
