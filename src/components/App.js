import { useState } from "react";
import "../index.css";
import { Footer } from "./Footer";
import { FormList } from "./FormList";
import { ListDone } from "./ListDone";
import { ListItem } from "./ListItem";
import { Header } from "./Header";

export default function App() {
	const [items, setItems] = useState([]);
	const [done, setDone] = useState([]);

	function handleAddItem(thing) {
		setItems((item) => [...item, thing]);
	}

	//mappiamo l'array dentro lo stato items e verifichiamo se l'id dell'elemento è uguale all'id dell'argomento della funzione e se lo è richiamiamo tutto l'array modificando il valore packed
	// function handleToggleItem(id) {
	// 	setItems((items) =>
	// 		items.map((item) =>
	// 			item.id === id ? { ...item, packed: !item.packed } : item
	// 		)
	// 	);
	// }

	// funzione che elimina un elemento dalla lista cose da prendere alla lista cose prese
	const handleDeleteItem = (id) => {
		setItems((currentItems) => {
			// costante che trova all'interno dell'array items l'elemento con id che sia uguale all'argomento della funzione (id)
			const itemToRemove = currentItems.find((item) => item.id === id);

			if (itemToRemove) {
				// React non riconosce i set come struttura dati da processare  ma solo oggetti
				// e array quindi per evitare doppioni visto che lo stato è asincrono utilizziamo questa constante e la convertiamo in array
				setDone((prevDone) => {
					const updatedDone = new Set(
						prevDone.map((item) => item.id).includes(itemToRemove.id)
							? prevDone
							: [...prevDone, { ...itemToRemove, packed: !itemToRemove.packed }]
					);
					return Array.from(updatedDone);
				});
			}
			// questo return rimuove dalla lista l'elemento cliccato
			return currentItems.filter((item) => item.id !== id);
		});
	};

	function handleDeleteDoneItem(id) {
		setDone((done) => done.filter((doneItem) => doneItem.id !== id));
	}

	return (
		<div className="app">
			<Header />
			<FormList onAddThings={handleAddItem} />
			<div style={{ display: "flex" }}>
				<ListItem items={items} onDeleteItem={handleDeleteItem} />
				<ListDone done={done} onDeleteListDoneItem={handleDeleteDoneItem} />
			</div>
			<Footer done={done} item={items} />
		</div>
	);
}
