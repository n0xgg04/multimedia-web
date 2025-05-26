import * as React from "react";

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 20h20"
        stroke="url(#paint0_linear_3800_1976)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 30V10"
        stroke="url(#paint1_linear_3800_1976)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3800_1976"
          x1={41.6463}
          y1={18.3854}
          x2={41.0258}
          y2={25.7882}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.245769} stopColor="#D501C5" />
          <stop offset={0.502999} stopColor="#FF7900" />
          <stop offset={0.699532} stopColor="#FCD500" />
          <stop offset={1} stopColor="#7739FC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3800_1976"
          x1={21.5823}
          y1={-22.2917}
          x2={17.1393}
          y2={-22.1591}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.245769} stopColor="#D501C5" />
          <stop offset={0.502999} stopColor="#FF7900" />
          <stop offset={0.699532} stopColor="#FCD500" />
          <stop offset={1} stopColor="#7739FC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PlusIcon;
