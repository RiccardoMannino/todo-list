import { useList } from "../context/ListContext";

export function Footer() {
	const { items, done } = useList();

	const itemLength = items.length;
	const numLength = done?.length;
	const numItemsLength = itemLength + numLength;

	if (!numLength) {
		return (
			<footer className="flex py-8 self-center items-center text-yellow-500 font-medium text-3xl" >
				<em>Aggiungi qualcosa alla tua lista delle cose da fare</em>
			</footer>
		);
	}

	if (itemLength === 0 && numLength >= 1) {
		return (
			<footer className="flex py-8 self-center items-center text-yellow-500 font-medium text-3xl" >
				<em>Hai fatto tutto!!</em>
			</footer>
		);
	}

	return (
		<footer className="flex py-8 self-center items-center h-96 text-yellow-500 font-medium text-3xl">
			<em>
				Hai fatto {numLength} cose su {numItemsLength}
			</em>
		</footer>
	);
}
