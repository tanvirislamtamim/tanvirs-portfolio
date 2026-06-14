import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className={className}
      {...props}
    >
      <rect width="300" height="300" fill="#0a0a0c" rx="50" />
      {/* Horizontal bar */}
      <rect x="70" y="100" width="160" height="40" rx="4" fill="#ffffff" />
      {/* Vertical stem */}
      <rect x="130" y="100" width="40" height="140" rx="4" fill="#ffffff" />
    </svg>
  );
}
