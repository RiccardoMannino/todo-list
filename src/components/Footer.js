import { useList } from "../context/ListContext";

export function Footer() {
	const { items, done } = useList();

	const itemLength = items.length;
	const numLength = done?.length;
	const numItemsLength = itemLength + numLength;

	if (!numLength) {
		return (
			<p className="footer">
				<em>Aggiungi qualcosa alla tua lista delle cose da fare</em>
			</p>
		);
	}

	if (itemLength === 0 && numLength >= 1) {
		return (
			<p className="footer">
				<em>Hai fatto tutto!!</em>
			</p>
		);
	}

	return (
		<footer className="footer">
			<em>
				Hai fatto {numLength} cose su {numItemsLength}
			</em>
		</footer>
	);
}
