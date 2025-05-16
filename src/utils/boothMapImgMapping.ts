import { Option } from '../data/options';

export const mapBoothMapImg = (selectedDate: Option, selectedPlace: Option): string => {
  // 해방광장, 20일
  if (selectedPlace.value === 'freeSquare' && selectedDate.value === 20) {
    return 'images/booth/freesquare-booth-map-tue.webp';
  } // 해방광장, 20일 제외
  else if (selectedPlace.value === 'freeSquare') {
    return 'images/booth/freesquare-booth-map.webp';
  } // 후문일대, 20일
  else if (selectedPlace.value === 'backDoor' && selectedDate.value === 20) {
    return 'images/booth/backdoor-booth-map-tue.webp';
  } // 후문일대, 20일 제외
  else {
    return 'images/booth/backdoor-booth-map.webp';
  }
};

export const mapBoothMapMagnifiedImg = (
  selectedDate: Option,
  selectedDayBoothNum: number,
  selectedPlace: Option,
): string => {
  // 해방광장, 20일
  if (selectedPlace.value === 'freeSquare' && selectedDate.value === 20) {
    if (1 <= selectedDayBoothNum && selectedDayBoothNum <= 8) {
      return '/images/booth/magnified/freesquare-booth-map-tue-1-8.webp';
    } else if (9 <= selectedDayBoothNum && selectedDayBoothNum <= 14) {
      return '/images/booth/magnified/freesquare-booth-map-tue-9-14.webp';
    } else if (15 <= selectedDayBoothNum && selectedDayBoothNum <= 28) {
      return '/images/booth/magnified/freesquare-booth-map-tue-15-28.webp';
    } else if (29 <= selectedDayBoothNum && selectedDayBoothNum <= 30) {
      return '/images/booth/magnified/freesquare-booth-map-tue-29-30.webp';
    } else if (31 <= selectedDayBoothNum && selectedDayBoothNum <= 36) {
      return '/images/booth/magnified/freesquare-booth-map-tue-31-36.webp';
    } else if (37 <= selectedDayBoothNum && selectedDayBoothNum <= 38) {
      return '/images/booth/magnified/freesquare-booth-map-tue-37-38.webp';
    } else if (65 <= selectedDayBoothNum && selectedDayBoothNum <= 66) {
      return '/images/booth/magnified/freesquare-booth-map-tue-65-66.webp';
    }
  } // 해방광장, 20일 제외
  else if (selectedPlace.value === 'freeSquare') {
    if (1 <= selectedDayBoothNum && selectedDayBoothNum <= 8) {
      return '/images/booth/magnified/freesquare-booth-map-1-8.webp';
    } else if (9 <= selectedDayBoothNum && selectedDayBoothNum <= 14) {
      return '/images/booth/magnified/freesquare-booth-map-9-14.webp';
    } else if (15 <= selectedDayBoothNum && selectedDayBoothNum <= 28) {
      return '/images/booth/magnified/freesquare-booth-map-15-28.webp';
    } else if (29 <= selectedDayBoothNum && selectedDayBoothNum <= 30) {
      return '/images/booth/magnified/freesquare-booth-map-29-30.webp';
    } else if (31 <= selectedDayBoothNum && selectedDayBoothNum <= 36) {
      return '/images/booth/magnified/freesquare-booth-map-31-36.webp';
    } else if (37 <= selectedDayBoothNum && selectedDayBoothNum <= 38) {
      return '/images/booth/magnified/freesquare-booth-map-37-38.webp';
    }
  } // 후문일대, 20일
  else if (selectedPlace.value === 'backDoor' && selectedDate.value === 20) {
    if (39 <= selectedDayBoothNum && selectedDayBoothNum <= 44) {
      return '/images/booth/magnified/backdoor-booth-map-tue-39-44.webp';
    } else if (45 <= selectedDayBoothNum && selectedDayBoothNum <= 46) {
      return '/images/booth/magnified/backdoor-booth-map-tue-45-46.webp';
    } else if (47 <= selectedDayBoothNum && selectedDayBoothNum <= 54) {
      return '/images/booth/magnified/backdoor-booth-map-tue-47-54.webp';
    } else if (55 <= selectedDayBoothNum && selectedDayBoothNum <= 60) {
      return '/images/booth/magnified/backdoor-booth-map-tue-55-60.webp';
    } else if (61 <= selectedDayBoothNum && selectedDayBoothNum <= 64) {
      return '/images/booth/magnified/backdoor-booth-map-tue-61-64.webp';
    }
  }
  // 후문일대, 20일 제외
  else if (selectedPlace.value === 'backDoor') {
    if (39 <= selectedDayBoothNum && selectedDayBoothNum <= 44) {
      return '/images/booth/magnified/backdoor-booth-map-39-44.webp';
    } else if (45 <= selectedDayBoothNum && selectedDayBoothNum <= 46) {
      return '/images/booth/magnified/backdoor-booth-map-45-46.webp';
    } else if (47 <= selectedDayBoothNum && selectedDayBoothNum <= 54) {
      return '/images/booth/magnified/backdoor-booth-map-47-54.webp';
    } else if (55 <= selectedDayBoothNum && selectedDayBoothNum <= 60) {
      return '/images/booth/magnified/backdoor-booth-map-55-60.webp';
    } else {
      return '/images/booth/magnified/backdoor-booth-map-61-64.webp';
    }
  }
  return '';
};
