import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (id: string) => {
  gsap.to(window, { duration: 1.5, scrollTo: id, ease: 'power2.out' });
};
