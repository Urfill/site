import './Skills.scss';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__grid">
        <div className="skills__hard">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_24_12572)">
                <rect width="32" height="32" fill="#EEEEEE" />
                <rect y="-1" width="33" height="33" fill="#B10622" />
                <path
                  d="M14 14.1428H16.7857V25.7142C15.6071 28.4999 13.1861 28.8631 11.1071 28.2856C9.17857 27.7499 8 25.7142 8 25.7142L10.25 24.4285C10.25 24.4285 10.8929 25.607 12.2857 25.607C13.6786 25.607 14 24.4285 14 24.4285V14.1428Z"
                  fill="black"
                />
                <path
                  d="M27.3929 16.2856L25.4643 17.5713C25.4643 17.5713 24.2857 16.4999 23.4286 16.4999C22.5714 16.4999 22.0114 16.9562 22.0357 17.9999C22.0698 19.4657 25.0083 20.1826 26 20.6785C26 20.6785 28.264 21.8775 28.1429 24.9642C28.0217 28.0509 25.0357 28.4142 23.75 28.4999C22.4643 28.5856 21.5594 28.3118 20.4286 27.6428C19.4325 27.0535 18.5 25.7142 18.5 25.7142L20.75 24.107C20.75 24.107 21.8855 25.9462 23.1071 26.0356C24.0839 26.1071 25.2286 25.9285 25.3571 24.9642C25.6143 23.0356 23.5271 22.6229 22.6786 22.1785C20.5594 21.018 18.3929 19.7142 19.5714 16.2856C20.0134 14.9999 21.2841 14.1809 22.7857 14.0356C26.1071 13.7142 27.3929 16.2856 27.3929 16.2856Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_24_12572">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            JavaScript (ES6+/Node.js/Web APIs and browser compatibility)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_24_12583)">
                <circle cx="15.4998" cy="15.495" r="2.59282" fill="#EEEEEE" stroke="#EEEEEE" stroke-width="0.0933448" />
                <path
                  d="M30.2532 15.6077C30.2532 16.1984 29.9587 16.8357 29.2674 17.493C28.5743 18.1519 27.5317 18.7798 26.1815 19.3228C23.4852 20.4072 19.7091 21.0947 15.5 21.0947C11.2909 21.0947 7.51475 20.4072 4.81848 19.3228C3.46833 18.7798 2.42566 18.1519 1.73264 17.493C1.04135 16.8357 0.746758 16.1984 0.746758 15.6077C0.746758 15.017 1.04135 14.3798 1.73264 13.7225C2.42566 13.0635 3.46833 12.4357 4.81848 11.8927C7.51475 10.8083 11.2909 10.1208 15.5 10.1208C19.7091 10.1208 23.4852 10.8083 26.1815 11.8927C27.5317 12.4357 28.5743 13.0635 29.2674 13.7225C29.9587 14.3798 30.2532 15.017 30.2532 15.6077Z"
                  stroke="#EEEEEE"
                  stroke-width="1.49352"
                />
                <path
                  d="M22.8765 28.3843C22.3649 28.6797 21.6658 28.7432 20.7509 28.4731C19.8337 28.2024 18.7686 27.6134 17.6233 26.7156C15.3361 24.9228 12.8526 21.9963 10.7481 18.3511C8.64352 14.7059 7.35084 11.0919 6.9418 8.21469C6.73697 6.77393 6.75936 5.55703 6.98353 4.62737C7.20713 3.70004 7.61169 3.12631 8.12328 2.83094C8.63486 2.53558 9.33401 2.47209 10.2489 2.74211C11.1661 3.0128 12.2312 3.60186 13.3765 4.49963C15.6637 6.29248 18.1472 9.21897 20.2517 12.8642C22.3563 16.5093 23.649 20.1233 24.058 23.0006C24.2628 24.4413 24.2404 25.6582 24.0163 26.5879C23.7927 27.5152 23.3881 28.0889 22.8765 28.3843Z"
                  stroke="#EEEEEE"
                  stroke-width="1.49352"
                />
                <path
                  d="M8.12328 28.384C7.61169 28.0886 7.20713 27.5149 6.98353 26.5876C6.75936 25.6579 6.73697 24.441 6.9418 23.0003C7.35084 20.123 8.64352 16.509 10.7481 12.8639C12.8526 9.21867 15.3361 6.29218 17.6233 4.49933C18.7686 3.60156 19.8337 3.0125 20.7509 2.74181C21.6658 2.47179 22.3649 2.53528 22.8765 2.83064C23.3881 3.12601 23.7927 3.69974 24.0163 4.62707C24.2404 5.55673 24.2628 6.77363 24.058 8.21439C23.649 11.0916 22.3563 14.7056 20.2517 18.3508C18.1472 21.996 15.6637 24.9225 13.3765 26.7153C12.2312 27.6131 11.1661 28.2021 10.2489 28.4728C9.33401 28.7429 8.63486 28.6794 8.12328 28.384Z"
                  stroke="#EEEEEE"
                  stroke-width="1.49352"
                />
              </g>
              <defs>
                <clipPath id="clip0_24_12583">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Frameworks/Libraries (React.js)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.52441 0H29.4764L26.9478 28.7335L15.5004 31.7218L3.91504 28.7335L1.52441 0Z" fill="#B10622" />
              <path
                d="M24.4196 5.70117H6.67383L7.54733 16.459H19.7763L19.4085 20.9184L15.5467 22.1138L11.639 20.9184L11.3631 18.206H7.77719L8.32888 23.7688L15.5467 25.7457L22.7186 23.7688L23.776 12.7811H10.9034L10.6276 9.28711H24.0059L24.4196 5.70117Z"
                fill="black"
              />
            </svg>
            HTML/CSS (HTML5/BEM/RWD/SASS/SCSS...)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="16" y="0.5" width="21.5668" height="21.5668" transform="rotate(45 16 0.5)" fill="#B10622" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.2872 15.2613C19.9752 16.0269 20.1299 16.938 20.7511 17.5592C21.5783 18.3863 22.9193 18.3863 23.7465 17.5592C24.5736 16.7321 24.5736 15.391 23.7465 14.5639C23.1138 13.9311 22.1803 13.7824 21.4063 14.1177L18.3214 11.0328C18.6566 10.2587 18.5079 9.32527 17.8752 8.69256C17.2425 8.05985 16.3091 7.91112 15.535 8.24638L11.8775 4.58887L10.7461 5.72024L14.4159 9.39002C14.104 10.1556 14.2586 11.0667 14.8798 11.6879C15.0974 11.9055 15.3505 12.0658 15.6204 12.1689L15.6126 20.1689C14.8329 20.4814 14.2822 21.2442 14.2822 22.1356C14.2822 23.3054 15.2305 24.2536 16.4003 24.2536C17.57 24.2536 18.5183 23.3054 18.5183 22.1356C18.5183 21.2537 17.9792 20.4976 17.2126 20.179L17.2204 12.1946L20.2872 15.2613Z"
                fill="black"
              />
            </svg>
            Git
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0403 1L29.4191 8.75V24.25L16.0403 32L2.6615 24.25V8.75L16.0403 1Z" fill="#0B0D05" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.22483 8.91217L15.0049 3.26562V8.2624L9.55216 11.4106L5.22483 8.91217ZM8.54155 13.3158L4.09375 10.7478V22.1855L8.54155 19.6175V13.3158ZM9.85142 21.3499L5.18977 24.0414L15.0049 29.7081V24.3253L9.85142 21.3499ZM17.1602 24.2174V29.708L27.047 23.9999L22.292 21.2546L17.1602 24.2174ZM23.4366 19.4267L28.0712 22.1025V10.8308L23.4366 13.5065V19.4267ZM22.5912 11.5059L27.0119 8.95364L17.1602 3.26572V8.37033L22.5912 11.5059Z"
                fill="#EEEEEE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.6544 12.6241L16.04 9.95996L11.5397 12.5582L16.1542 15.2223L20.6544 12.6241ZM10.4209 14.4009V19.6925L15.011 22.3426V17.051L10.4209 14.4009ZM17.1738 22.2821L21.6591 19.6925V14.5328L17.1738 17.1224V22.2821Z"
                fill="#EEEEEE"
              />
            </svg>
            Build Tools (Webpack/Vite/Babel/NPM)
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.01417 20.8588L5.19958 20.6959C5.19958 20.6959 3.74698 23.2005 3.40748 24.7281C3.0097 26.518 3.73332 28.964 3.73332 28.964C3.73332 28.964 4.83842 30.91 6.50292 31.4892C9.99523 32.7044 16.2372 28.6381 16.2372 28.6381C16.2372 28.6381 18.8571 27.437 20.6767 27.0904C21.7434 26.8872 23.4463 26.7238 23.4463 26.7238C23.4463 26.7238 26.501 26.3573 27.6822 24.0357C28.6701 22.0939 27.6822 20.2479 27.6822 20.2479C27.6822 20.2479 25.9649 21.2133 23.9758 20.4515C22.2652 19.7964 21.8986 17.7227 21.8986 17.7227H19.74C19.74 17.7227 19.1475 19.9149 17.8257 20.4515C17.0004 20.7866 15.5856 20.8588 15.5856 20.8588C15.5856 20.8588 14.1254 22.9324 12.7752 24.0357C11.3407 25.2079 8.62085 26.3573 8.62085 26.3573C8.62085 26.3573 6.89718 25.1602 6.25854 24.0357C5.53481 22.7614 6.01417 20.8588 6.01417 20.8588Z"
                fill="#B10622"
              />
              <circle cx="6.46237" cy="15.1528" r="2.15866" fill="#B10622" />
              <circle cx="16.1557" cy="15.1528" r="2.15866" fill="#B10622" />
              <circle cx="25.5239" cy="15.1528" r="2.15866" fill="#B10622" />
              <path
                d="M13.1826 1.01953H28.3339L24.5461 11.8943L20.7175 4.64444L16.9704 11.8943L13.1826 1.01953Z"
                fill="#B10622"
              />
            </svg>
            Testing (Jest/Mocha)
          </div>
          {/* <div className="skills__item skills__hard-item">
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
          </div> */}
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="5.5" width="28" height="21.7857" stroke="#EEEEEE" />
              <rect x="1" y="5" width="29" height="6.90476" fill="#EEEEEE" />
              <ellipse cx="22.7496" cy="8.17605" rx="1.03571" ry="1.10476" fill="black" />
              <ellipse cx="26.6168" cy="8.17605" rx="1.03571" ry="1.10476" fill="black" />
              <path
                d="M11.4948 22.3163L8.60804 17.3163H14.3815L11.4948 22.3163ZM18.1807 15.0283H13.7321V14.0283H18.1807V15.0283ZM11.9948 16.7656V17.8163H10.9948V16.7656H11.9948ZM13.7321 15.0283C12.7726 15.0283 11.9948 15.8061 11.9948 16.7656H10.9948C10.9948 15.2539 12.2203 14.0283 13.7321 14.0283V15.0283Z"
                fill="#EEEEEE"
              />
              <path
                d="M19.4505 15.798L22.3373 20.798L16.5638 20.798L19.4505 15.798ZM12.7646 23.0859L17.2132 23.0859L17.2132 24.0859L12.7646 24.0859L12.7646 23.0859ZM18.9505 21.3486L18.9505 20.298L19.9505 20.298L19.9505 21.3486L18.9505 21.3486ZM17.2132 23.0859C18.1727 23.0859 18.9505 22.3081 18.9505 21.3486L19.9505 21.3486C19.9505 22.8604 18.725 24.0859 17.2132 24.0859L17.2132 23.0859Z"
                fill="#EEEEEE"
              />
            </svg>
            WCAG standarts
          </div>
          <div className="skills__item skills__hard-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_24_12680)">
                <circle cx="15.5005" cy="4.5942" r="2.7942" fill="#B10622" stroke="white" stroke-width="1.6" />
                <path
                  d="M0 20.5434L2.92029 17.3984H27.8551L31 20.5434M1.7971 31.1013L4.94203 28.4057V21.2173H25.8333V28.4057L28.529 31.1013"
                  stroke="white"
                  stroke-width="1.6"
                />
                <path
                  d="M22.787 16.7251C22.787 19.8916 22.2866 22.6417 21.1313 24.5745C20.0123 26.4465 18.2514 27.6063 15.5 27.6063C12.7487 27.6063 10.9878 26.4465 9.86878 24.5745C8.71348 22.6417 8.21309 19.8916 8.21309 16.7251C8.21309 13.5328 8.60818 10.7881 9.70829 8.86206C10.2494 7.91473 10.9573 7.1722 11.8768 6.66116C12.7992 6.14852 13.9794 5.84395 15.5 5.84395C17.0207 5.84395 18.2009 6.14852 19.1233 6.66116C20.0428 7.1722 20.7507 7.91473 21.2918 8.86206C22.3919 10.7881 22.787 13.5328 22.787 16.7251Z"
                  fill="#B10622"
                  stroke="white"
                  stroke-width="1.6"
                />
                <path
                  d="M15.3873 14.0293H5.16633V8.63798L2.69531 6.3916M15.3873 14.0293H25.6084V8.63798L28.304 6.3916M15.3873 14.0293V28.4061"
                  stroke="white"
                  stroke-width="1.6"
                />
              </g>
              <defs>
                <clipPath id="clip0_24_12680">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
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
                fill="#B10622"
              />
              <path
                d="M29 11.7903C29 17.7258 15.5002 27 15.5002 27C15.5002 27 15.5002 14.1992 15.5002 10.3065C15.5002 6.96774 18.5221 4 22.25 4C25.9779 4 29 6.96774 29 11.7903Z"
                fill="#B10622"
              />
            </svg>
            Collaboration with backend developers, UX/UI designers, and other team members
          </div>
          <div className="skills__item skills__soft-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="3" width="24" height="25" fill="#B10622" />
              <path d="M4.5 17L10 21L20.5 9" stroke="black" stroke-width="4" />
            </svg>
            Problem-solving and debugging
          </div>
          <div className="skills__item skills__soft-item">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.607422 0H26.3928V7.43872C25.4846 6.88634 24.2851 6.79688 22.9702 6.79688C20.1352 6.79688 17.8369 9.03129 17.8369 11.7876C17.8369 14.5439 20.1352 16.7783 22.9702 16.7783C24.2851 16.7783 25.4846 16.6888 26.3928 16.1365V24.6803H18.0276C18.1925 25.3436 18.2414 26.0847 18.2414 26.8667C18.2414 29.7017 15.9431 32 13.108 32C10.273 32 7.97474 29.7017 7.97474 26.8667C7.97474 26.0847 8.0561 25.3436 8.25921 24.6803H0.607422V0Z"
                fill="#EEEEEE"
              />
            </svg>
            Communication and documentation skills
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
