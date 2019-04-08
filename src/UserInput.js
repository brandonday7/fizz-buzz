import React from "react"

const UserInput = ({ onClick, type }) => (
	<div className="input-box" onClick={onClick}>
		<h3>{type === "increment" ? "+" : "-"}</h3>
	</div>

)

export default UserInput