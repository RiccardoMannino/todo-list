import { Item } from "./Item";

export function ListItem() {
	return (
		<div
			className="flex max-h-96 phone:max-h-56 md:min-h-[40rem] justify-between text-center w-full flex-col"
		>
			<Item />
		</div>
	);
}
