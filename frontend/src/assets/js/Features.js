import React, {Component} from "react";
import "../css/Features.css";
import Card from "../../component/card/card";
import Lock from "../icons/lock";
import Clock from "../icons/clock";
import Profit from "../icons/profit";
import Device from "../icons/device";
import Collab from "../icons/collab";
import Scale from "../icons/scale";

export default class Features extends Component {
	render() {
		return (
			<div className="features">
				<div className="features_inner">
					<Card icon={Clock} title="Time Efficient"
					      content="Save your time by selling your products in minutes and enjoy!."/>
					<Card icon={Device} title="Business On The GO"
					      content="Trade from home or where ever you want. Keep your business on the go with you."/>
					<Card icon={Collab} title="End - End Trade"
					      content="Get rid of middle man concept. Perform Sale/Purchase direct from user to user."/>
					<Card icon={Profit} title="High Profit"
					      content="Choose highest bid and get higher profit. No more commissions to middle man."/>
					<Card icon={Lock} title="Secure"
					      content="System provides a secure end-end encrypted platform for trading"/>
					<Card icon={Scale} title="Highly Scalable"
					      content="Scale your trading according to your choice through our highly scalable system."/>
				</div>
			</div>
		)
	}
}