import { SVGProps } from 'react';

// ----------------------------------------------------------------

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.4 14.624V12.036C8.183 19.108 10.791 19.045 15.333 12.036V14.624H3.4Z"
      fill="black"
    />
    <path d="M3.4 7.695H6.616V17.987L3.4 14.69V7.695Z" fill="#595959" />
    <path d="M13.45 4.88H16.666V14.69L13.45 17.987V4.88Z" fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.4 7.293L5.344 4.88 7.287 7.293H3.4Z"
      fill="#595959"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.45 4.199L15.394 1.786 17.337 4.199H13.45Z"
      fill="black"
    />
  </svg>
);
export default LogoIcon;
