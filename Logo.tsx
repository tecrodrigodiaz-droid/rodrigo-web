export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 34 38"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Rodrigo M. Díaz Electrotecnia"
    >
      {/* Cuerpo exterior de la bombilla — azul marino */}
      <circle cx="17" cy="14" r="13" fill="#1a3a6e" />
      {/* Círculo interior turquesa */}
      <circle cx="17" cy="14" r="9" fill="#3dbfb8" />
      {/* M + rayo blanco */}
      <polyline
        points="11,18 13.5,9 17,14.5 20.5,9 23,18"
        fill="none"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base de la bombilla */}
      <rect x="13"   y="27"  width="8"  height="3"   rx="1.5" fill="#1a3a6e" />
      <rect x="12"   y="31"  width="10" height="2.5" rx="1.2" fill="#162d58" />
      <rect x="13.5" y="34"  width="7"  height="2"   rx="1"   fill="#1a3a6e" />
      {/* Conector inferior */}
      <rect x="14" y="26" width="6" height="2" fill="#0f2035" />
    </svg>
  )
}
