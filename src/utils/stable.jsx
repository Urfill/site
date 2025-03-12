import { useEffect } from 'react';
import { scrollToSection } from './scroll';
import { useScrollStore } from '../store/scrollStore';

export function useFullPageScroll(sectionsSelector = '#home, #skills, #projects, #workJourney, #contacts') {
  const { currentIndex, setCurrentIndex } = useScrollStore();

  useEffect(() => {
    const sections = document.querySelectorAll(sectionsSelector);

    if (sections.length === 0) {
      console.warn('fullPageScroll: Секции не найдены.');
      return;
    }

    function handleWheel(e) {
      if ((e.deltaY > 0 || e.key === 'ArrowDown' || e.key === 'ArrowRight') && currentIndex < sections.length - 1) {
        setCurrentIndex(currentIndex + 1);
        scrollToSection(sections[currentIndex + 1]);
      } else if ((e.deltaY < 0 || e.key === 'ArrowUp' || e.key === 'ArrowLeft') && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        scrollToSection(sections[currentIndex - 1]);
      }
    }

    window.addEventListener('wheel', handleWheel);
    document.addEventListener('keydown', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleWheel);
    };
  }, [currentIndex, sectionsSelector]);

  return { currentIndex };
}
