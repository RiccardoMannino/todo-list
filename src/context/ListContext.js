import { createContext, useContext, useEffect, useReducer } from "react";

const ListContext = createContext();

const initialState = {
	items: JSON.parse(localStorage.getItem("items")) || [],
	done: JSON.parse(localStorage.getItem("doneItems")) || [],
};

function reducer(state, action) {

	if (!state || !Array.isArray(state.items) || !Array.isArray(state.done)) {
		return initialState;
	}
	switch (action.type) {


		case "item/add":
			return { ...state, items: [...state.items, action.payload] };

		case "item/delete":
			// Verifica se l'ID è valido
			if (action.payload === undefined || action.payload === null) {
				console.log('Invalid ID received');
				return state;
			}

			// Trova l'elemento da rimuovere
			const itemToRemove = state.items.find(item => {
				return item.id === action.payload;
			});

			if (itemToRemove) {
				// Crea il nuovo array done
				const newDone = state.done.some(item => item.id === itemToRemove.id)
					? state.done
					: [...state.done, { ...itemToRemove }];

				// Filtra l'array items
				const newItems = state.items.filter(item => {
					const shouldKeep = item.id !== action.payload;
					return shouldKeep;
				});

				return {
					...state,
					items: newItems,
					done: newDone
				};
			}

			return state;

		case "item/deleteDone":
			return {...state , done: state.done.filter((doneItem) => doneItem.id !== action.payload)};

		default:
			throw new Error("Unknown action type");
	}
}

function ListProvider({ children }) {
	const [{ items, done }, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	useEffect(() => {
		localStorage.setItem("doneItems", JSON.stringify(done));
	}, [done]);

	function handleAddItem(thing) {
		dispatch({ type: "item/add", payload: thing });
	}

	function handleDeleteDoneItem(id) {
		dispatch({ type: "item/deleteDone", payload: id });
	}

	function handleDeleteItem(id) {
		dispatch({ type: "item/delete", payload: id });
	}

	return (
		<ListContext.Provider
			value={{
				items,
				done,
				addItems: handleAddItem,
				deleteItems: handleDeleteItem,
				deleteDoneItems: handleDeleteDoneItem,
				dispatch,
			}}
		>
			{children}
		</ListContext.Provider>
	);
}

function useList() {
	const context = useContext(ListContext);
	if (context === undefined) {
		throw new Error("ListContext must be used within the context");
	}
	return context;
}

export { ListProvider, useList };
