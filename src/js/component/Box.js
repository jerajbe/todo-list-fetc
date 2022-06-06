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

	const editListOfTasks = async (newList) => {
		const response = await fetch(
			"http://assets.breatheco.de/apis/fake/todos/user/jesus",
			{
				method: "PUT",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(newList),
			}
		);
		console.log(response);
		return response;
	};

	const deleteListOfTasks = async () => {
		const response = await fetch(
			"http://assets.breatheco.de/apis/fake/todos/user/jesus",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		setListOfTasks([]);
	};

	useEffect(() => {
		getListOfTasks();
	}, []);

	return (
		<div className="d-flex flex-column bigBox">
			<InputRow
				text="What needs to be done"
				value={newTask}
				list={listOfTasks}
				setter={setNewTask}
				setterList={setListOfTasks}
				editList={editListOfTasks}
				getList={getListOfTasks}
			/>
			{listOfTasks.length === 0 ? (
				<p className="box mb-0 p-2 ps-4 fs-4">{`No tasks... add a task!`}</p>
			) : (
				<List
					list={listOfTasks}
					setterList={setListOfTasks}
					editList={editListOfTasks}
					getList={getListOfTasks}
				/>
			)}
			<Counter list={listOfTasks} deleteTasks={deleteListOfTasks} />
		</div>
	);
};
