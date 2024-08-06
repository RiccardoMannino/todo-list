import { useContext } from "react";
import { Button } from "./Button";
import { ListContext } from "./App";

export function DoneItem() {
	const { done, deleteDoneItem } = useContext(ListContext);

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
				<p>Cose prese</p>
				{done.map((doneItem) => (
					<li key={doneItem.id}>
						<span style={{ textDecoration: "line-through" }}>
							{doneItem.quantity} {doneItem.description}
						</span>
						<Button onClick={() => deleteDoneItem(doneItem.id)}>
							Elimina definitivamente ❌
						</Button>
					</li>
				))}
			</ul>
			<p>
				<span style={{ marginRight: "4px" }}>Hai preso</span>
				{done.length === 1 ? (
					<>
						{done.length}
						<span style={{ marginLeft: "3px" }}>oggetto che ti serve</span>
					</>
				) : (
					<>
						{done.length}
						<span style={{ marginLeft: "3px" }}>oggetti che ti servivano</span>
					</>
				)}
			</p>
		</>
	);
}
