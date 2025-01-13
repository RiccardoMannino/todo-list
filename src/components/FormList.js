import { useState } from "react";
import { Button } from "./Button";
import { useList } from "../context/ListContext";

export function FormList() {
	const { addItems } = useList();

	const [description, setDescription] = useState("");


	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const id = crypto.randomUUID();

		const newItem = {
			id: id,
			description: description,
		};

		addItems(newItem);

		setDescription("");

	}

	return (
		<div >
			<form className="phone:flex-col flex justify-center items-center gap-4 my-4 mx-4" onSubmit={handleSubmit}>
				<label className="text-neutral-50 font-medium text-wrap">Inserisci la tua attività da svolgere</label>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="bg-yellow-500 accent-neutral-50 p-2 rounded-2xl text-neutral-50"
				/>
				<Button className="text-neutral-50 bg-yellow-500 p-2 font-medium rounded-2xl">Aggiungi</Button>
			</form>
		</div>
	);
}
