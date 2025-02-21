import { Button } from "./Button";
import { useList } from "../context/ListContext";
import {useState} from "react";
import { Reorder } from "motion/react"



export function Item() {
	const { items, deleteItems,  addDoing, updateItems ,removeItem , reorderItems } = useList();
	const [update, setUpdate] = useState(false);
	const [description, setDescription] = useState("");
	const [editId, setEditId] = useState(null);


	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const updateItem = {
			id: editId,
			description: description,
		}

		setUpdate(false);
		setEditId(null)

		updateItems(updateItem);
	}

	function handleTrackId(id) {
		setUpdate(!update);
		setEditId(id)
		// Trova l'elemento con l'ID corrispondente
		const itemToEdit = items.find(item => item.id === id);

		// Se l'elemento è stato trovato, aggiorna la description
		if (itemToEdit) {
			setDescription(itemToEdit.description);
		}
	}

	return (
		<>
			<Reorder.Group axis="y" values={items} onReorder={(ordine) => reorderItems(ordine)} className="flex items-center justify-between h-full w-full flex-col gap-3.5 text-neutral-50 font-medium">
				<p className="text-xl">Attività da svolgere</p>
				<div className="flex flex-col h-full items-center phone:w-full overflow-y-scroll" >
				{items.map((item) => (
					<Reorder.Item value={item} key={item.id} className="cursor-grab mb-3">
						{
							update && editId === item.id ? (
								<form className="flex gap-2.5" onSubmit={handleSubmit} >
									<input className="bg-yellow-500 accent-neutral-50 p-2 rounded-2xl text-neutral-50"
										   value={description} type="text"
										   onChange={(e) => setDescription(e.target.value)}/>
									<Button className="text-neutral-50 bg-yellow-500 p-2 font-medium rounded-2xl hover:scale-110 transition duration-500"
											type="submit">Invio
									</Button>
								</form>
							) : <span>{item.description}</span>
						}

						{!update ?
							<div className="flex gap-2 justify-center my-5">
								<Button
									className="text-neutral-50 bg-yellow-500 p-2 font-medium rounded-2xl text-sm hover:scale-110 transition duration-500"
									onClick={() =>
										deleteItems(item.id)
									}
								>
									✅
								</Button>
								<Button
									className="text-neutral-50 bg-yellow-200 p-2 font-medium rounded-2xl text-sm hover:scale-110 transition duration-500"
									onClick={() =>
										addDoing(item.id)
									}
								>
								⌛
								</Button>
								<Button className="text-neutral-50 bg-yellow-500 p-2 font-medium text-sm rounded-2xl hover:scale-110 transition duration-500 "
										onClick={() => removeItem(item.id)}>❌</Button>
								<Button className="text-neutral-50 bg-yellow-500 p-2  font-medium text-sm rounded-2xl hover:scale-110 transition duration-500 "  onClick={() => handleTrackId(item.id)}>Modifica</Button>
							</div>
							: editId !== item.id && (
							<Button className="text-neutral-50 bg-yellow-500 ml-2 p-2 font-medium text-sm rounded-2xl hover:scale-110 transition duration-500" onClick={() => handleTrackId(item.id)}>Modifica</Button>
						)
						}
					</Reorder.Item>
				))}
				</div>
				<p className="text-xl">
				<span className="mr-1">Devi svolgere {items.length} attività!</span>
				</p>
			</Reorder.Group>
		</>
	);
}
