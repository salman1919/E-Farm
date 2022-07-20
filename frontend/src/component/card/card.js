import {useState} from "react";
import "./card.css";


function Card(prop) {


	return (
		<div className="card_tile">
			{useState(prop.icon)}
			<div>
				<h3>{useState(prop.title)}</h3>
				<h6>{useState(prop.content)}</h6>
			</div>
		</div>
	);
}

export default Card;