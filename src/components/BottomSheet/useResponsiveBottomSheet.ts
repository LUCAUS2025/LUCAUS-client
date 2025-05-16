import { useEffect, useState } from 'react';

interface BottomSheetDimensions {
  MIN_Y: number;
  MAX_Y: number;
  BOTTOM_SHEET_HEIGHT: number;
  screenSize:
    | 'miniPhone' // z 플립
    | 'smallPhone'
    | 'normalPhone'
    | 'largePhone'
    | 'maxPhone'
    | 'miniTablet' //아이패드 미니
    | 'smallTablet'
    | 'largeTablet'
    | 'desktop';
}

export const useResponsiveBottomSheetHeight = (): BottomSheetDimensions => {
  const getDimensions = () => {
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;

    let screenSize: BottomSheetDimensions['screenSize'];

    if (innerWidth <= 350) {
      screenSize = 'miniPhone';
    } else if (innerWidth <= 360) {
      screenSize = 'smallPhone';
    } else if (innerWidth <= 390) {
      screenSize = 'normalPhone';
    } else if (innerWidth <= 414) {
      screenSize = 'largePhone';
    } else if (innerWidth <= 450) {
      screenSize = 'maxPhone';
    } else if (innerWidth <= 768) {
      screenSize = 'miniTablet';
    } else if (innerWidth <= 1024) {
      screenSize = 'smallTablet';
    } else if (innerWidth <= 1280) {
      screenSize = 'largeTablet';
    } else {
      screenSize = 'desktop';
    }

    const MIN_Y_MAP: Record<BottomSheetDimensions['screenSize'], number> = {
      miniPhone: innerHeight * 0.52,
      smallPhone: innerHeight * 0.48,
      normalPhone: innerHeight * 0.42,
      largePhone: innerHeight * 0.38,
      maxPhone: innerHeight * 0.33,
      miniTablet: innerHeight * 0.1,
      smallTablet: innerHeight * 0.1,
      largeTablet: innerHeight * 0.1,
      desktop: innerHeight * 0.1,
    };

    //가장 위로 올라왔을때
    const MAX_Y_MAP: Record<BottomSheetDimensions['screenSize'], number> = {
      miniPhone: innerHeight * 0.85,
      smallPhone: innerHeight * 0.77,
      normalPhone: innerHeight * 0.7,
      largePhone: innerHeight * 0.68,
      maxPhone: innerHeight * 0.74,
      miniTablet: innerHeight * 0.67,
      smallTablet: innerHeight * 0.72,
      largeTablet: innerHeight * 0.77,
      desktop: innerHeight * 0.78,
    };

    const MIN_Y = MIN_Y_MAP[screenSize];
    const MAX_Y = MAX_Y_MAP[screenSize];

    return {
      MIN_Y,
      MAX_Y,
      BOTTOM_SHEET_HEIGHT: innerHeight,
      screenSize,
    };
  };

  const [dimensions, setDimensions] = useState<BottomSheetDimensions>(getDimensions());

  useEffect(() => {
    const handleResize = () => setDimensions(getDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
