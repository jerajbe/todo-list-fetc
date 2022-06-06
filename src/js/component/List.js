import React from "react";
import { Task } from "./Task";
import PropTypes from "prop-types";

export const List = (props) => {
	return (
		<div>
			{props.list.map((task, index) => {
				return (
					<Task
						task={task}
						key={index}
						id={index}
						setterList={props.setterList}
						list={props.list}
						editList={props.editList}
						getList={props.getList}
					/>
				);
			})}
		</div>
	);
};

List.propTypes = {
	setterList: PropTypes.func,
	list: PropTypes.any,
	editList: PropTypes.func,
	getList: PropTypes.func,
};
