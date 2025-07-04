import React from "react";

type HeaderShieldIconProps = React.SVGProps<SVGSVGElement>;

function HeaderShieldIcon(props: HeaderShieldIconProps) {
  return (
    <svg
      width="120"
      height="130"
      viewBox="0 0 120 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2089_1317)">
        <mask
          id="mask0_2089_1317"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="120"
          height="130"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H120V130H0V0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2089_1317)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.86 -25.4355C58.98 -18.5555 44.39 -13.1855 29.35 -9.43554L21.35 -7.44554C18.21 -6.65553 16 -3.83554 16 -0.595537V42.1945C16 65.7445 28.35 87.5645 48.54 99.6845L72.37 113.994C74.6 115.334 77.4 115.334 79.63 113.994L103.46 99.6845C123.65 87.5645 136 65.7445 136 42.1945V-0.595537C136 -3.83554 133.79 -6.65554 130.65 -7.43554L122.65 -9.43554C107.61 -13.1855 93.02 -18.5555 79.13 -25.4455C77.16 -26.4155 74.84 -26.4155 72.86 -25.4455V-25.4355ZM69.3266 30.7419H52.6666C48.9766 30.7419 45.9966 33.7319 45.9966 37.4119C45.9966 41.0919 48.9766 44.0819 52.6666 44.0819H69.3266V60.7419C69.3266 64.4319 72.3166 67.4119 75.9966 67.4119C79.6766 67.4119 82.6666 64.4319 82.6666 60.7419V44.0819H99.3266C103.017 44.0819 105.997 41.0919 105.997 37.4119C105.997 33.7319 103.017 30.7419 99.3266 30.7419H82.6666V14.0819C82.6666 10.3919 79.6766 7.41187 75.9966 7.41187C72.3166 7.41187 69.3266 10.3919 69.3266 14.0819V30.7419Z"
            fill="url(#paint0_linear_2089_1317)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2089_1317"
          x1="56.715"
          y1="-36.6283"
          x2="-22.0234"
          y2="49.7743"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.6" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <clipPath id="clip0_2089_1317">
          <rect width="120" height="130" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HeaderShieldIcon;
