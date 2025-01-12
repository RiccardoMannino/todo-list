import { Button } from "./Button";
import { useList } from "../context/ListContext";
import {useState} from "react";

const formStyle = {
	display: "flex",
	gap: "10px",
}

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
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
					overflowY: "scroll",
				}}
			>
				<p>Cose da Fare</p>
				{items.map((item) => (
					<li key={item.id}>
						{
						update && editId === item.id ? (
								<form onSubmit={handleSubmit} style={formStyle} >
									<input  value={description} type="text" onChange={(e) => setDescription(e.target.value)} />
									<button type="submit">Submit</button>
								</form>
							): <span>{item.description}</span>

						}

						<Button
							onClick={() =>
								deleteItems(item.id)
							}
						>
							✅
						</Button>
						<Button onClick={() => removeItem(item.id)}>❌</Button>
						<Button onClick={() => handleTrackId(item.id)}>Modifica</Button>
					</li>
				))}
			</ul>
			<p>
				<span style={{ marginRight: "4px" }}>Devi fare</span>
				{items.length === 1 ? (
					<>
						{items.length}
						<span style={{ marginLeft: "3px" }}>cosa</span>
					</>
				) : (
					<>
						{items.length}
						<span style={{ marginLeft: "3px" }}>cose</span>
					</>
				)}
			</p>
		</>
	);
}
