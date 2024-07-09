export function Footer({ done, item }) {
	if (!done.length)
		return (
			<p className="footer">
				<em>Aggiungi qualcosa alla tua lista della spesa</em>
			</p>
		);

	const numLength = done.length;
	const numItemsLength = item.length + done.length;
	if (item.length === 0 && numLength >= 1)
		return (
			<p className="footer">
				<em>Hai preso tutto!!</em>
			</p>
		);
	return (
		<footer className="footer">
			<em>
				Hai preso {numLength} cose su {numItemsLength}
			</em>
		</footer>
	);
}
