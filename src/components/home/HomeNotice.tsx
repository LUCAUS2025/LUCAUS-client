import styled from 'styled-components';
import { Title } from '../../routes/pages/stage';
import { useNavigate } from 'react-router-dom';
import { getNotices } from '../../services/apis/notice';
import { useEffect, useState } from 'react';

const HomeNotice = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState<any[]>([]);

  const getNotice = () => {
    getNotices()
      .then((res) => {
        console.log(res);
        if (res.data.length > 0) {
          setNotices(res.data);
        } else {
          setNotices([]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getNotice();

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <NoticeSection>
      <SectionHeader>
        <Title>최근 공지사항</Title>
        <MoreButton onClick={() => navigate('/notice')}>더보기</MoreButton>
      </SectionHeader>
      {notices.map((notice, index) => (
        <NoticeCard key={index}>
          <NoticeTitle>{notice.title}</NoticeTitle>
          <NoticeContent>{notice.content}</NoticeContent>
          <NoticeDate>{notice.date}</NoticeDate>
        </NoticeCard>
      ))}
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
