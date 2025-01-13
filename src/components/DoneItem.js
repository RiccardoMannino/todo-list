import { Button } from "./Button";
import { useList } from "../context/ListContext";
import { Reorder } from "motion/react"

export function DoneItem() {
	const { done, deleteDoneItems , reorderDoneItems } = useList();

	return (
		<>
			<Reorder.Group axys="y" values={done}
						   className="flex h-full items-center justify-center w-full flex-col gap-3.5 text-neutral-50 font-medium"
						   onReorder={(ordine) => reorderDoneItems(ordine)}>
				<p className="text-xl">Attività svolte</p>
				<div className="flex flex-col h-full items-center justify-between ">
					<div className="flex flex-col gap-3.5 self-start">
						{done.map((doneItem) => (
							<Reorder.Item value={doneItem} key={doneItem.id} className="cursor-grab">
						<span className="line-through mr-2">
							{doneItem.description}
						</span>
								<Button className="text-neutral-50 bg-yellow-500 p-1 font-medium rounded-2xl text-sm"
										onClick={() => deleteDoneItems(doneItem.id)}>
									❌
								</Button>
							</Reorder.Item>
						))}
					</div>
				</div>
				<p className="text-neutral-50 font-medium text-xl">
					<span className="mr-1">Hai Svolto {done.length} attività!</span>
				</p>
			</Reorder.Group>


		</>
	);
}
