import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Item, ItemDate, ItemDetail, ItemInfo, ItemName, Line, Tag } from './lostitem';
import { useEffect, useState } from 'react';
import { formatDateForNotice } from '../../../components/common/formatData';
import { getNotices } from '../../../services/apis/notice';
import { LoadingPage } from '../LoadingPage';

interface Notice {
  id: number;
  category: string;
  title: string | null;
  content: string;
  photoUrl: string;
  uploadDateTime: string;
}

const Notice = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotices = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const res = await getNotices({ page, size: 10 });

      const newNotices = res.result?.content || [];

      setNotices((prev) => [...prev, ...newNotices]);

      if (newNotices.length < 10) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight) {
        fetchNotices();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, hasMore, isLoading]);

  const handleItemClick = (id: number) => {
    window.scrollTo(0, 0);
    navigate(`/notice/${id}`);
  };

  return (
    <div>
      {notices.map((item) => {
        const uploadDate = new Date(item.uploadDateTime);
        const now = new Date();
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);

        const isToday = uploadDate.toDateString() === now.toDateString();
        const isYesterday = uploadDate.toDateString() === yesterday.toDateString();
        const isRecent = isToday || isYesterday;

        return (
          <ClickableItem key={item.id} onClick={() => handleItemClick(item.id)}>
            <ItemInfo>
              <ItemNameRow>
                {isRecent && <RedDot />}
                <ItemName>{item.title ?? '제목 없음'}</ItemName>
              </ItemNameRow>
              <ItemDetail>{item.content}</ItemDetail>
              <Line>
                <Tag>{item.category}</Tag>
                <ItemDate>등록 일자 | {formatDateForNotice(item.uploadDateTime)}</ItemDate>
              </Line>
            </ItemInfo>
          </ClickableItem>
        );
      })}
      {isLoading && <LoadingPage />}
      {/* {!hasMore && notices.length > 0 && <EndMessage>더 이상 공지사항이 없습니다.</EndMessage>} */}
    </div>
  );
};

export default Notice;

// Styled Components
const ClickableItem = styled(Item)`
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    background-color: #f3f4f6;
  }
`;

const RedDot = styled.span`
  position: absolute;
  top: 8px;
  left: 5px;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 50%;
`;

const ItemNameRow = styled.div`
  display: flex;
  align-items: center;
`;

const EndMessage = styled.div`
  text-align: center;
  padding: 24px;
  color: #6b7280;
  font-size: 14px;
`;
