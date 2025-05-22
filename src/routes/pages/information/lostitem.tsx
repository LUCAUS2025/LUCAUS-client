import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLostItems } from '../../../services/apis/lostitem';
import { formatDateForNotice } from '../../../components/common/formatData';
import { LostDateDropDown, LostitemDropDown } from '../../../components/common/DropDown/LostitemDropDown';
import { itemsOptions, lostdateOptions, Option } from '../../../data/options';

interface LostItemProps {
  category: string;
  name: string;
  detail: string;
  date: string;
  image: string;
  ownerFound: boolean;
}

const LostItem = () => {
  const [lostItems, setLostItems] = useState<LostItemProps[]>([]);
  const [selectDate, setSelectDate] = useState<Option>(lostdateOptions[0]);
  const [selectItem, setSelectItem] = useState<Option>(itemsOptions[0]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const translateCategory = (category: string) => {
    const categoryMap: Record<string, string> = {
      WALLET_CARD: '지갑/카드',
      ELECTRONICS: '전자기기',
      CLOTHING: '의류',
      DAILY_NECESSITIES: '잡화',
      COSMETICS: '화장품',
      OTHERS: '기타',
      TOTAL: '전체',
    };
    return categoryMap[category] || '전체';
  };

  const fetchLostItems = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const res = await getLostItems({
        date: String(selectDate.value),
        category: String(selectItem.value),
        page,
        size: 10,
      });
      console.log(res);
      const items = res.result.content.map((item) => ({
        category: item.category,
        name: item.name,
        date: item.updatedDateTime,
        image: item.photoUrl,
        detail: `보관 장소 : ${item.place}`,
        ownerFound: item.ownerFound,
      }));

      setLostItems((prev) => [...prev, ...items]);

      if (res.result.content.length < 10) {
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
    const resetAndFetch = async () => {
      setPage(1);
      setHasMore(true);
      setLostItems([]);
      await fetchLostItems();
    };

    resetAndFetch();
  }, [selectDate, selectItem]);

  // 무한 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight) {
        // console.log('스크롤 끝');
        fetchLostItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, hasMore, isLoading]);

  return (
    <BigContainer>
      <Container>
        분실물을 발견했어요. <br />
        어떻게 해야하나요? 🤔
        <Answer>주변에 있는 축제 STAFF에게 전달해주세요.</Answer>
      </Container>
      <Container>
        잃어버린 물건이 있어요 😭 <br />
        어떻게 찾아야하나요?
        <Answer>
          보관 장소에 방문하여 축제 STAFF에게
          <br />
          분실물 수령을 문의해주세요.
        </Answer>
      </Container>

      <SectionTitle>내 분실물 찾기</SectionTitle>
      <DropDowns>
        <LostDateDropDown selectedDate={selectDate} setSelectedDate={setSelectDate} darkMode={true} />
        <LostitemDropDown selectedItem={selectItem} setSelectedItem={setSelectItem} darkMode={false} />
      </DropDowns>
      <ItemList>
        {isLoading ? (
          <div>로딩중 ...</div>
        ) : lostItems.length > 0 ? (
          lostItems.map((item, idx) => (
            <Item key={idx}>
              <ItemImage src={item.image || ''} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemDetail>{item.detail}</ItemDetail>
                <Line>
                  <Tag>{translateCategory(item.category)}</Tag>
                  <ItemDate>접수 일자 | {formatDateForNotice(item.date)}</ItemDate>
                </Line>
              </ItemInfo>
            </Item>
          ))
        ) : (
          <NoItemsMessage>현재 등록된 분실물이 없습니다</NoItemsMessage>
        )}
      </ItemList>
    </BigContainer>
  );
};

export default LostItem;

// Styled Components

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  gap: 24px;
`;

const Container = styled.div`
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  font-weight: 600;
  line-height: 1.5;
`;

const Answer = styled.div`
  border-top: 1px solid #d1d5dc;
  font-weight: 400;
  padding-top: 8px;
  margin-top: 8px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px;
  border-bottom: 1px solid #d1d5dc;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const ItemName = styled.div`
  font-weight: 700;
`;

export const ItemDetail = styled.div`
  font-size: 14px;
  color: #4b5563;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #eef2ff;
  color: #4f46e5;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 9999px;
  width: fit-content;
`;

export const ItemDate = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const DropDowns = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-direction: row;
`;

const NoItemsMessage = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 60px 0;
  color: #364153;
`;
