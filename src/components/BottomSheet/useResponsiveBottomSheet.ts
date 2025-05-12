import { useEffect, useState } from 'react';

interface BottomSheetDimensions {
  MIN_Y: number;
  MAX_Y: number;
  BOTTOM_SHEET_HEIGHT: number;
  isSmall: boolean;
  isLarge: boolean;
}

export const useResponsiveBottomSheetHeight = (): BottomSheetDimensions => {
  const getDimensions = () => {
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const isSmall = innerWidth <= 380;
    const isLarge = innerWidth >= 410;

    const MIN_Y = innerHeight * (isSmall ? 0.48 : isLarge ? 0.33 : 0.38); // 가장 아래일 때
    const MAX_Y = innerHeight * (isSmall ? 0.79 : isLarge ? 0.64 : 0.67); // 가장 위로 올라왔을 때

    return {
      MIN_Y,
      MAX_Y,
      BOTTOM_SHEET_HEIGHT: innerHeight - MIN_Y,
      isSmall,
      isLarge,
    };
  };

  const [dimensions, setDimensions] = useState<BottomSheetDimensions>(getDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
