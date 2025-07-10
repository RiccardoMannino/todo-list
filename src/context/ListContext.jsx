import { createContext, useContext, useEffect, useReducer } from "react";

const ListContext = createContext();

const initialState = {
	longTerms : {
		items:  JSON.parse(localStorage.getItem("items")) || [],
		doing: JSON.parse(localStorage.getItem("doingItems")) || [],
		done: JSON.parse(localStorage.getItem("doneItems")) || [],
	},
	today : {
		todayItems:  JSON.parse(localStorage.getItem("todayItems")) || [],
		todayDoing:  JSON.parse(localStorage.getItem("todayDoingItems")) || [],
		todayDone:  JSON.parse(localStorage.getItem("todayDoneItems")) || [],
	}
};

function reducer(state, action) {

	switch (action.type) {
		// i casi con reorder servono per il drag nella lista per ordinare (qualora si volesse) gli elementi
		case "item/reorder":
			return {
				...state,
				longTerms:{
						...state.longTerms,
						items: action.payload, 
				}
			};

		case "done/reorder":
			return {
				...state,
				longTerms:{
					...state.longTerms,
						done: action.payload,
				}
			};

		case "doing/reorder":
			return {
				...state,
				longTerms: {
					...state.longTerms,
					doing: action.payload,
				}
				
			};

		case "item/add":
    console.log(state);
    return { 
        ...state, 
        longTerms: {
            ...state.longTerms, 
            items: [...state.longTerms.items, action.payload] 
        }
    };
			
		case "item/update":
			const updatedItems = state.longTerms.items.map(item => {
				if (item.id === action.payload.id) {
					// Aggiorna l'elemento
					return { ...item, ...action.payload };
				}
				// Mantieni invariato l'elemento
				return item;
			});

			return { ...state, 
				longTerms:{
					...state.longTerms,
					items: updatedItems 
				}
			};

		case "item/singleItemRemove":
			return {
				...state , 
				longTerms:{
					...state.longTerms,
					items: state.longTerms.items.filter((item) => item.id !== action.payload)
				}
				};

		case "item/delete":
			// Verifica se l'ID è valido
			const validId = action.payload ?? state
		
			// Trova l'elemento da rimuovere
			const itemToRemove = state.longTerms.items.find(item => {
				return item.id === action.payload;
			});

			if (itemToRemove && validId) {
				// Crea il nuovo array done
				const newDone = state.longTerms.done.some(item => item.id === itemToRemove.id)
					? state.longTerms.done
					: [...state.longTerms.done, { ...itemToRemove }];

				// Filtra l'array items
				const newItems = state.longTerms.items.filter(item => {
					const shouldKeep = item.id !== action.payload;
					return shouldKeep;
				});

				return {
					...state,
					longTerms:{
						...state.longTerms,
						items: newItems,
						done: newDone
					}
				};
			}
			return state;

		case "item/doing": 

		const itemDoing = state.longTerms.items.find(item => {
			return item.id === action.payload;
		});

		if (itemDoing) {
			const newDone = state.longTerms.doing.some(item => item.id === itemDoing.id)
			? state.doing
			: [...state.longTerms.doing, { ...itemDoing }];

			const newItems = state.longTerms.items.filter(item => {
				const shouldKeep = item.id !== action.payload;
				return shouldKeep;
			});

			return {
				...state,
				longTerms:{
					...state.longTerms,
					items: newItems,
					doing: newDone
				}
			
			};
		}
		return state

		case "item/finish": 	
		const itemDone = state.longTerms.doing.find(item => {
			return item.id === action.payload;
		});

		if (itemDone) {
			const newDone = state.longTerms.done.some(item => item.id === itemDone.id)
			? state.longTerms.doing
			: [...state.longTerms.done, { ...itemDone }];

			const newItems = state.longTerms.doing.filter(item => {
				const shouldKeep = item.id !== action.payload;
				return shouldKeep;
			});

			return {
				...state,
				longTerms:{
					...state.longTerms,
					doing: newItems,
					done: newDone
				}
			};
		}
		return state

		case "item/deleteDone":
			return {
				...state , 
				longTerms :{
					...state.longTerms ,
						done: state.longTerms.done.filter((doneItem) => doneItem.id !== action.payload)}
				}
			
		default:
			throw new Error("Unknown action type");
	}
}

function ListProvider({ children }) {
	const [{longTerms , today}, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(longTerms.items));
		localStorage.setItem("doingItems", JSON.stringify(longTerms.doing));
		localStorage.setItem("doneItems", JSON.stringify(longTerms.done));
	}, [longTerms , today]);


	function handleAddItem(thing) {
		dispatch({ type: "item/add", payload: thing });
	}

	function handleAddDoing(thing){
		dispatch({type : "item/doing", payload: thing})
	}

	function handleDoneDoing(thing){
		dispatch({type : "item/finish", payload: thing})
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

	function handleDoingReorderItems(ordine) {
		dispatch({ type: "doing/reorder", payload: ordine });
	}

	return (
		<ListContext.Provider
			value={{
				longTerms,
				addItems: handleAddItem,
				addDoing: handleAddDoing,
				doneDoing : handleDoneDoing,
				removeItem: handleDeleteSingleItem,
				updateItems: handleUpdateItem,
				deleteItems: handleDeleteItem,
				deleteDoneItems: handleDeleteDoneItem,
				reorderItems: handleReorderItems,
				reorderDoingItems : handleDoingReorderItems,
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
