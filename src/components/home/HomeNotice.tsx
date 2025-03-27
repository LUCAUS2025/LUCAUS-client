import styled from 'styled-components';
import { Title } from '../../routes/pages/stage';
import { useNavigate } from 'react-router-dom';

const HomeNotice = () => {
  const navigate = useNavigate();

  return (
    <NoticeSection>
      <SectionHeader>
        <Title>최근 공지사항</Title>
        <MoreButton onClick={() => navigate('/notice')}>더보기</MoreButton>
      </SectionHeader>
      <NoticeCard>
        <NoticeTitle>베리어 프리존 안내</NoticeTitle>
        <NoticeContent>베리어 프리존 안내</NoticeContent>
        <NoticeDate>25.05.01</NoticeDate>
      </NoticeCard>
      <NoticeCard>
        <NoticeTitle>베리어 프리존 안내</NoticeTitle>
        <NoticeContent>베리어 프리존 안내</NoticeContent>
        <NoticeDate>25.05.01</NoticeDate>
      </NoticeCard>
    </NoticeSection>
  );
};
export default HomeNotice;

const NoticeSection = styled.div`
  margin: 40px 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreButton = styled.div`
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
`;

const NoticeCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 16px;
  padding: 20px;
  margin-top: 12px;
`;

const NoticeTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #111827;
`;

const NoticeContent = styled.div`
  font-size: 16px;
  color: #6b7280;
  margin-top: 4px;
`;

const NoticeDate = styled.div`
  // position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 14px;
  color: #6b7280;
`;
