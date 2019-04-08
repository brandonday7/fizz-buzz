import React from "react"

const UserInput = ({ onClick, type }) => (
	<p onClick={onClick}>{type === "increment" ? "+" : "-"}</p>
)

export default UserInput