// 로그인 여부 관리
import { create } from 'zustand';

interface UseIsLoginState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const useIsLoginStore = create<UseIsLoginState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) =>
    set((value) => ({
      isLogin: isLogin,
    })),
}));
