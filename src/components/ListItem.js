import { Item } from "./Item";

export function ListItem() {
	return (
		<div
			className="flex justify-between text-center w-full flex-col"
		>
			<Item />
		</div>
	);
}
