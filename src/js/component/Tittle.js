import React from "react";
import PropTypes from "prop-types";

export const Tittle = (props) => {
	return (
		<div className="d-flex justify-content-center align-middle">
			<h1 className="tittle">{props.text}</h1>
		</div>
	);
};

Tittle.propTypes = {
	text: PropTypes.string,
};
