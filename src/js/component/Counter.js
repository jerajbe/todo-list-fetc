import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
	return <div className="box">{props.list.length} item left</div>;
};

Counter.proptypes = {
	list: PropTypes.string,
};
