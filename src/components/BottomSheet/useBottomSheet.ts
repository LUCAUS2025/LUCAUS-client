import { useEffect, useRef } from 'react';
import { useResponsiveBottomSheetHeight } from './useResponsiveBottomSheet';

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

  const { MIN_Y, MAX_Y } = useResponsiveBottomSheetHeight();

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

  const canUserMoveBottomSheet = () => {
    const { touchMove, isContentAreaTouched } = metrics.current;
    if (!content.current) return;
    const scrollTop = content.current?.scrollTop;
    if (!isContentAreaTouched) return true;
    return touchMove.movingDirection === 'down' ? scrollTop === 0 : false;
  };

  const handleTouchStart = (e: TouchEvent) => {
    const { touchStart } = metrics.current;
    if (!sheet.current) return;
    touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
    touchStart.touchY = e.touches[0].clientY;
    sheet.current.style.transition = '';
  };

  const handleTouchMove = (e: TouchEvent) => {
    const { touchStart, touchMove } = metrics.current;
    const currentTouch = e.touches[0];

    if (!touchMove.prevTouchY) touchMove.prevTouchY = touchStart.touchY;
    touchMove.movingDirection = touchMove.prevTouchY < currentTouch.clientY ? 'down' : 'up';

    const touchOffset = currentTouch.clientY - touchStart.touchY;
    let nextSheetY = touchStart.sheetY + touchOffset;
    nextSheetY = Math.min(Math.max(nextSheetY, MIN_Y), MAX_Y);

    if (!metrics.current.isContentAreaTouched || canUserMoveBottomSheet()) {
      e.preventDefault();
      if (!sheet.current) return;
      sheet.current?.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
    }
    if (content.current!.scrollTop === 0) metrics.current.scrollAtTopTouched = true;
    else metrics.current.scrollAtTopTouched = false;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!sheet.current) return;
    sheet.current.style.transition = 'transform 0.3s ease-out';
    const { touchMove, touchStart } = metrics.current;
    const dragThreshold = 80;
    const dragDistance = e.changedTouches[0].clientY - touchStart.touchY;

    const dragDown = touchMove.movingDirection === 'down';
    const dragUp = touchMove.movingDirection === 'up';
    const fromContent = metrics.current.isContentAreaTouched;
    const getCurrentTranslateY = () => {
      const transform = sheet.current?.style.transform;
      const match = transform?.match(/translateY\((-?\d+(?:\.\d+)?)px\)/);
      return match ? parseFloat(match[1]) : 0;
    };

    // 드래그가 끝난 후, 리스트가 스크롤 되도록
    if (content.current) {
      // 바텀시트가 올라와있을 때만 리스트 스크롤 가능하도록
      // 화면 업데이트 직전 코드 실행할 수 있도록...-> 바텀시트 올리고 바로 리스트 스크롤 되도록
      setTimeout(() => {
        requestAnimationFrame(() => {
          const bottomSheetVisibleHeight = MAX_Y - MIN_Y - 50;
          if (!content.current) return;
          content.current.style.overflowY = getCurrentTranslateY() < 0 ? 'auto' : 'hidden';
          //content.current.style.paddingBottom = getCurrentTranslateY() < 0 ? `${bottomSheetVisibleHeight * 1.5}px` : '0px'; // 올라와있을 때 padding bottom 추가
        });
      }, 10);
    }

    const shouldSnapToTop = !fromContent
      ? dragUp || Math.abs(dragDistance) < dragThreshold
      : !dragDown || !(content.current!.scrollTop === 0 && dragDistance > dragThreshold);

    if (!sheet.current) return;
    sheet.current?.style.setProperty('transform', shouldSnapToTop ? `translateY(${MIN_Y - MAX_Y}px)` : 'translateY(0)');

    metrics.current = {
      touchStart: { sheetY: 0, touchY: 0 },
      touchMove: { prevTouchY: 0, movingDirection: 'none' },
      isContentAreaTouched: false,
      scrollAtTopTouched: false,
    };
  };

  useEffect(() => {
    const sheetEl = sheet.current;
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
    const handleContentTouchStart = (e: TouchEvent) => {
      if (content.current?.contains(e.target as Node)) {
        metrics.current.isContentAreaTouched = true;
      }
    };
    const contentEl = content.current;
    if (contentEl) {
      // 처음에는 스크롤을 막음
      contentEl.addEventListener('touchstart', handleContentTouchStart);
      contentEl.style.overflowY = 'hidden';
    }
  }, []);

  return { sheet, content };
}
