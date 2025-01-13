import { Button } from "./Button";
import { useList } from "../context/ListContext";
import {useState} from "react";



export function Item() {
	const { items, deleteItems , updateItems ,removeItem } = useList();
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
			<ul
				className="flex items-center justify-between h-full w-full flex-col gap-3.5 text-neutral-50 font-medium"
			>
				<p>Cose da Fare</p>
				<div className="flex flex-col h-full items-center" >

				{items.map((item) => (
					<li key={item.id}>
						{
							update && editId === item.id ? (
								<form className="flex gap-2.5" onSubmit={handleSubmit} >
									<input className="bg-yellow-500 accent-neutral-50 p-2 rounded-2xl text-neutral-50"
										   value={description} type="text"
										   onChange={(e) => setDescription(e.target.value)}/>
									<Button className="text-neutral-50 bg-yellow-500 p-2 font-medium rounded-2xl"
											type="submit">Invio</Button>
								</form>
							) : <span >{item.description}</span>

						}

						{!update ?
							<div className="flex gap-2 justify-center my-5">
								<Button
									className="text-neutral-50 bg-yellow-500 p-2 font-medium rounded-2xl text-sm"
									onClick={() =>
										deleteItems(item.id)
									}
								>
									✅
								</Button>
								<Button className="text-neutral-50 bg-yellow-500 p-2 font-medium text-sm rounded-2xl"
										onClick={() => removeItem(item.id)}>❌</Button>
								<Button className="text-neutral-50 bg-yellow-500 p-2  font-medium text-sm rounded-2xl" onClick={() => handleTrackId(item.id)}>Modifica</Button>
							</div>
							: editId !== item.id && (
							<Button className="text-neutral-50 bg-yellow-500 ml-2 p-2 font-medium text-sm rounded-2xl" onClick={() => handleTrackId(item.id)}>Modifica</Button>
						)
						}
					</li>
				))}
				</div>
				<p className="text-xl">
				<span className="mr-1 " >Devi fare</span>
				{items.length === 1 ? (
					<>
						{items.length}
						<span className="ml-1">cosa!</span>
					</>
				) : (
					<>
						{items.length}
						<span className="ml-1">cose!</span>
					</>
				)}
			</p>
			</ul>

		</>
	);
}
