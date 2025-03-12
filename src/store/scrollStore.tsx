import { create } from 'zustand';

interface ScrollStore {
  currentIndex: number;
  // isButtonDown: boolean;
  setCurrentIndex: (index: number) => void;
  // setMouseButtonState: (bool: boolean) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  currentIndex: 0,
  // isButtonDown: false,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  // setMouseButtonState: (bool) => set({ isButtonDown: bool }),
}));
