export interface Option {
  label: string;
  value: number | string;
}

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
