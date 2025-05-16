import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Item, ItemDate, ItemDetail, ItemInfo, ItemName, Line, Tag } from './lostitem';
import { useEffect, useState } from 'react';
import { getNotices } from '../../../services/apis/notice';
import { formatDateForNotice } from '../../../components/common/formatData';
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

  useEffect(() => {
    getNotices()
      .then((res) => {
        if (res.result?.content?.length > 0) {
          setNotices(res.result.content);
        } else {
          setNotices([]);
        }
        // console.log(res.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleItemClick = (id: number) => {
    window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
    navigate(`/notice/${id}`);
  };

  if (!notices || notices.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div>
      {notices.map((item) => {
        const uploadDate = new Date(item.uploadDateTime);
        const now = new Date();

        // 오늘 날짜
        const isToday =
          uploadDate.getFullYear() === now.getFullYear() &&
          uploadDate.getMonth() === now.getMonth() &&
          uploadDate.getDate() === now.getDate();

        // 어제 날짜
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        const isYesterday =
          uploadDate.getFullYear() === yesterday.getFullYear() &&
          uploadDate.getMonth() === yesterday.getMonth() &&
          uploadDate.getDate() === yesterday.getDate();

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
                <ItemDate>등록 일시 | {formatDateForNotice(item.uploadDateTime)}</ItemDate>
              </Line>
            </ItemInfo>
          </ClickableItem>
        );
      })}
    </div>
  );
};

export default Notice;

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
