import { create } from 'zustand';

interface ScrollStore {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  fun: () => void;
}

export const useScrollStore = create<ScrollStore>((set, get) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  fun: () => {
    console.log('launched');
    console.log(get().currentIndex);
  },
}));
