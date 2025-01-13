import { useList } from "../context/ListContext";

export function Footer() {
	const { items, done } = useList();

	const itemLength = items.length;
	const doneLength = done.length;
	const numItemsLength = itemLength + doneLength;

	if (!itemLength || !doneLength) {
		return (
			<footer className="flex py-8 phone:text-2xl phone:text-center self-center items-center text-yellow-500 font-medium text-3xl" >
				<em>Aggiungi qualcosa alla tua lista delle cose da fare</em>
			</footer>
		);
	}

	if (itemLength === 0 && doneLength >= 1) {
		return (
			<footer className="flex py-8 phone:text-2xl phone:text-center self-center items-center text-yellow-500 font-medium text-3xl" >
				<em>Hai fatto tutto!!</em>
			</footer>
		);
	}

	return (
		<footer className="flex  py-8 phone:text-2xl phone:text-center self-center items-center h-96 text-yellow-500 font-medium text-3xl">
			<em>
				Hai svolto {doneLength} attività su {numItemsLength}
			</em>
		</footer>
	);
}
