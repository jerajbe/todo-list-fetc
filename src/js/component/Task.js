import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	async function deleteTask(e) {
		const shortenList = props.list.filter((task, i) => {
			if (props.id !== i) return true;
		});
		const editResponse = await props.editList(shortenList);
		if (!editResponse.ok) {
			alert("Problema, no se pudo borrar la tarea!");
			return;
		}
		props.getList();
	}
	return (
		<li className="d-flex justify-content-between doIt box p-2 ps-5 fs-5">
			{props.task.label}
			<span className="delete pe-2" onClick={deleteTask}>
				x
			</span>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.any,
	setterList: PropTypes.func,
	list: PropTypes.array,
	id: PropTypes.number,
	editList: PropTypes.func,
};
