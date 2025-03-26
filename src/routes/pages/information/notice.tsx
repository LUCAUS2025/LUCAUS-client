import { Item, ItemDate, ItemDetail, ItemImage, ItemInfo, ItemList, ItemName, Line, Tag } from './lostitem';

const Notice = () => {
  return (
    <ItemList>
      <Item>
        <ItemInfo>
          <ItemName>포토부스 이용 안?내</ItemName>
          <ItemDetail>줄 똑바로 좀</ItemDetail>
          <Line>
            <Tag>카테고리</Tag>
            <ItemDate>등록 일시 | 05.22 오후 6:00</ItemDate>
          </Line>
        </ItemInfo>
      </Item>
    </ItemList>
  );
};
export default Notice;
