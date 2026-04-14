import { Item } from "./Item";
import List from "./List";

export function ListItem() {
	return (
		<List
			className="flex max-h-96 phone:max-h-56 md:min-h-[40rem] justify-between text-center w-full flex-col"
		>
			<Item />
		</List>
	);
}
