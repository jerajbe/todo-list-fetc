import React from "react";
import PropTypes from "prop-types";

export const InputRow = (props) => {
	function addNewTask(e) {
		props.setter({
			label: e.target.value,
			done: false,
		});
	}

	async function pressEnter(e) {
		if (e.key === "Enter") {
			console.log("se presionó Enter");
			const newList = [...props.list, props.value];
			console.log(newList);
			const editResponse = await props.editList(newList);
			if (!editResponse.ok) {
				alert("Error no pudimos agregar la tarea");
				return;
			}
			props.setter({
				label: "",
				done: false,
			});
		}
		props.getList();
	}

	return (
		<div className="w-100">
			<input
				className="p-2 ps-5 fs-5"
				placeholder={props.text}
				style={{ width: "100%" }}
				value={props.value.label}
				onChange={addNewTask}
				onKeyUp={pressEnter}></input>
		</div>
	);
};

InputRow.propTypes = {
	text: PropTypes.string,
	value: PropTypes.any,
	setter: PropTypes.func,
	setterList: PropTypes.func,
	editList: PropTypes.func,
	getList: PropTypes.func,
	list: PropTypes.any,
};
