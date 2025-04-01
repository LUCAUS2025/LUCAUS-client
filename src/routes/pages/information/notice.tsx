import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Item, ItemDate, ItemDetail, ItemImage, ItemInfo, ItemList, ItemName, Line, Tag } from './lostitem';

const noticeItems = [
  {
    id: 1,
    name: '포토부스 이용 안내',
    detail: '줄 똑바로 서서 이용해주세요',
    category: '이용안내',
    date: '05.22 오후 6:00',
    newindex: true,
  },
  {
    id: 2,
    name: '축제 일정 변경 안내',
    detail: '우천으로 인한 일정 변경사항을 확인해주세요',
    category: '일정',
    date: '05.21 오전 10:30',
    newindex: true,
  },
  {
    id: 3,
    name: '푸드트럭 위치 안내',
    detail: '푸드트럭 위치가 변경되었습니다',
    category: '위치',
    date: '05.20 오후 2:15',
    newindex: true,
  },
  {
    id: 4,
    name: '티켓팅 안내',
    detail: '공연 티켓팅 방법 및 시간 안내',
    category: '티켓',
    date: '05.19 오후 5:30',
    newindex: false,
  },
  {
    id: 5,
    name: '축제 주의사항',
    detail: '안전한 축제를 위한 주의사항 안내',
    category: '안전',
    date: '05.18 오전 9:00',
  },
  {
    id: 6,
    name: '축제 주의사항',
    detail: '안전한 축제를 위한 주의사항 안내',
    category: '안전',
    date: '05.18 오전 9:00',
  },
  {
    id: 7,
    name: '축제 주의사항',
    detail: '안전한 축제를 위한 주의사항 안내',
    category: '안전',
    date: '05.18 오전 9:00',
  },
];

// 클릭 가능한 Item 컴포넌트
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

const Notice = () => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/notice/${id}`);
  };

  return (
    <ItemList>
      {noticeItems.map((item) => (
        <ClickableItem key={item.id} onClick={() => handleItemClick(item.id)}>
          <ItemInfo>
            <ItemNameRow>
              {item.newindex && <RedDot />}
              <ItemName>{item.name}</ItemName>
            </ItemNameRow>
            <ItemDetail>{item.detail}</ItemDetail>
            <Line>
              <Tag>{item.category}</Tag>
              <ItemDate>등록 일시 | {item.date}</ItemDate>
            </Line>
          </ItemInfo>
        </ClickableItem>
      ))}
    </ItemList>
  );
};

export default Notice;

// 빨간 점 스타일 컴포넌트
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
