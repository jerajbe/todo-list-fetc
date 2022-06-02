import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
	return (
		<div className="box counter p-2 ps-1 fs-6">
			{` ${props.list.length} item left`}
		</div>
	);
};

Counter.proptypes = {
	list: PropTypes.string,
};
