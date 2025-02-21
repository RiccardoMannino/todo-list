import { DoneItem } from "./DoneItem";

export function ListDone() {
	return (
		<div
			className="flex phone:mt-8 justify-between text-center w-full max-h-96 phone:max-h-56 flex-col "
		>
			<DoneItem />
		</div>
	);
}
