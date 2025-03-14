import { useEffect, useRef } from 'react';
import { scrollToSection } from './scroll';
import { useScrollStore } from '../store/scrollStore';

export function useFullPageScroll(sectionsSelector = '#home, #skills, #projects, #workJourney, #contacts') {
  const { currentIndex, setCurrentIndex } = useScrollStore();
  let prevEvent = useRef(undefined);

  useEffect(() => {
    const sections = document.querySelectorAll(sectionsSelector);

    if (sections.length === 0) {
      console.warn('fullPageScroll: Секции не найдены.');
      return;
    }

    function handleScroll(event) {
      if (event.type === 'mouseup') {
        prevEvent.current = undefined;
        return;
      } else if (event.type === 'mousedown') {
        prevEvent.current = 'mousedown';
      }

      if (event.type === 'scroll' && prevEvent.current === 'mousedown') {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const currentSectionIndex = Math.floor(scrollPosition / window.innerHeight);

        if (currentSectionIndex !== currentIndex) {
          setCurrentIndex(currentSectionIndex);
        }
      }
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
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleScroll);
    document.addEventListener('mouseup', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleWheel);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleScroll);
      document.removeEventListener('mouseup', handleScroll);
    };
  }, [currentIndex, sectionsSelector]);

  return { currentIndex };
}
