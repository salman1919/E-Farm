import * as React from "react"

function Scale(props) {
	return (
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 38 38"
			{...props}
		>
			<defs>
				<linearGradient
					id="prefix__a"
					x1={5}
					y1={24}
					x2={43}
					y2={24}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#fff"/>
					<stop offset={0} stopColor="#c1f4bd"/>
					<stop offset={0.27} stopColor="#98ec91"/>
					<stop offset={0.56} stopColor="#5de253"/>
					<stop offset={0.9} stopColor="#3bdc2f"/>
					<stop offset={1} stopColor="#0fd400"/>
				</linearGradient>
			</defs>
			<title>{"automatic"}</title>
			<path
				d="M39 43H9a4 4 0 01-4-4V9a4 4 0 014-4h30a4 4 0 014 4v30a4 4 0 01-4 4z"
				transform="translate(-5 -5)"
				fill="url(#prefix__a)"
			/>
			<path
				d="M28.6 20.4a6.15 6.15 0 00.1-1.4 6.6 6.6 0 00-.1-1.4l2.8-2a.65.65 0 00.2-.9l-2.7-4.6a.67.67 0 00-.8-.3L25 11.3a9.46 9.46 0 00-2.4-1.4l-.3-3.4a.65.65 0 00-.6-.6h-5.3a.65.65 0 00-.6.6l-.4 3.5a8.37 8.37 0 00-2.4 1.4L9.9 10a.63.63 0 00-.8.3l-2.7 4.6a.65.65 0 00.2.9l2.8 2a6.15 6.15 0 00-.1 1.4 6.6 6.6 0 00.1 1.4l-2.8 2a.65.65 0 00-.2.9l2.7 4.6a.67.67 0 00.8.3L13 27a9.46 9.46 0 002.4 1.4l.3 3.4a.65.65 0 00.6.6h5.3a.65.65 0 00.6-.6l.3-3.4a8.37 8.37 0 002.4-1.4l3.1 1.4a.63.63 0 00.8-.3l2.7-4.6a.65.65 0 00-.2-.9zM19 24a5 5 0 115-5 5 5 0 01-5 5z"
				fill="#ffb400"
			/>
		</svg>
	)
}

export default Scale;
