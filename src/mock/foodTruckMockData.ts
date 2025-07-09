import { FoodTruckItem } from '../data/boothFood';
import { FoodTruckDetailRawData } from '../services/apis/foodTruck/foodTruckDetail';

export const foodTruckListMock: FoodTruckItem[] = [
  {
    dayBoothNum: 1,
    name: '통감자 핫바',
    representMenu: ['통감자', '소세지'],
    recommendNum: 20,
    location: '정문일대',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 2,
    name: '붕어빵 트럭',
    representMenu: ['팥붕어빵', '슈붕어빵'],
    recommendNum: 34,
    location: '해방광장',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 3,
    name: '닭강정 트럭',
    representMenu: ['순살강정', '매운강정'],
    recommendNum: 15,
    location: '104관 계단',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 4,
    name: '타코야끼 야식차',
    representMenu: ['타코야끼', '오코노미야끼'],
    recommendNum: 28,
    location: '정문일대',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 5,
    name: '소떡소떡',
    representMenu: ['소떡', '어묵'],
    recommendNum: 19,
    location: '해방광장',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 6,
    name: '떡볶이 포차',
    representMenu: ['떡볶이', '순대'],
    recommendNum: 26,
    location: '104관 계단',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 7,
    name: '아이스크림 카트',
    representMenu: ['콘 아이스크림', '슬러시'],
    recommendNum: 12,
    location: '정문일대',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 8,
    name: '버터맥옥수수',
    representMenu: ['구운 옥수수', '버터맥'],
    recommendNum: 10,
    location: '해방광장',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 9,
    name: '초코바 트럭',
    representMenu: ['초코바', '쿠키'],
    recommendNum: 7,
    location: '104관 계단',
    type: 'foodTruck',
  },
  {
    dayBoothNum: 10,
    name: '쌀국수 트럭',
    representMenu: ['소고기 쌀국수', '해물 쌀국수'],
    recommendNum: 14,
    location: '정문일대',
    type: 'foodTruck',
  },
];

export const foodTruckDetailMock: FoodTruckDetailRawData[] = [
  {
    dayFoodTruckNum: 1,
    name: '맛있닭강정',
    cover: '/images/mock/foodTruckMock.png',
    location: '104관 뒤편',
    foodTruckReviews: [{ DELICIOUS: 20 }, { RECOMMEND: 10 }, { MANY: 5 }, { FAST: 8 }],
    menus: [{ '닭강정(순한맛)': 6000 }, { '닭강정(매운맛)': 6500 }, { 콜라: 2000 }],
    foodTruckId: 202,
    opDateList: [22, 23],
  },
];
