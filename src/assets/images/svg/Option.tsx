import * as React from "react";

function OptionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={4}
      viewBox="0 0 20 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM10 0C8.9 0 8 .9 8 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM18 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="#858585"
      />
    </svg>
  );
}

export default OptionIcon;
