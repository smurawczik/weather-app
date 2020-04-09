import * as React from "react"

const Snow = (props: React.SVGProps<SVGSVGElement>) => {
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
      <defs>
        <style>{".prefix__fil0{fill:#0e6096}"}</style>
      </defs>
      <g id="prefix__Layer_x0020_1">
        <g id="prefix___744317040">
          <circle className="prefix__fil0" cx={18.54} cy={50.96} r={1.97} />
          <circle className="prefix__fil0" cx={25.25} cy={50.96} r={1.97} />
          <circle className="prefix__fil0" cx={31.97} cy={50.96} r={1.97} />
          <circle className="prefix__fil0" cx={38.69} cy={50.96} r={1.97} />
          <circle className="prefix__fil0" cx={45.4} cy={50.96} r={1.97} />
          <path
            className="prefix__fil0"
            d="M10.37 44.56zm-.97-.28zm-1.09-.49zm-3.3-3.31zm-.62-1.47zm7.68-10.64c.1-1.49.42-2.93.91-4.28-.49 1.35-.8 2.79-.9 4.28h-.01zm19.25-13.82a7.807 7.807 0 016.51-3.47c3.96 0 7.24 2.94 7.75 6.76.48-.06.96-.09 1.45-.09 6.05 0 10.95 4.9 10.95 10.95 0 1.76-.42 3.43-1.16 4.91-.82-.44-1.76-.68-2.76-.68a10.48 10.48 0 00-12.28-8.96 15.41 15.41 0 00-10.46-9.42z"
          />
          <path
            d="M12.22 44.77c-4.53 0-8.2-3.67-8.2-8.2 0-4.48 3.59-8.12 8.06-8.2.53-8 7.19-14.33 15.32-14.33 6.57 0 12.18 4.13 14.37 9.93a10.8 10.8 0 011.89-.17c5.33 0 9.74 3.98 10.4 9.13a5.922 5.922 0 01.15 11.84c-14 .2-27.99 0-41.99 0z"
            fill="#1ab5ed"
          />
        </g>
      </g>
    </svg>
  )
}

export default Snow
