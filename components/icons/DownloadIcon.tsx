import { SVGProps } from 'react';

// ----------------------------------------------------------------

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5 16.333c-.458 0-.85-.163-1.177-.49a1.601 1.601 0 0 1-.49-1.176v-2.334H5v2.334h10v-2.334h1.667v2.334c0 .458-.164.85-.49 1.177-.327.327-.72.49-1.177.49H5Zm5-3.166L5.833 9 7 7.792l2.167 2.166V3.167h1.667v6.791L13 7.792 14.167 9 10 13.167Z"
    />
  </svg>
);
export default DownloadIcon;
