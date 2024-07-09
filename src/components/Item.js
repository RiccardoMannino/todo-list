import { Button } from "./Button";

export function Item({ item, onDeleteItem }) {
	return (
		<li>
			<span>
				{item.quantity} {item.description}
			</span>
			<Button onClick={() => onDeleteItem(item.id)}>Segna come preso ✅</Button>
		</li>
	);
}
