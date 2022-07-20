import * as React from "react";

function Lock(props) {
	return (
		<svg data-name="Layer 1" viewBox="0 0 32 40" {...props}>
			<defs>
				<linearGradient
					id="a"
					x1={8}
					y1={31}
					x2={40}
					y2={31}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#fff"/>
					<stop offset={0} stopColor="#b7edc9"/>
					<stop offset={0.3} stopColor="#7add9c"/>
					<stop offset={0.61} stopColor="#43cf73"/>
					<stop offset={0.93} stopColor="#12c34e"/>
					<stop offset={1} stopColor="#00bf41"/>
				</linearGradient>
			</defs>
			<path
				d="M24 4a10 10 0 00-10 10v4h4v-4a6 6 0 0112 0v4h4v-4A10 10 0 0024 4z"
				transform="translate(-8 -4)"
				fill="#f28916"
			/>
			<path
				d="M36 44H12a4 4 0 01-4-4V22a4 4 0 014-4h24a4 4 0 014 4v18a4 4 0 01-4 4z"
				transform="translate(-8 -4)"
				fill="url(#a)"
			/>
			<circle cx={16} cy={27} r={3} fill="#05a33a"/>
		</svg>
	)
}

export default Lock;