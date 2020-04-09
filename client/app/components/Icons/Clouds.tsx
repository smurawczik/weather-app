import * as React from "react"

const Clouds = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path
        d="M10.37 48.6c-.2-.05-.4-.1-.59-.16.19.06.39.11.59.16zm-.97-.29zm-1.09-.49zm-3.3-3.3zm-.62-1.48zm7.68-10.63c.1-1.5.42-2.94.91-4.28-.49 1.34-.8 2.78-.9 4.28h-.01zm19.25-13.83a7.832 7.832 0 016.51-3.47c3.96 0 7.24 2.94 7.75 6.76.48-.06.96-.09 1.45-.09 6.05 0 10.95 4.9 10.95 10.95 0 1.77-.42 3.43-1.16 4.91-.82-.43-1.76-.68-2.76-.68A10.48 10.48 0 0041.78 28a15.41 15.41 0 00-10.46-9.42z"
        fill="#0e6096"
      />
      <path
        d="M12.22 48.81c-4.53 0-8.2-3.67-8.2-8.2 0-4.48 3.59-8.13 8.06-8.2.53-8.01 7.19-14.33 15.32-14.33 6.57 0 12.18 4.12 14.37 9.92a10.8 10.8 0 011.89-.17c5.33 0 9.74 3.98 10.4 9.13a5.92 5.92 0 015.92 5.92c0 3.23-2.57 5.85-5.77 5.92-14 .2-27.99.01-41.99.01z"
        fill="#1ab5ed"
      />
    </svg>
  )
}

export default Clouds
