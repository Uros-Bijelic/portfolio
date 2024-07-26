import { SVGProps } from 'react';

// ----------------------------------------------------------------

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.415 13.09c4.986 4.986 6.117-.782 9.292 2.391 3.06 3.06 4.82 3.673.942 7.55-.486.39-3.572 5.087-14.418-5.756C-3.617 6.43 1.077 3.34 1.467 2.855c3.888-3.888 4.49-2.118 7.551.942 3.175 3.174-2.59 4.309 2.397 9.293Z"
      clipRule="evenodd"
    />
  </svg>
);

export default PhoneIcon;
