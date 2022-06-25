import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <article className="article-one">
          <div className="footer-contacts contacts">
            <div className="contacts__logo">
              <svg
                className="contacts__logo-svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                id="Main"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M22,3a1,1,0,0,0-1-1H3A1,1,0,0,0,3,4V17a1,1,0,0,0,0,2H9.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,19H21a1,1,0,0,0,0-2V4A1,1,0,0,0,22,3ZM19,17H5V4H19Z" />
                <path d="M7,12h4a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H7A1,1,0,0,0,6,7v4A1,1,0,0,0,7,12ZM8,8h2v2H8Z" />
                <path d="M14,8h3a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z" />
                <path d="M14,12h3a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z" />
                <path d="M7,16H17a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z" />
              </svg>
              <a href="#0">WhyNot?</a>
            </div>
            <p className="contacts__block">
              <svg
                className="contacts__svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5 8.50051C11.5 7.11924 10.3808 6 9.00051 6C7.61924 6 6.5 7.11924 6.5 8.50051C6.5 9.88076 7.61924 11 9.00051 11C10.3808 11 11.5 9.88076 11.5 8.50051Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99951 19C7.80104 19 1.5 13.8984 1.5 8.56329C1.5 4.38664 4.8571 1 8.99951 1C13.1419 1 16.5 4.38664 16.5 8.56329C16.5 13.8984 10.198 19 8.99951 19Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="#0" className="contacts__link">
                г.Оренбург, ул.Советская 9
              </a>
            </p>
            <p className="contacts__block">
              <svg
                className="contacts__svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.353 5.04297C15.124 5.38697 16.508 6.77197 16.853 8.54297"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0315 11.4724C14.0205 15.4604 14.9254 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68447 14.8197C-1.99341 6.144 1.76157 3.67244 2.07394 3.28395C5.18377 0.173846 5.66682 1.58938 8.11539 4.03733C10.6541 6.5765 6.04254 7.48441 10.0315 11.4724Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="#0" className="contacts__link">
                0943833399
              </a>
            </p>
            <p className="contacts__block">
              <svg
                className="contacts__svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9026 6.85107L12.4593 10.4641C11.6198 11.1301 10.4387 11.1301 9.59919 10.4641L5.11841 6.85107"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="#0" className="contacts__link">
                support@zone.com
              </a>
            </p>
          </div>
          <div className="footer-social social">
            <a href="#0" className="social__icon">
              <svg
                className="social__icon_svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.1"
                  cy="16.1"
                  r="15.6"
                  fill="url(#paint0_linear_1_460)"
                  fill-opacity="0.05"
                  stroke="url(#paint1_linear_1_460)"
                />
                <path
                  d="M13.9658 24.5738V16.6216H11.8631V13.7585H13.9658V11.3129C13.9658 9.39123 15.2079 7.62646 18.07 7.62646C19.2287 7.62646 20.0856 7.73755 20.0856 7.73755L20.0181 10.4113C20.0181 10.4113 19.1442 10.4028 18.1906 10.4028C17.1585 10.4028 16.9932 10.8784 16.9932 11.6678V13.7585H20.1001L19.965 16.6216H16.9932V24.5738H13.9658Z"
                  fill="white"
                  fill-opacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_460"
                    x1="16.1"
                    y1="0"
                    x2="16.1"
                    y2="32.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FEFEFF" stop-opacity="0.29" />
                    <stop offset="1" stop-color="white" stop-opacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_460"
                    x1="-1.54448"
                    y1="2.15937"
                    x2="35.5021"
                    y2="6.78831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.08" />
                    <stop offset="1" stop-color="white" stop-opacity="0.07" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a href="#0" className="social__icon">
              <svg
                className="social__icon_svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.5"
                  cy="16.1"
                  r="15.6"
                  fill="url(#paint0_linear_1_466)"
                  fill-opacity="0.05"
                  stroke="url(#paint1_linear_1_466)"
                />
                <path
                  d="M16.0744 13.8394C14.5962 13.8394 13.3899 15.0457 13.3899 16.5239C13.3899 18.0021 14.5962 19.2084 16.0744 19.2084C17.5526 19.2084 18.7589 18.0021 18.7589 16.5239C18.7589 15.0457 17.5526 13.8394 16.0744 13.8394ZM24.1258 16.5239C24.1258 15.4122 24.1359 14.3106 24.0734 13.201C24.011 11.9121 23.717 10.7683 22.7745 9.82578C21.83 8.88128 20.6881 8.58927 19.3993 8.52684C18.2876 8.46441 17.186 8.47448 16.0764 8.47448C14.9647 8.47448 13.8632 8.46441 12.7535 8.52684C11.4647 8.58927 10.3208 8.88329 9.3783 9.82578C8.4338 10.7703 8.14179 11.9121 8.07936 13.201C8.01693 14.3127 8.027 15.4142 8.027 16.5239C8.027 17.6335 8.01693 18.7371 8.07936 19.8467C8.14179 21.1356 8.43581 22.2795 9.3783 23.222C10.3228 24.1665 11.4647 24.4585 12.7535 24.5209C13.8652 24.5833 14.9668 24.5733 16.0764 24.5733C17.188 24.5733 18.2896 24.5833 19.3993 24.5209C20.6881 24.4585 21.832 24.1645 22.7745 23.222C23.719 22.2775 24.011 21.1356 24.0734 19.8467C24.1379 18.7371 24.1258 17.6355 24.1258 16.5239ZM16.0744 20.6543C13.7887 20.6543 11.944 18.8096 11.944 16.5239C11.944 14.2381 13.7887 12.3934 16.0744 12.3934C18.3601 12.3934 20.2048 14.2381 20.2048 16.5239C20.2048 18.8096 18.3601 20.6543 16.0744 20.6543ZM20.374 13.1889C19.8403 13.1889 19.4093 12.758 19.4093 12.2243C19.4093 11.6906 19.8403 11.2596 20.374 11.2596C20.9076 11.2596 21.3386 11.6906 21.3386 12.2243C21.3388 12.351 21.3139 12.4765 21.2655 12.5936C21.2171 12.7107 21.146 12.8171 21.0564 12.9067C20.9668 12.9963 20.8604 13.0674 20.7433 13.1158C20.6262 13.1642 20.5007 13.1891 20.374 13.1889Z"
                  fill="white"
                  fill-opacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_466"
                    x1="16.5"
                    y1="0"
                    x2="16.5"
                    y2="32.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FEFEFF" stop-opacity="0.29" />
                    <stop offset="1" stop-color="white" stop-opacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_466"
                    x1="-1.14445"
                    y1="2.15937"
                    x2="35.9022"
                    y2="6.78831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.08" />
                    <stop offset="1" stop-color="white" stop-opacity="0.07" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a href="#0" className="social__icon">
              <svg
                className="social__icon_svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.7"
                  cy="16.1"
                  r="15.6"
                  fill="url(#paint0_linear_1_469)"
                  fill-opacity="0.05"
                  stroke="url(#paint1_linear_1_469)"
                />
                <path
                  d="M9.9212 13.7054C9.9212 12.9727 10.0493 12.2805 10.3017 11.6344C10.5428 11.0069 10.9011 10.431 11.3574 9.93736C11.8128 9.45018 12.3339 9.02891 12.9057 8.68573C13.4924 8.33082 14.1275 8.06307 14.7912 7.89087C15.4628 7.71449 16.1545 7.62554 16.8489 7.62622C17.9216 7.62622 18.9199 7.85319 19.8457 8.30525C20.7594 8.74906 21.5371 9.43016 22.0975 10.2773C22.6758 11.1391 22.963 12.1138 22.963 13.2006C22.963 13.8523 22.899 14.4899 22.7681 15.1134C22.6395 15.7365 22.4352 16.3415 22.1597 16.915C21.897 17.4702 21.5536 17.9833 21.1406 18.4379C20.7256 18.8852 20.2229 19.2423 19.6639 19.487C19.0571 19.753 18.4006 19.8869 17.738 19.8797C17.2775 19.8797 16.8179 19.7714 16.3639 19.5539C15.91 19.3373 15.5841 19.0397 15.3882 18.6583C15.3195 18.9229 15.2253 19.3053 15.1001 19.8053C14.9795 20.3045 14.8985 20.6266 14.8627 20.7726C14.8251 20.9176 14.7554 21.1596 14.6537 21.4949C14.5847 21.7429 14.4962 21.9851 14.389 22.2191L14.065 22.8539C13.9249 23.1263 13.7683 23.3898 13.596 23.6431C13.4256 23.8899 13.2146 24.1846 12.9632 24.5237L12.8228 24.5736L12.7296 24.4719C12.6288 23.4048 12.577 22.7663 12.577 22.5554C12.577 21.9309 12.6514 21.2303 12.7983 20.4524C12.9424 19.6754 13.1704 18.6988 13.4764 17.5244C13.7825 16.3509 13.9577 15.6606 14.0048 15.4562C13.7891 15.0164 13.6799 14.4419 13.6799 13.7356C13.6799 13.1714 13.856 12.6431 14.2091 12.1458C14.5632 11.6505 15.0106 11.4028 15.5531 11.4028C15.9684 11.4028 16.2905 11.5403 16.5212 11.8162C16.7529 12.0912 16.8659 12.4378 16.8659 12.8606C16.8659 13.3089 16.7171 13.9578 16.4176 14.8064C16.1181 15.6559 15.9693 16.2897 15.9693 16.7107C15.9693 17.1373 16.1219 17.4942 16.427 17.7739C16.7282 18.0538 17.1264 18.2054 17.5374 18.1968C17.9103 18.1968 18.256 18.112 18.5771 17.9416C18.8932 17.7761 19.1669 17.5398 19.3767 17.2512C19.8337 16.6243 20.1594 15.9116 20.3345 15.1558C20.4249 14.7583 20.4946 14.3807 20.5379 14.0256C20.5841 13.6687 20.6038 13.3315 20.6038 13.0113C20.6038 11.8369 20.2309 10.9215 19.4897 10.266C18.7448 9.61056 17.7747 9.2847 16.5815 9.2847C15.2244 9.2847 14.0895 9.72357 13.1807 10.6041C12.2709 11.4819 11.8132 12.5979 11.8132 13.9512C11.8132 14.2498 11.8584 14.538 11.9441 14.8167C12.028 15.0946 12.1193 15.3159 12.2182 15.4797C12.3162 15.6408 12.4084 15.7981 12.4923 15.9431C12.577 16.0881 12.6213 16.1917 12.6213 16.2539C12.6213 16.4441 12.5714 16.6918 12.4706 16.9979C12.3661 17.304 12.2427 17.4565 12.0939 17.4565C12.0798 17.4565 12.0214 17.4462 11.9197 17.4245C11.5674 17.3194 11.2493 17.1228 10.9977 16.8547C10.7306 16.577 10.5199 16.2501 10.377 15.8922C10.2346 15.5356 10.1237 15.1673 10.0455 14.7913C9.96107 14.4356 9.91934 14.071 9.9212 13.7054Z"
                  fill="white"
                  fill-opacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_469"
                    x1="16.7"
                    y1="0"
                    x2="16.7"
                    y2="32.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FEFEFF" stop-opacity="0.29" />
                    <stop offset="1" stop-color="white" stop-opacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_469"
                    x1="-0.94444"
                    y1="2.15937"
                    x2="36.1022"
                    y2="6.78831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.08" />
                    <stop offset="1" stop-color="white" stop-opacity="0.07" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a href="#0" className="social__icon">
              <svg
                className="social__icon_svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.3"
                  cy="16.1"
                  r="15.6"
                  fill="url(#paint0_linear_1_463)"
                  fill-opacity="0.05"
                  stroke="url(#paint1_linear_1_463)"
                />
                <path
                  d="M24.7737 10.9568C24.1505 11.2256 23.4723 11.4191 22.7737 11.4945C23.499 11.0636 24.0421 10.3828 24.3012 9.57996C23.6206 9.98483 22.875 10.2687 22.0975 10.4191C21.7725 10.0717 21.3795 9.79491 20.9429 9.60604C20.5063 9.41718 20.0355 9.32025 19.5598 9.3213C17.6351 9.3213 16.0872 10.8814 16.0872 12.7959C16.0872 13.0647 16.1198 13.3336 16.1727 13.5923C13.2908 13.4415 10.7205 12.0647 9.01171 9.95675C8.70035 10.4886 8.53719 11.0941 8.5392 11.7103C8.5392 12.9161 9.15225 13.9792 10.0871 14.6045C9.53617 14.5828 8.99815 14.4314 8.5168 14.1625V14.2053C8.5168 15.8937 9.7103 17.2929 11.301 17.6147C11.0023 17.6923 10.6951 17.732 10.3865 17.7329C10.1604 17.7329 9.94656 17.7105 9.73067 17.6799C10.1706 19.0567 11.4517 20.0567 12.9772 20.0893C11.7837 21.0242 10.2887 21.5741 8.66547 21.5741C8.37423 21.5741 8.10538 21.5639 7.82635 21.5313C9.3661 22.5191 11.193 23.0894 13.1605 23.0894C19.5476 23.0894 23.0425 17.798 23.0425 13.2053C23.0425 13.0546 23.0425 12.9039 23.0323 12.7531C23.7085 12.2582 24.3012 11.6452 24.7737 10.9568Z"
                  fill="white"
                  fill-opacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_463"
                    x1="16.3"
                    y1="0"
                    x2="16.3"
                    y2="32.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FEFEFF" stop-opacity="0.29" />
                    <stop offset="1" stop-color="white" stop-opacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_463"
                    x1="-1.34446"
                    y1="2.15937"
                    x2="35.7022"
                    y2="6.78831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.08" />
                    <stop offset="1" stop-color="white" stop-opacity="0.07" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </article>
        <article className="article-two">
          <a href="#0">Компании</a>
          <a href="#0">Новости</a>
          <a href="#0">Блог</a>
          <a href="#0">О нас</a>
        </article>
        <article className="article-three">
          <a href="#0">Предприятия</a>
          <a href="#0">Инновации</a>
          <a href="#0">Блог</a>
          <a href="#0">Гранты</a>
          <a href="#0">Технологии</a>
        </article>
      </div>
      <div className="copyright">Copyright Ⓒ 2022, г.Оренбург, г.Тюмень</div>
    </div>
  );
};

export default Footer;
