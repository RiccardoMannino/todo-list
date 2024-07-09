export function Footer({ done, item }) {
	const itemLength = item.length;
	const numLength = done.length;
	const numItemsLength = itemLength + numLength;

	if (!numLength) {
		return (
			<p className="footer">
				<em>Aggiungi qualcosa alla tua lista della spesa</em>
			</p>
		);
	}

	if (itemLength === 0 && numLength >= 1) {
		return (
			<p className="footer">
				<em>Hai preso tutto!!</em>
			</p>
		);
	}

	return (
		<footer className="footer">
			<em>
				Hai preso {numLength} cose su {numItemsLength}
			</em>
		</footer>
	);
}
