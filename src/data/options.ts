export interface Option {
  label: string;
  value: number | string;
}

export interface OptionOnlyNumber {
  label: string;
  value: number;
}

export const dateYearOption = {
  label: '2025년',
  value: 2025,
};

export const dateMonthOption = {
  label: '5월',
  value: 0o5,
};

export const dateOptions: Option[] = [
  { label: '19 일', value: 19 },
  { label: '20 일', value: 20 },
  { label: '21 일', value: 21 },
  { label: '22 일', value: 22 },
  { label: '23 일', value: 23 },
];

export const placeOptions: Option[] = [
  { label: '해방광장 일대', value: 'freeSquare' },
  { label: '후문 일대', value: 'backDoor' },
];

export const FoodTruckPlaceOptions: Option[] = [
  { label: '303관 B1층', value: 'building303B1' },
  { label: '후문 일대', value: 'backDoor' },
];

export const itemsOptions: Option[] = [
  { label: '전체', value: 'TOTAL' },
  { label: '잡화', value: 'DAILY_NECESSITIES' },
  { label: '전자기기', value: 'ELECTRONICS' },
  { label: '의류', value: 'CLOTHING' },
  { label: '지갑/카드', value: 'WALLET_CARD' },
  { label: '기타', value: 'OTHERS' },
];

export const lostdateOptions: Option[] = [
  { label: '19 일', value: '2025-05-19' },
  { label: '20 일', value: '2025-05-20' },
  { label: '21 일', value: '2025-05-21' },
  { label: '22 일', value: '2025-05-22' },
  { label: '23 일', value: '2025-05-23' },
];

export const mapLocationToPlaceBooth = (location: string) => {
  if (['해방광장', '정문', '빼빼로광장'].includes(location)) return 'freeSquare';
  if (['후문', '후문일대'].includes(location)) return 'backDoor';
  return null;
};

export const mapLocationToPlaceFoodTruck = (location: string) => {
  if (['해방광장', '303관 B1층', '정문'].includes(location)) return 'building303B1';
  if (['후문', '후문일대'].includes(location)) return 'backDoor';
  return null;
};
