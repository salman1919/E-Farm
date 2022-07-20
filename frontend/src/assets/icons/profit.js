import * as React from "react"

function Profit(props) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 36"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={0.48}
          y1={11.25}
          x2={31.12}
          y2={11.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.28} stopColor="#ffd395" />
          <stop offset={0.57} stopColor="#ffc36e" />
          <stop offset={1} stopColor="#ff9500" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={24.8}
          y1={4.5}
          x2={32}
          y2={4.5}
          xlinkHref="#prefix__a"
        />
      </defs>
      <title>{"bullish"}</title>
      <path fill="#287f51" d="M28.8 13H32v23h-3.2z" />
      <path fill="#0cc470" d="M24 20h3.2v16H24z" />
      <path fill="#0cc44e" d="M19.2 15h3.2v21h-3.2z" />
      <path fill="#14f414" d="M14.4 21h3.2v15h-3.2z" />
      <path fill="#0ac60a" d="M9.6 24h3.2v12H9.6z" />
      <path fill="#098c09" d="M4.8 22H8v14H4.8z" />
      <path fill="#096809" d="M0 26h3.2v10H0z" />
      <path
        fill="url(#prefix__a)"
        d="M28.88 1.1L24 7.2l-3.2-4-8 10-4-5L.48 18.6l2.24 2.8 6.08-7.6 4 5 8-10 3.2 4 7.12-8.9-2.24-2.8z"
      />
      <path fill="url(#prefix__b)" d="M32 0h-7.2L32 9V0z" />
    </svg>
  )
}

export default Profit;
