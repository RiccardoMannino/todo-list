import { Button } from "./Button";
import { useList } from "../context/ListContext";
import { Reorder } from "motion/react"

export function DoingItem(){
  const {doing , reorderDoingItems , doneDoing} = useList()


  return ( <Reorder.Group values={doing} className="flex h-full items-center justify-center w-full flex-col gap-3.5 text-neutral-50 font-medium" onReorder={(ordine) =>reorderDoingItems(ordine)}>
<p className="text-xl">Attività in corso</p>
<div className="flex phone:w-full flex-col h-full items-center justify-between overflow-y-scroll">
<div className="flex flex-col gap-3.5 phone:self-center self-start">
				{doing.map((doingItem) => (
							<Reorder.Item value={doingItem} key={doingItem.id} className="cursor-grab">
						<span className="mr-2">
							{doingItem.description}
						</span>
								<Button className="text-neutral-50 bg-yellow-500 p-2 font-medium rounded-2xl text-sm hover:scale-110 transition duration-500" onClick={() => doneDoing(doingItem.id)}
								>
									✅
								</Button>
							</Reorder.Item>
						))}
			</div>
		</div>
				<p className="text-neutral-50 font-medium text-xl">
					<span className="mr-1">Stai svolgendo {doing.length} attività!</span>
				</p>
  </Reorder.Group>)
 
}