import * as React from "react"

function Device(props) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 40"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={7}
          y1={18}
          x2={37}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00e943" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={34}
          y1={39}
          x2={34}
          y2={15}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffba3f" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
      <title>{"multiple_devices"}</title>
      <path
        d="M2 24V4a4 4 0 014-4h28a4 4 0 014 4v20a4 4 0 01-4 4H6a4 4 0 01-4-4z"
        fill="#238e1a"
      />
      <path
        d="M36 7H8a.94.94 0 00-1 1v20a.94.94 0 001 1h28a.94.94 0 001-1V8a.94.94 0 00-1-1z"
        transform="translate(-2 -4)"
        fill="url(#prefix__a)"
      />
      <path d="M36 29H4a4 4 0 01-4-4h40a4 4 0 01-4 4z" fill="#22af51" />
      <path
        d="M22 36V12a4 4 0 014-4h12a4 4 0 014 4v24a4 4 0 01-4 4H26a4 4 0 01-4-4z"
        fill="#e38939"
      />
      <path
        d="M40 15H28a.94.94 0 00-1 1v22a.94.94 0 001 1h12a.94.94 0 001-1V16a.94.94 0 00-1-1z"
        transform="translate(-2 -4)"
        fill="url(#prefix__b)"
      />
      <circle cx={32} cy={37.5} r={1.5} fill="#a6642a" />
    </svg>
  )
}

export default Device;
