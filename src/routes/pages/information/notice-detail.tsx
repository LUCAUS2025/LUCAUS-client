import { useParams } from 'react-router-dom';
import { Item, ItemDate, ItemInfo, ItemList, Line, Tag } from './lostitem';
import { useEffect, useState } from 'react';
import { getNotice } from '../../../services/apis/notice';
import { formatDate } from '../../../components/common/formatData';
import styled from 'styled-components';

interface Notice {
  id: number;
  category: string;
  title: string | null;
  content: string;
  photoUrl: string;
  uploadDateTime: string;
}

const NoticeDetail = () => {
  const { id } = useParams();
  const noticeId = Number(id);
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    getNotice(noticeId)
      .then((res) => {
        if (res) {
          setNotice(res.result);
        } else {
          console.error('Notice not found');
        }
      })
      .catch((err) => {
        console.error('Error fetching notice:', err);
      });
  }, [noticeId]);

  if (!notice) {
    return <div>공지사항을 불러오는 중입니다...</div>;
  }

  return (
    <>
      <ItemList>
        <Item key={notice.id}>
          <ItemInfo>
            <ItemName>{notice.title ?? '제목 없음'}</ItemName>
            <Line>
              <Tag>{notice.category}</Tag>
              <ItemDate>등록 일시 | {formatDate(notice.uploadDateTime)}</ItemDate>
            </Line>
          </ItemInfo>
        </Item>
      </ItemList>
      <ItemContent>
        <ItemImage src={notice.photoUrl || ''} />
        {notice.content}
      </ItemContent>
    </>
  );
};

export default NoticeDetail;

const ItemContent = styled.div`
  margin-top: 10px;
  padding: 16px;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: pre-line;
`;

const ItemName = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const ItemImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
