import "./Tile.css";

function Tile(props) {

	const select = (event) => {
		alert(event.currentTarget.id);
	}


	return (
		<>
			<div className="main_tile">
				<div className="tile_heading">
					<h6>Name</h6>
					<h6>Quantity</h6>
					<h6>Price</h6>
					<h6>Expiry</h6>
				</div>
				{props.dict ? (
					<>
						{props.dict.map(list =>
							<>
								<div onClick={select} id={list.id} className="tile">
									<h6>{list.name}</h6>
									<h6>{list.price}</h6>
									<h6>{list.quantity}</h6>
									<h6>{list.expiry}</h6>
								</div>
								<hr/>
							</>
						)}
					</>
				) : null}
			</div>

		</>
	);
}

export default Tile;