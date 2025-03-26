import { useNavigate, useParams } from 'react-router-dom';
import { Item, ItemDate, ItemDetail, ItemImage, ItemInfo, ItemList, ItemName, Line, Tag } from './lostitem';

const noticeItems = [
  {
    id: 1,
    name: '포토부스 이용 안내',
    detail: '줄 똑바로 서서 이용해주세요',
    category: '이용안내',
    date: '05.22 오후 6:00',
  },
  {
    id: 2,
    name: '축제 일정 변경 안내',
    detail: '우천으로 인한 일정 변경사항을 확인해주세요',
    category: '일정',
    date: '05.21 오전 10:30',
  },
  {
    id: 3,
    name: '푸드트럭 위치 안내',
    detail: '푸드트럭 위치가 변경되었습니다',
    category: '위치',
    date: '05.20 오후 2:15',
  },
  {
    id: 4,
    name: '티켓팅 안내',
    detail: '공연 티켓팅 방법 및 시간 안내',
    category: '티켓',
    date: '05.19 오후 5:30',
  },
  {
    id: 5,
    name: '축제 주의사항',
    detail: '안전한 축제를 위한 주의사항 안내',
    category: '안전',
    date: '05.18 오전 9:00',
  },
];

const NoticeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const noticeId = Number(id);
  const item = noticeItems.find((item) => item.id === noticeId);

  if (!item) {
    return <div>해당 공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <ItemList>
        <Item key={item.id}>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <Line>
              <Tag>{item.category}</Tag>
              <ItemDate>등록 일시 | {item.date}</ItemDate>
            </Line>
          </ItemInfo>
        </Item>
      </ItemList>
      <ItemDetail>{item.detail}</ItemDetail>
    </>
  );
};

export default NoticeDetail;
