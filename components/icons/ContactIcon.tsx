import { SVGProps } from 'react';

// ----------------------------------------------------------------

const ContactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.5 5 3.333-3.333m0 0v2.5m0-2.5h-2.5"
    />
    <path
      fill="currentColor"
      d="m10.963 9.623-.379.4s-.902.95-3.365-1.643C4.757 5.787 5.66 4.838 5.66 4.838l.24-.252c.588-.62.643-1.615.13-2.342L4.978.758c-.637-.9-1.867-1.018-2.596-.25L1.076 1.882c-.361.381-.603.874-.574 1.421.075 1.4.674 4.411 4.01 7.925 3.54 3.725 6.86 3.873 8.218 3.74.43-.042.803-.275 1.104-.591l1.183-1.247c.8-.842.575-2.284-.448-2.872l-1.592-.917a1.63 1.63 0 0 0-2.014.28"
    />
  </svg>
);

export default ContactIcon;
