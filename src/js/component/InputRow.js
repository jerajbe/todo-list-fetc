import React from "react";
import PropTypes from "prop-types";

export const InputRow = (props) => {
	function addNewTask(e) {
		props.setter(e.target.value);
	}
	function pressEnter(e) {
		if (e.key === "Enter") {
			props.setterList((prevList) => [...prevList, props.value]);
			props.setter("");
			e.stopPropagation();
		}
	}

	return (
		<div className="w-100">
			<input
				placeholder={props.text}
				style={{ width: "100%" }}
				value={props.value}
				onChange={addNewTask}
				onKeyUp={pressEnter}></input>
		</div>
	);
};

InputRow.propTypes = {
	text: PropTypes.string,
	value: PropTypes.string,
	setter: PropTypes.func,
	setterList: PropTypes.func,
};
