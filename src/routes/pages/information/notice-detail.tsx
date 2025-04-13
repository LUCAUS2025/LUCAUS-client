import { useParams } from 'react-router-dom';
import { Item, ItemDate, ItemInfo, ItemList, ItemName, Line, Tag } from './lostitem';
import { useEffect, useState } from 'react';
import { getNotices } from '../../../services/apis/notice';
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
  const [notices, setNotices] = useState<Notice[]>([]);
  const item = notices.find((item) => item.id === noticeId);

  useEffect(() => {
    getNotices()
      .then((res) => {
        if (res.result?.content?.length > 0) {
          setNotices(res.result.content);
        } else {
          setNotices([]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!item) {
    return <div>해당 공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <ItemList>
        <Item key={item.id}>
          <ItemInfo>
            <ItemName>{item.title ?? '제목 없음'}</ItemName>
            <Line>
              <Tag>{item.category}</Tag>
              <ItemDate>등록 일시 | {formatDate(item.uploadDateTime)}</ItemDate>
            </Line>
          </ItemInfo>
        </Item>
      </ItemList>
      <div>{item.content}</div>
    </>
  );
};

export default NoticeDetail;
