export default function Logo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="42" r="35" fill="#1a3a5c" />
      <circle cx="50" cy="42" r="27" fill="white" />
      <circle cx="50" cy="42" r="22" fill="#4dbfbf" />
      <path
        d="M38 52 L46 32 L50 44 L54 36 L62 52"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="38" y="74" width="24" height="5" rx="2" fill="#1a3a5c" />
      <rect x="40" y="81" width="20" height="4" rx="2" fill="#1a3a5c" />
      <rect x="42" y="87" width="16" height="4" rx="2" fill="#1a3a5c" />
      <path d="M35 77 Q50 72 65 77" stroke="#1a3a5c" strokeWidth="2" fill="none" />
    </svg>
  )
}
