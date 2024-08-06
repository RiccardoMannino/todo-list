import { createContext, useContext, useState, useEffect } from "react";
import "../index.css";
import { Footer } from "./Footer";
import { FormList } from "./FormList";
import { ListDone } from "./ListDone";
import { ListItem } from "./ListItem";
import { Header } from "./Header";

// TODO: Sistemazione stile di tutti i componenti

export const ListContext = createContext();

export default function App() {
	const [items, setItems] = useState(() => {
		const Items = JSON.parse(localStorage.getItem("items"));
		return Items || [];
	});
	const [done, setDone] = useState(() => {
		const doneItems = JSON.parse(localStorage.getItem("doneItems"));
		return doneItems || [];
	});

	function handleAddItem(thing) {
		setItems((items) => [...items, thing]);
	}

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	useEffect(() => {
		localStorage.setItem("doneItems", JSON.stringify(done));
	}, [done]);

	// funzione che elimina un elemento dalla lista cose da prendere alla lista cose prese
	const handleDeleteItem = (id) => {
		setItems((currentItems) => {
			// costante che trova all'interno dell'array items l'elemento con id che sia uguale all'argomento della funzione (id)
			const itemToRemove = currentItems.find((item) => item.id === id);

			if (itemToRemove) {
				// React non riconosce i set come struttura dati da processare  ma solo oggetti e array quindi per evitare doppioni visto che lo stato è asincrono utilizziamo questa costante e la convertiamo in array
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
		<ListContext.Provider
			value={{
				items,
				done,
				addItems: handleAddItem,
				deleteItems: handleDeleteItem,
				deleteDoneItem: handleDeleteDoneItem,
			}}
		>
			<div className="app">
				<Header />
				<FormList />
				<div style={{ display: "flex" }}>
					<ListItem />
					<ListDone />
				</div>
				<Footer />
			</div>
		</ListContext.Provider>
	);
}
