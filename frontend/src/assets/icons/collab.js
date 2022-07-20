import * as React from "react"

function Collab(props) {
  return (
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      {...props}
    >
      <defs>
        <style>
          {".prefix__cls-3{fill:#ffa726}.prefix__cls-4{fill:#607d8b}"}
        </style>
      </defs>
      <title>{"collaboration"}</title>
      <path
        d="M25 22h13l6 6V11a4 4 0 00-4-4H25a4 4 0 00-4 4v7a4 4 0 004 4z"
        transform="translate(-4 -4)"
        fill="#2aaa00"
      />
      <path
        d="M23 19H10l-6 6V8a4 4 0 014-4h15a4 4 0 014 4v7a4 4 0 01-4 4z"
        transform="translate(-4 -4)"
        fill="#67d825"
      />
      <circle className="prefix__cls-3" cx={8} cy={27} r={5} />
      <circle className="prefix__cls-3" cx={32} cy={27} r={5} />
      <path
        className="prefix__cls-4"
        d="M20 42s-2.2-4-8-4-8 4-8 4v2h16zM44 42s-2.2-4-8-4-8 4-8 4v2h16z"
        transform="translate(-4 -4)"
      />
    </svg>
  )
}

export default Collab
