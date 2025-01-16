import { createContext, useContext, useEffect, useReducer } from "react";

const ListContext = createContext();

const initialState = {
	items: JSON.parse(localStorage.getItem("items")) || [],
	done: JSON.parse(localStorage.getItem("doneItems")) || [],
};

function reducer(state, action) {

	switch (action.type) {
		case "item/reorder":
			return {
				...state,
				items: action.payload, // Aggiorna lo stato con il nuovo ordine degli elementi
			};

		case "done/reorder":
			return {
				...state,
				done: action.payload, // Aggiorna lo stato con il nuovo ordine degli elementi
			};

		case "item/add":
			return { ...state, items: [...state.items, action.payload] };

		case "item/update":
			const updatedItems = state.items.map(item => {
				if (item.id === action.payload.id) {
					// Aggiorna l'elemento
					return { ...item, ...action.payload };
				}
				// Mantieni invariato l'elemento
				return item;
			});

			return { ...state, items: updatedItems };

		case "item/singleItemRemove":
			return {...state , items: state.items.filter((item) => item.id !== action.payload)};

		case "item/delete":
			// Verifica se l'ID è valido
			if (action.payload === undefined || action.payload === null) {
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
		localStorage.setItem("doneItems", JSON.stringify(done));
	}, [items,done]);


	function handleAddItem(thing) {
		dispatch({ type: "item/add", payload: thing });
	}

	function handleDeleteSingleItem(id) {
		dispatch({ type: "item/singleItemRemove", payload: id });
	}

	function handleUpdateItem(thing) {
		dispatch({type: "item/update", payload: thing})
	}

	function handleDeleteDoneItem(id) {
		dispatch({ type: "item/deleteDone", payload: id });
	}

	function handleDeleteItem(id) {
		dispatch({ type: "item/delete", payload: id });
	}

	function handleReorderItems(ordine) {
		dispatch({ type: "item/reorder", payload: ordine });
	}

	function handleDoneReorderItems(ordine) {
		dispatch({ type: "done/reorder", payload: ordine });
	}


	return (
		<ListContext.Provider
			value={{
				items,
				done,
				addItems: handleAddItem,
				removeItem: handleDeleteSingleItem,
				updateItems: handleUpdateItem,
				deleteItems: handleDeleteItem,
				deleteDoneItems: handleDeleteDoneItem,
				reorderItems: handleReorderItems,
				reorderDoneItems: handleDoneReorderItems,
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
