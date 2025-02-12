// Определяем интерфейс для темы
export interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

// Создаем Zustand store
import { create } from 'zustand';

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light', // начальная тема
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
