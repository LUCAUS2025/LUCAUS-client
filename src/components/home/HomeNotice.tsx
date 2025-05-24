import styled from 'styled-components';
import { Title } from '../../routes/pages/stage';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { formatDateNoTime } from '../common/formatData';
import { getTwoRecentNotice } from '../../services/apis/notice';

interface Notice {
  id: number;
  category: string;
  title: string | null;
  content: string;
  photoUrl: string;
  uploadDateTime: string;
}

const HomeNotice = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState<Notice[]>([]);

  const getNotice = () => {
    getTwoRecentNotice()
      .then((res) => {
        // console.log(res);
        if (res.result && res.result.content && res.result.content.length > 0) {
          setNotices(res.result.content);
        } else {
          setNotices([]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <NoticeSection>
      <SectionHeader>
        <Title>최근 공지사항</Title>
        <MoreButton
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/notice');
          }}
        >
          더보기
        </MoreButton>
      </SectionHeader>
      {notices.length > 0 ? (
        notices.slice(0, 2).map((notice, index) => (
          <NoticeCard
            key={index}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/notice/${notice.id}`);
            }}
          >
            <NoticeTitle>{notice.title ?? '제목 없음'}</NoticeTitle>
            <NoticeContent>{notice.content}</NoticeContent>
            <NoticeDate>{formatDateNoTime(notice.uploadDateTime)}</NoticeDate>
          </NoticeCard>
        ))
      ) : (
        <NoticeCard>
          <NoticeTitle>2025년 루카우스 웹사이트 운영 기간이 종료되었습니다.</NoticeTitle>
        </NoticeCard>
      )}
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
  // margin-bottom: 20px;
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
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis;
`;

const NoticeDate = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
`;
