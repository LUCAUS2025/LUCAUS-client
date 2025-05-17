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

  const getCurrentTranslateY = () => {
    const transform = sheet.current?.style.transform;
    const match = transform?.match(/translateY\((-?\d+(?:\.\d+)?)px\)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const handleTouchStart = (e: TouchEvent) => {
    const { touchStart } = metrics.current;
    if (!sheet.current) return;
    touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
    touchStart.touchY = e.touches[0].clientY;
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
      sheet.current.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
    }

    metrics.current.scrollAtTopTouched = content.current?.scrollTop === 0;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const { touchMove, touchStart } = metrics.current;
    const dragThreshold = 80;
    const dragDistance = e.changedTouches[0].clientY - touchStart.touchY;

    const dragDown = touchMove.movingDirection === 'down';
    const dragUp = touchMove.movingDirection === 'up';
    const fromContent = metrics.current.isContentAreaTouched;

    const shouldSnapToTop = !fromContent
      ? dragUp || Math.abs(dragDistance) < dragThreshold
      : !dragDown || !(content.current!.scrollTop === 0 && dragDistance > dragThreshold);

    if (!sheet.current) return;
    sheet.current.style.setProperty('transform', shouldSnapToTop ? `translateY(${MIN_Y - MAX_Y}px)` : 'translateY(0)');

    metrics.current = {
      touchStart: { sheetY: 0, touchY: 0 },
      touchMove: { prevTouchY: 0, movingDirection: 'none' },
      isContentAreaTouched: false,
      scrollAtTopTouched: false,
    };
  };

  const handleMouseDown = (e: MouseEvent) => {
    const { touchStart } = metrics.current;
    if (!sheet.current) return;

    touchStart.sheetY = sheet.current.getBoundingClientRect().y;
    touchStart.touchY = e.clientY;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { touchStart, touchMove } = metrics.current;
    const currentY = e.clientY;

    if (!touchMove.prevTouchY) touchMove.prevTouchY = touchStart.touchY;
    touchMove.movingDirection = touchMove.prevTouchY < currentY ? 'down' : 'up';

    const offset = currentY - touchStart.touchY;
    let nextSheetY = touchStart.sheetY + offset;
    nextSheetY = Math.min(Math.max(nextSheetY, MIN_Y), MAX_Y);

    if (!metrics.current.isContentAreaTouched || canUserMoveBottomSheet()) {
      e.preventDefault();
      if (!sheet.current) return;
      sheet.current.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
    }

    metrics.current.scrollAtTopTouched = content.current?.scrollTop === 0;
  };

  const handleMouseUp = (e: MouseEvent) => {
    const { touchMove, touchStart } = metrics.current;
    const dragThreshold = 80;
    const dragDistance = e.clientY - touchStart.touchY;

    const dragDown = touchMove.movingDirection === 'down';
    const dragUp = touchMove.movingDirection === 'up';
    const fromContent = metrics.current.isContentAreaTouched;

    const shouldSnapToTop = !fromContent
      ? dragUp || Math.abs(dragDistance) < dragThreshold
      : !dragDown || !(content.current!.scrollTop === 0 && dragDistance > dragThreshold);

    if (sheet.current) {
      sheet.current.style.setProperty(
        'transform',
        shouldSnapToTop ? `translateY(${MIN_Y - MAX_Y}px)` : 'translateY(0)',
      );
    }

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

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

    // 모바일 터치 이벤트
    sheetEl.addEventListener('touchstart', handleTouchStart);
    sheetEl.addEventListener('touchmove', handleTouchMove);
    sheetEl.addEventListener('touchend', handleTouchEnd);

    // 데스크탑 마우스 이벤트
    sheetEl.addEventListener('mousedown', handleMouseDown);

    return () => {
      sheetEl.removeEventListener('touchstart', handleTouchStart);
      sheetEl.removeEventListener('touchmove', handleTouchMove);
      sheetEl.removeEventListener('touchend', handleTouchEnd);

      sheetEl.removeEventListener('mousedown', handleMouseDown);
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
      contentEl.addEventListener('touchstart', handleContentTouchStart);
    }
  }, []);

  return { sheet, content };
}
