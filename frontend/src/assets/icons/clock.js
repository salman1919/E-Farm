import * as React from "react"

function Clock(props) {
	return (
		<svg data-name="Layer 1" viewBox="0 0 40 40" {...props}>
			<defs>
				<linearGradient
					id="a"
					y1={20}
					x2={40}
					y2={20}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#fff"/>
					<stop offset={0} stopColor="#cef7de"/>
					<stop offset={0} stopColor="#7ee9a9"/>
					<stop offset={0.26} stopColor="#7be9a7"/>
					<stop offset={0.51} stopColor="#55e276"/>
					<stop offset={0.77} stopColor="#41df5d"/>
					<stop offset={1} stopColor="#10d61d"/>
				</linearGradient>
				<linearGradient
					id="b"
					x1={4}
					y1={20}
					x2={36}
					y2={20}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#ffab15"/>
					<stop offset={1} stopColor="#cef7de"/>
					<stop offset={1} stopColor="#fff"/>
				</linearGradient>
			</defs>
			<circle cx={20} cy={20} r={20} fill="url(#a)"/>
			<circle cx={20} cy={20} r={16} fill="url(#b)"/>
			<path fill="#009610" d="M19 7H21V20H19z"/>
			<path
				transform="rotate(-45 20.394 30.043)"
				fill="#0ca400"
				d="M26.07 22.62H28.37V31.82H26.07z"
			/>
			<circle cx={20} cy={20} r={2}/>
			<circle cx={20} cy={20} r={1} fill="#ea8b18"/>
		</svg>
	)
}

export default Clock
