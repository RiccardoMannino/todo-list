import { useState } from "react";
import { Button } from "./Button";

export function FormList({ onAddThings }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const id = crypto.randomUUID();

		const newItem = {
			description: description,
			quantity: quantity,
			packed: false,
			id: id,
		};
		//console.log(newItem);

		// inseriamo newItem all'interno della props per elevare lo stato
		onAddThings(newItem);

		setDescription("");
		setQuantity(1);
	}

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<label>Inserisci quello che ti serve</label>
				<select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
					{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
						<option value={num} key={num}>
							{num}
						</option>
					))}
				</select>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button>Aggiungi</Button>
			</form>
		</div>
	);
}
