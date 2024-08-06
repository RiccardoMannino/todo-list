import { useContext } from "react";
import { Button } from "./Button";
import { ListContext } from "./App";

export function Item() {
	const { items, deleteItems } = useContext(ListContext);

	return (
		<>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<p>Cose da prendere</p>
				{items.map((item) => (
					<li>
						<span>
							{item.quantity} {item.description}
						</span>
						<Button onClick={() => deleteItems(item.id)}>
							Segna come preso ✅
						</Button>
					</li>
				))}
			</ul>
			<p>
				<span style={{ marginRight: "4px" }}>Devi prendere</span>
				{items.length === 1 ? (
					<>
						{items.length}
						<span style={{ marginLeft: "3px" }}>oggetto</span>
					</>
				) : (
					<>
						{items.length} <span style={{ marginLeft: "3px" }}>oggetti</span>
					</>
				)}
			</p>
		</>
	);
}
