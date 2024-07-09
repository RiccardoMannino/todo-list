import { Button } from "./Button";

export function DoneItem({ doneItem, onDeleteListDoneItem }) {
	return (
		<li>
			<span style={{ textDecoration: "line-through" }}>
				{doneItem.quantity} {doneItem.description}
			</span>
			<Button onClick={() => onDeleteListDoneItem(doneItem.id)}>
				Elimina definitivamente ❌
			</Button>
		</li>
	);
}
