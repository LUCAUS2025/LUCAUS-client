import { useEffect, useRef } from 'react';
import { MAX_Y, MIN_Y } from './BottomSheetOption';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: 'none' | 'down' | 'up';
  };
  isContentAreaTouched: boolean;
  scrollAtTopTouched: boolean;
}

export default function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
    isContentAreaTouched: false,
    scrollAtTopTouched: false,
  });

  // ✅ 바텀시트 드래그 가능한 조건
  const canUserMoveBottomSheet = () => {
    const { touchMove, isContentAreaTouched } = metrics.current;
    const scrollTop = content.current!.scrollTop;

    if (!isContentAreaTouched) return true;

    if (touchMove.movingDirection === 'down') {
      // 리스트 맨 위일 때만 바텀시트 드래그 허용
      return scrollTop === 0;
    }
    // 리스트 내에서 위로 드래그할 때는 스크롤만 하게
    return false;
  };

  const handleTouchStart = (e: TouchEvent) => {
    const { touchStart } = metrics.current;
    touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
    touchStart.touchY = e.touches[0].clientY;
    sheet.current!.style.transition = '';
  };

  const handleTouchMove = (e: TouchEvent) => {
    const { touchStart, touchMove } = metrics.current;
    const currentTouch = e.touches[0];

    if (touchMove.prevTouchY === undefined || touchMove.prevTouchY === 0) {
      touchMove.prevTouchY = touchStart.touchY;
    }

    if (touchMove.prevTouchY < currentTouch.clientY) {
      touchMove.movingDirection = 'down';
    } else {
      touchMove.movingDirection = 'up';
    }

    const touchOffset = currentTouch.clientY - touchStart.touchY;
    let nextSheetY = touchStart.sheetY + touchOffset;
    if (nextSheetY <= MIN_Y) nextSheetY = MIN_Y;
    if (nextSheetY >= MAX_Y) nextSheetY = MAX_Y;

    if (!metrics.current.isContentAreaTouched) {
      // 헤더에서 드래그
      e.preventDefault();
      sheet.current!.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
    } else if (canUserMoveBottomSheet()) {
      // 컨텐츠에서 스크롤이 맨 위일 때만 드래그 허용
      e.preventDefault();
      if (content.current!.scrollTop === 0 && !metrics.current.scrollAtTopTouched) {
        // 스크롤이 top에 도달했을 때 처음 한번은 그냥 무시하고 flag 세움, 바텀시트 움직이지 않음
        metrics.current.scrollAtTopTouched = true;
        return;
      }
      if (nextSheetY >= MIN_Y) {
        sheet.current!.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
      }
    } else {
      metrics.current.scrollAtTopTouched = false;
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    sheet.current!.style.transition = 'transform 0.3s ease-out';
    const { touchMove } = metrics.current;
    const dragThreshold = 80;
    const dragDistance = e.changedTouches[0].clientY - metrics.current.touchStart.touchY;

    if (!metrics.current.isContentAreaTouched) {
      if (Math.abs(dragDistance) < dragThreshold) {
        // 헤더 클릭 시 아무일도 x (이거 없으면 헤더 클릭을 드래그로 인식)
        return;
      }
      // 헤더에서 드래그
      if (touchMove.movingDirection === 'down' && dragDistance > dragThreshold) {
        sheet.current!.style.setProperty('transform', 'translateY(0)');
      } else {
        sheet.current!.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
      }
    } else {
      // 컨텐츠에서 드래그
      if (touchMove.movingDirection === 'down' && content.current!.scrollTop === 0 && dragDistance > dragThreshold) {
        sheet.current!.style.setProperty('transform', 'translateY(0)');
      } else {
        sheet.current!.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
      }
    }

    const getCurrentTranslateY = () => {
      const transform = sheet.current?.style.transform;
      if (!transform || transform === 'none') return 0;
      const match = transform.match(/translateY\((-?\d+(?:\.\d+)?)px\)/);
      return match ? parseFloat(match[1]) : 0;
    };

    const translateY = getCurrentTranslateY();
    const isSheetUp = translateY < 0;
    if (content.current) {
      content.current.style.overflowY = isSheetUp ? 'auto' : 'hidden';
    }

    // metrics 초기화
    metrics.current = {
      touchStart: { sheetY: 0, touchY: 0 },
      touchMove: { prevTouchY: 0, movingDirection: 'none' },
      isContentAreaTouched: false,
      scrollAtTopTouched: false,
    };
  };

  useEffect(() => {
    const sheetEl = sheet.current!;
    if (!sheetEl) return;

    sheetEl.addEventListener('touchstart', handleTouchStart);
    sheetEl.addEventListener('touchmove', handleTouchMove);
    sheetEl.addEventListener('touchend', handleTouchEnd);

    return () => {
      sheetEl.removeEventListener('touchstart', handleTouchStart);
      sheetEl.removeEventListener('touchmove', handleTouchMove);
      sheetEl.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current!.isContentAreaTouched = true;
    };
    content.current!.addEventListener('touchstart', handleTouchStart);
    content.current!.style.overflowY = 'hidden';
  }, []);

  return { sheet, content };
}
