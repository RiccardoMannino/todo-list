import { useList } from "../context/ListContext";

export function Footer() {
	const { longTerms } = useList();

	const itemLength = longTerms.items.length;
	const doneLength = longTerms.done.length;
	const doingLength = longTerms.doing.length
	const numItemsLength = itemLength + doneLength + doingLength;

	if (itemLength === 0 && numItemsLength !== 0) {
		return (
			<footer
				className="flex py-8 phone:text-2xl phone:text-center self-center items-center text-yellow-500 font-medium text-3xl">
					<em>Hai Svolto tutte le attività!!</em>
			</footer>
		);
	}

	if (itemLength === 0 && doneLength === 0) {
		return (
			<footer
				className="flex py-8 phone:text-2xl phone:text-center self-center items-center text-yellow-500 font-medium text-3xl">
			<em>Aggiungi qualcosa alla tua lista delle cose da
				fare</em>
			</footer>
		);
	}


	return (
		<footer
			className="flex py-8 phone:text-2xl phone:text-center self-center items-center h-96 text-yellow-500 font-medium text-3xl">
			<em>
			Hai svolto {doneLength} attività su {numItemsLength}
			</em>
		</footer>
	);
}
