import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Information = () => {
  const navigate = useNavigate();

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
            <InfoTitleCol onClick={() => navigate('/notice')}>
              <InfoBoxTitle>총학생회 공지</InfoBoxTitle>
              <InfoBoxDescription>배리어 프리존 안내</InfoBoxDescription>
            </InfoTitleCol>
          </InfoBox>
          <CardList>
            <InfoCard onClick={() => navigate('/lostitem')}>
              <CardImg />
              <CardText>분실물 안내</CardText>
            </InfoCard>
            <InfoCard onClick={() => navigate('/barrierfree')}>
              <CardImg />
              <CardText>배리어프리</CardText>
            </InfoCard>
            <InfoCard onClick={() => navigate('/entry')}>
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
            <Subtitle>축제 사이트에 오류가 있어요!</Subtitle>
            <InfoBox>
              <InfoBoxImg src="images/information/idea.webp"></InfoBoxImg>
              <InfoBoxText>멋쟁이사자처럼 중앙대학교 카카오톡 채널 바로가기</InfoBoxText>
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
