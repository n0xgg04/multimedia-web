import * as React from "react";

function PieceRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={60}
      height={58}
      viewBox="0 0 60 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.3}
        d="M.5 28.532L59.882 0l59.382 28.532v.214L59.882 57.279.5 28.745v-.213z"
        fill="#fff"
      />
    </svg>
  );
}

function PieceTop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={215}
      height={160}
      viewBox="0 0 215 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.2}
        d="M213.84-.427L71.425 67.32v114.545l142.415-68.359V-.427z"
        fill="#fff"
      />
      <path
        opacity={0.3}
        d="M-70.5-.12L71.919-68.55 214.337-.12v.512L71.919 68.823-70.5.393V-.12z"
        fill="#fff"
      />
    </svg>
  );
}

function PieceTopRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={143}
      height={70}
      viewBox="0 0 143 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.1}
        d="M.5-112.745l142.419 67.817V69.737L.5 1.307v-114.052z"
        fill="#fff"
      />
    </svg>
  );
}

export { PieceRight, PieceTop, PieceTopRight };
