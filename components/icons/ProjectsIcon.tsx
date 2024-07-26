import { SVGProps } from 'react';

// ----------------------------------------------------------------

const ProjectsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="m7.22 5-4.76 5 4.76 5m6.132 0 4.76-5-4.76-5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M1 0h18v18H1z" />
      </clipPath>
    </defs>
  </svg>
);
export default ProjectsIcon;
