import { useNavigate, useParams } from 'react-router-dom';
import { Item, ItemDate, ItemDetail, ItemImage, ItemInfo, ItemList, ItemName, Line, Tag } from './lostitem';
import { useEffect, useState } from 'react';
import { getNotice } from '../../../services/apis/notice';
import { formatDate } from '../../../components/common/formatData';

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
      <div>{notice.content}</div>
    </>
  );
};

export default NoticeDetail;
