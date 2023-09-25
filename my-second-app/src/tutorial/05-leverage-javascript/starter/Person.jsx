import avatar from "../../../assets/default-avatar.svg";
import React from "react";

export function Person({ name, nickName, images }) {
	const img = images?.[0]?.small?.url ?? avatar;
	return (
		<li>
			<h3>{name}</h3>
			<h5>Nickname: {nickName}</h5>
			<img src={img} alt={name} style={{ width: "50px" }} />
		</li>
	);
}
