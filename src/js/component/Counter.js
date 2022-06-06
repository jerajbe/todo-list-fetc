import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
	return (
		<div className="d-flex box counter justify-content-between">
			<div className="p-2 ps-1 fs-6">
				{` ${props.list.length} item left`}
			</div>
			<button
				type="button"
				className="btn btn-light button"
				onClick={(e) => {
					props.deleteTasks();
				}}>
				Delete all tasks!
			</button>
		</div>
	);
};

Counter.proptypes = {
	list: PropTypes.string,
	deleteTasks: PropTypes.func,
};
