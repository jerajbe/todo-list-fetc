import React, { useState, useEffect } from "react";
import { Counter } from "./Counter";
import { InputRow } from "./InputRow";
import { List } from "./List";

export const Box = () => {
	const [newTask, setNewTask] = useState({
		label: "",
		done: "",
	});
	const [listOfTasks, setListOfTasks] = useState([]);

	const getListOfTasks = async () => {
		const response = await fetch(
			"http://assets.breatheco.de/apis/fake/todos/user/jesus"
		);
		const body = await response.json();
		if (!response.ok) {
			createUserListOfTasks();
			return;
		}
		setListOfTasks(body);
	};

	const createUserListOfTasks = async () => {
		const response = await fetch(
			"http://assets.breatheco.de/apis/fake/todos/user/jesus",
			{
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify([]),
			}
		);
		const body = await response.json();
		if (!response.ok) {
			alert(`Fallo el GET y el POST ${response.status}: ${response.msg}`);
		}
		getListOfTasks();
	};

	const editListOfTasks = async () => {
		const response = await fetch(
			"http://assets.breatheco.de/apis/fake/todos/user/jesus",
			{
				method: "PUT",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(listOfTasks),
			}
		);
		return response;
	};

	useEffect(() => {
		getListOfTasks();
	}, []);

	return (
		<div className="d-flex flex-column bigBox">
			<InputRow
				text="What needs to be done"
				value={newTask}
				setter={setNewTask}
				setterList={setListOfTasks}
			/>
			{listOfTasks.length === 0 ? (
				<p className="box mb-0 p-2 ps-4 fs-4">{`No tasks... add a task!`}</p>
			) : (
				<List list={listOfTasks} setterList={setListOfTasks} />
			)}
			<Counter list={listOfTasks} />
		</div>
	);
};
