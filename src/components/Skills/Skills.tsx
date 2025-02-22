import './Skills.scss';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__grid">
        <div className="skills__hard">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="-1" width="33" height="33" fill="#FF7F00" />
              <path
                d="M13.9999 14.1428H16.7856V25.7143C15.607 28.5 13.186 28.8632 11.107 28.2857C9.17845 27.75 7.99988 25.7143 7.99988 25.7143L10.2499 24.4285C10.2499 24.4285 10.8927 25.6071 12.2856 25.6071C13.6784 25.6071 13.9999 24.4285 13.9999 24.4285V14.1428Z"
                fill="black"
              />
              <path
                d="M27.3927 16.2857L25.4642 17.5714C25.4642 17.5714 24.2856 16.5 23.4284 16.5C22.5713 16.5 22.0113 16.9563 22.0356 18C22.0697 19.4657 25.0082 20.1827 25.9999 20.6785C25.9999 20.6785 28.2639 21.8776 28.1427 24.9643C28.0216 28.0509 25.0356 28.4143 23.7499 28.5C22.4642 28.5857 21.5592 28.3118 20.4284 27.6428C19.4324 27.0535 18.4999 25.7143 18.4999 25.7143L20.7499 24.1071C20.7499 24.1071 21.8854 25.9463 23.107 26.0357C24.0838 26.1071 25.2284 25.9285 25.357 24.9643C25.6142 23.0357 23.527 22.623 22.6784 22.1785C20.5593 21.0181 18.3927 19.7143 19.5713 16.2857C20.0133 15 21.284 14.181 22.7856 14.0357C26.107 13.7143 27.3927 16.2857 27.3927 16.2857Z"
                fill="black"
              />
            </svg>
            JavaScript (ES6+/Node.js/Web APIs and browser compatibility)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.5001" cy="15.495" r="2.59282" fill="#1E90FF" stroke="#1E90FF" stroke-width="0.0933448" />
              <path
                d="M30.2532 15.6074C30.2532 16.1981 29.9587 16.8353 29.2674 17.4926C28.5743 18.1516 27.5317 18.7794 26.1815 19.3224C23.4852 20.4068 19.7091 21.0943 15.5 21.0943C11.2909 21.0943 7.51475 20.4068 4.81848 19.3224C3.46833 18.7794 2.42566 18.1516 1.73264 17.4926C1.04135 16.8353 0.746758 16.1981 0.746758 15.6074C0.746758 15.0166 1.04135 14.3794 1.73264 13.7221C2.42566 13.0631 3.46833 12.4353 4.81848 11.8923C7.51475 10.8079 11.2909 10.1204 15.5 10.1204C19.7091 10.1204 23.4852 10.8079 26.1815 11.8923C27.5317 12.4353 28.5743 13.0631 29.2674 13.7221C29.9587 14.3794 30.2532 15.0166 30.2532 15.6074Z"
                stroke="#1E90FF"
                stroke-width="1.49352"
              />
              <path
                d="M22.8766 28.384C22.3651 28.6794 21.6659 28.7429 20.751 28.4729C19.8338 28.2022 18.7688 27.6131 17.6234 26.7153C15.3362 24.9225 12.8527 21.996 10.7482 18.3508C8.64364 14.7056 7.35097 11.0916 6.94192 8.21441C6.7371 6.77366 6.75949 5.55675 6.98365 4.6271C7.20725 3.69977 7.61181 3.12603 8.1234 2.83067C8.63498 2.5353 9.33414 2.47181 10.249 2.74183C11.1662 3.01253 12.2313 3.60159 13.3766 4.49935C15.6638 6.29221 18.1473 9.21869 20.2518 12.8639C22.3564 16.5091 23.6491 20.1231 24.0581 23.0003C24.2629 24.441 24.2406 25.6579 24.0164 26.5876C23.7928 27.5149 23.3882 28.0887 22.8766 28.384Z"
                stroke="#1E90FF"
                stroke-width="1.49352"
              />
              <path
                d="M8.12352 28.384C7.61193 28.0887 7.20737 27.5149 6.98377 26.5876C6.75961 25.658 6.73722 24.4411 6.94204 23.0003C7.35109 20.1231 8.64376 16.5091 10.7483 12.8639C12.8529 9.2187 15.3363 6.29221 17.6236 4.49936C18.7689 3.6016 19.8339 3.01254 20.7511 2.74184C21.666 2.47182 22.3652 2.53531 22.8768 2.83067C23.3883 3.12604 23.7929 3.69978 24.0165 4.6271C24.2407 5.55676 24.2631 6.77366 24.0582 8.21442C23.6492 11.0916 22.3565 14.7056 20.252 18.3508C18.1474 21.996 15.6639 24.9225 13.3767 26.7154C12.2314 27.6131 11.1663 28.2022 10.2491 28.4729C9.33426 28.7429 8.6351 28.6794 8.12352 28.384Z"
                stroke="#1E90FF"
                stroke-width="1.49352"
              />
            </svg>
            Frameworks/Libraries (React.js)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.524048 0H28.476L25.9475 28.7335L14.5 31.7218L2.91468 28.7335L0.524048 0Z" fill="#FF7F00" />
              <path
                d="M23.4188 5.70076H5.67297L6.54647 16.4586H18.7755L18.4077 20.918L14.5459 22.1133L10.6381 20.918L10.3623 18.2056H6.77634L7.32802 23.7684L14.5459 25.7453L21.7178 23.7684L22.7752 12.7807H9.90255L9.62671 9.2867H23.005L23.4188 5.70076Z"
                fill="black"
              />
            </svg>
            HTML/CSS (HTML5/BEM/RWD/SASS/SCSS...)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="16" y="0.5" width="21.5668" height="21.5668" transform="rotate(45 16 0.5)" fill="#FF7F00" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.2869 15.2611C19.975 16.0266 20.1297 16.9377 20.7509 17.559C21.578 18.3861 22.9191 18.3861 23.7462 17.559C24.5734 16.7318 24.5734 15.3907 23.7462 14.5636C23.1135 13.9309 22.1801 13.7822 21.406 14.1174L18.3215 11.0329C18.6568 10.2588 18.508 9.32541 17.8753 8.6927C17.2426 8.05999 16.3092 7.91126 15.5351 8.24652L11.8776 4.58901L10.7462 5.72038L14.416 9.39016C14.1041 10.1557 14.2587 11.0668 14.88 11.688C15.0976 11.9057 15.3508 12.0661 15.6209 12.1692L15.6131 20.1692C14.833 20.4816 14.2821 21.2445 14.2821 22.1362C14.2821 23.3059 15.2303 24.2542 16.4001 24.2542C17.5698 24.2542 18.5181 23.3059 18.5181 22.1362C18.5181 21.2544 17.9793 20.4986 17.2131 20.1798L17.2209 12.195L20.2869 15.2611Z"
                fill="black"
              />
            </svg>
            Git
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0407 0L29.4195 7.75V23.25L16.0407 31L2.66187 23.25V7.75L16.0407 0Z" fill="#0B0D05" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.22503 7.91223L15.0049 2.26579V7.26261L9.5524 10.4106L5.22503 7.91223ZM8.54168 12.3158L4.09387 9.74783V21.1861L8.54168 18.6181V12.3158ZM9.85194 20.3503L5.19032 23.0417L15.0049 28.7082V23.3254L9.85194 20.3503ZM17.1602 23.2176V28.7082L27.0472 23L22.2922 20.2546L17.1602 23.2176ZM23.4367 18.4268L28.0713 21.1025V9.83137L23.4367 12.5071V18.4268ZM22.5917 10.5063L27.0125 7.954L17.1602 2.26578V7.37042L22.5917 10.5063Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.6554 11.6244L16.0407 8.96012L11.5404 11.5584L16.155 14.2227L20.6554 11.6244ZM10.4216 13.4012V18.6927L15.011 21.3424V16.0508L10.4216 13.4012ZM17.1738 21.2827L21.6598 18.6927V13.5331L17.1738 16.1231V21.2827Z"
                fill="#1E90FF"
              />
            </svg>
            Build Tools (Webpack/Vite/Babel/NPM)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.01429 19.8588L2.1997 19.6959C2.1997 19.6959 0.747097 22.2005 0.407602 23.7281C0.00982249 25.518 0.733443 27.964 0.733443 27.964C0.733443 27.964 1.83855 29.91 3.50304 30.4892C6.99536 31.7044 13.2374 27.6381 13.2374 27.6381C13.2374 27.6381 15.8573 26.437 17.6769 26.0904C18.7435 25.8872 20.4465 25.7238 20.4465 25.7238C20.4465 25.7238 23.5012 25.3573 24.6823 23.0357C25.6703 21.0939 24.6823 19.2479 24.6823 19.2479C24.6823 19.2479 22.965 20.2133 20.9759 19.4515C19.2653 18.7964 18.8987 16.7227 18.8987 16.7227H16.7401C16.7401 16.7227 16.1477 18.9149 14.8258 19.4515C14.0005 19.7866 12.5857 19.8588 12.5857 19.8588C12.5857 19.8588 11.1256 21.9324 9.77536 23.0357C8.34084 24.2079 5.62097 25.3573 5.62097 25.3573C5.62097 25.3573 3.8973 24.1602 3.25866 23.0357C2.53493 21.7614 3.01429 19.8588 3.01429 19.8588Z"
                fill="#FF7F00"
              />
              <circle cx="3.46225" cy="14.1524" r="2.15866" fill="#FF7F00" />
              <circle cx="13.1558" cy="14.1524" r="2.15866" fill="#FF7F00" />
              <circle cx="22.5236" cy="14.1524" r="2.15866" fill="#FF7F00" />
              <path
                d="M10.1826 0.0193481H25.3339L21.5461 10.8941L17.7175 3.64426L13.9704 10.8941L10.1826 0.0193481Z"
                fill="#FF7F00"
              />
            </svg>
            Testing (Jest/Mocha)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="5" fill="#FF7F00" />
              <path
                d="M20 5C20 7.76142 17.7614 10 15 10C12.2386 10 10 7.76142 10 5C10 2.23858 12.2386 0 15 0C17.7614 0 20 2.23858 20 5Z"
                fill="#1E90FF"
              />
              <path
                d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z"
                fill="#1E90FF"
              />
              <path
                d="M15 10C12.2386 10 10 7.76142 10 5C10 2.23858 12.2386 0 15 0H5C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10H15Z"
                fill="#1E90FF"
              />
              <path
                d="M10 15C10 17.7614 7.76142 20 5 20C2.23858 20 0 17.7614 0 15C0 12.2386 2.23858 10 5 10C7.76142 10 10 12.2386 10 15Z"
                fill="#FF7F00"
              />
              <path d="M5 10.0098H10V20H5V10.0098Z" fill="#FF7F00" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 30C7.76142 30 10 27.7614 10 25C10 24.9548 9.9994 24.9098 9.99821 24.8649H9.99999V20H5.13512V20.0018C5.09023 20.0006 5.04518 20 5 20C2.23858 20 0 22.2386 0 25C0 27.7614 2.23858 30 5 30Z"
                fill="#1E90FF"
              />
              <circle cx="15" cy="5" r="5" fill="white" />
            </svg>
            UI/UX Design Principles (Figma, Sketch, Adobe/WCAG standards)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="28" height="21.7857" stroke="#1E90FF" />
              <rect width="29" height="6.90476" fill="#1E90FF" />
              <ellipse cx="21.7499" cy="3.17614" rx="1.03571" ry="1.10476" fill="#D9D9D9" />
              <ellipse cx="25.6166" cy="3.17614" rx="1.03571" ry="1.10476" fill="#D9D9D9" />
              <path
                d="M10.4953 17.3165L7.60853 12.3165H13.382L10.4953 17.3165ZM17.1812 10.0285H12.7326V9.02853H17.1812V10.0285ZM10.9953 11.7659V12.8165H9.99528V11.7659H10.9953ZM12.7326 10.0285C11.7731 10.0285 10.9953 10.8064 10.9953 11.7659H9.99528C9.99528 10.2541 11.2208 9.02853 12.7326 9.02853V10.0285Z"
                fill="white"
              />
              <path
                d="M18.4505 10.7979L21.3373 15.7979L15.5638 15.7979L18.4505 10.7979ZM11.7646 18.0859L16.2132 18.0859L16.2132 19.0859L11.7646 19.0859L11.7646 18.0859ZM17.9505 16.3486L17.9505 15.2979L18.9505 15.2979L18.9505 16.3486L17.9505 16.3486ZM16.2132 18.0859C17.1727 18.0859 17.9505 17.3081 17.9505 16.3486L18.9505 16.3486C18.9505 17.8603 17.725 19.0859 16.2132 19.0859L16.2132 18.0859Z"
                fill="white"
              />
            </svg>
            Cross-Browser Compatibility
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.5" cy="3.5942" r="2.7942" fill="#FF7F00" stroke="black" stroke-width="1.6" />
              <path
                d="M0 19.5435L2.92029 16.3986H27.8551L31 19.5435M1.7971 30.1015L4.94203 27.4058V20.2174H25.8333V27.4058L28.529 30.1015"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M22.787 15.7246C22.787 18.8912 22.2866 21.6413 21.1313 23.574C20.0123 25.4461 18.2514 26.6058 15.5 26.6058C12.7487 26.6058 10.9878 25.4461 9.86878 23.574C8.71348 21.6413 8.21309 18.8912 8.21309 15.7246C8.21309 12.5323 8.60818 9.7876 9.70829 7.86161C10.2494 6.91427 10.9573 6.17174 11.8768 5.66071C12.7992 5.14806 13.9794 4.84349 15.5 4.84349C17.0207 4.84349 18.2009 5.14806 19.1233 5.66071C20.0428 6.17174 20.7507 6.91427 21.2918 7.86161C22.3919 9.7876 22.787 12.5323 22.787 15.7246Z"
                fill="#FF7F00"
                stroke="black"
                stroke-width="1.6"
              />
              <path
                d="M15.3877 13.029H5.16669V7.63767L2.69568 5.3913M15.3877 13.029H25.6087V7.63767L28.3044 5.3913M15.3877 13.029V27.4058"
                stroke="black"
                stroke-width="1.6"
              />
            </svg>
            Security Practices (XSS, CSRF, HTTPS)
          </div>
        </div>
        <div className="skills__soft">
          <h3 className="skills__soft-title">Soft Ones</h3>
          <div className="skills__item skills__soft-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5002 10.3065C15.5002 14.1992 15.5002 27 15.5002 27C15.5002 27 2 18.0968 2 11.7903C2 6.96774 5.02208 4 8.75 4C12.4779 4 15.5002 6.96774 15.5002 10.3065Z"
                fill="#FF7F00"
              />
              <path
                d="M29 11.7903C29 17.7258 15.5002 27 15.5002 27C15.5002 27 15.5002 14.1992 15.5002 10.3065C15.5002 6.96774 18.5221 4 22.25 4C25.9779 4 29 6.96774 29 11.7903Z"
                fill="#FF7F00"
              />
            </svg>
            Collaboration with backend developers, UX/UI designers, and other team members
          </div>
          <div className="skills__item skills__soft-item">
            <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.607422 0H26.3928V7.43855C25.4846 6.88633 24.2853 6.79688 22.9705 6.79688C20.1355 6.79688 17.8372 9.0313 17.8372 11.7876C17.8372 14.5439 20.1355 16.7783 22.9705 16.7783C24.2853 16.7783 25.4846 16.6889 26.3928 16.1366V24.6803H18.0276C18.1925 25.3436 18.2414 26.0847 18.2414 26.8667C18.2414 29.7017 15.9431 32 13.108 32C10.273 32 7.97474 29.7017 7.97474 26.8667C7.97474 26.0847 8.0561 25.3436 8.2592 24.6803H0.607422V0Z"
                fill="#1E90FF"
              />
            </svg>
            Problem-solving and debugging
          </div>
          <div className="skills__item skills__soft-item">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="25" fill="#FF7F00" />
              <path d="M4.5 14L10 18L20.5 6" stroke="black" stroke-width="4" />
            </svg>
            Communication and documentation skills
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
