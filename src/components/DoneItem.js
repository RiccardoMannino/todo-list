import { Button } from "./Button";
import { useList } from "../context/ListContext";

export function DoneItem() {
	const { done, deleteDoneItems } = useList();

	return (
		<>
			<ul
				className="flex h-full items-center justify-center w-full flex-col gap-3.5 text-neutral-50 font-medium"
			>
				<p>Cose fatte</p>
				<div className="flex flex-col h-full items-center justify-between ">
					<div className="flex flex-col gap-3.5 self-start">{done.map((doneItem) => (
						<li key={doneItem.id}>
						<span className="line-through mr-2">
							{doneItem.description}
						</span>
							<Button className="text-neutral-50 bg-yellow-500 p-1 font-medium rounded-2xl text-sm"
									onClick={() => deleteDoneItems(doneItem.id)}>
								❌
							</Button>
						</li>
					))}
					</div>


				</div>
			</ul>
			<p className="text-neutral-50 font-medium text-xl">
				<span className="mr-1">Hai fatto</span>
				{done.length === 1 ? (
					<>
						{done.length}
						<span className="ml-1">cosa</span>
					</>
				) : (
					<>
						{done.length > 1 ||
							(done.length === 0 && (
								<span className="ml-1">{done.length} cose!</span>
							))}
					</>
				)}
			</p>
		</>
	);
}
