import * as React from "react";

function NewPostPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={160}
      height={160}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40 80h80M80 120V40"
        stroke="silver"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NewPostPlus;
