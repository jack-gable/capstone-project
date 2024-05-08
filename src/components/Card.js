import React from "react";
import "../css/Card.css";
import bikeIcon from "../icons_assets/bike.svg";

function Card({ image, title, price, desc }) {
	return (
		<div className="card">
			<img src={image} alt="" />
			<div>
				<p>{title}</p>
				<span>${price}</span>
			</div>
			<p>{desc}</p>
			<button>
				Order a delivery <img src={bikeIcon} alt="" />
			</button>
		</div>
	);
}

export default Card;
