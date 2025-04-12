import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Item, ItemDate, ItemDetail, ItemInfo, ItemList, ItemName, Line, Tag } from './lostitem';
import { useEffect, useState } from 'react';
import { getNotices } from '../../../services/apis/notice';

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
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleItemClick = (id: number) => {
    navigate(`/notice/${id}`);
  };

  const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');
    const period = hour >= 12 ? '오후' : '오전';
    if (hour > 12) hour -= 12;
    if (hour === 0) hour = 12;
    return `${month}.${day} ${period} ${hour}:${minute}`;
  };

  return (
    <ItemList>
      {notices.map((item) => (
        <ClickableItem key={item.id} onClick={() => handleItemClick(item.id)}>
          <ItemInfo>
            <ItemNameRow>
              <RedDot />
              <ItemName>{item.title ?? '제목 없음'}</ItemName>
            </ItemNameRow>
            <ItemDetail>{item.content}</ItemDetail>
            <Line>
              <Tag>{item.category}</Tag>
              <ItemDate>등록 일시 | {formatDate(item.uploadDateTime)}</ItemDate>
            </Line>
          </ItemInfo>
        </ClickableItem>
      ))}
    </ItemList>
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
