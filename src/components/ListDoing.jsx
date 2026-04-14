import { DoingItem } from "./DoingItem";
import List from "./List";

export function ListDoing() {
	return (
		<List
			className="flex max-h-96 phone:mt-8 justify-between text-center w-full  phone:max-h-56 flex-col md:min-h-[40rem]"
		>
			<DoingItem />
		</List>
	);
}