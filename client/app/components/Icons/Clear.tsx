import * as React from "react"

const Clear = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height={64}
      viewBox="0 0 64 64"
      width={64}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <circle
        r={22.97}
        transform="rotate(15 -105.53 137.532) scale(.56228)"
        fill="#ffc106"
      />
      <path
        d="M32 12.4v2m-9.8.63c.76 1.32 1 1.73 1 1.73m-8.17 5.44c1.32.76 1.73 1 1.73 1M12.4 32h2m.63 9.8c1.32-.76 1.73-1 1.73-1m5.44 8.17c.76-1.32 1-1.73 1-1.73M32 51.6v-2m9.8-.63c-.76-1.32-1-1.73-1-1.73m8.17-5.44c-1.32-.76-1.73-1-1.73-1M51.6 32h-2m-.63-9.8c-1.32.76-1.73 1-1.73 1m-5.44-8.17c-.76 1.32-1 1.73-1 1.73"
        fill="none"
        stroke="#ffc106"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeMiterlimit={22.926}
      />
    </svg>
  )
}

export default Clear
