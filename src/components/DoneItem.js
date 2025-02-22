import { useList } from "../context/ListContext";
import ReorderList from "./ReorderList";

export function DoneItem() {
	const { done, deleteDoneItems , reorderDoneItems } = useList();

	return (
			<ReorderList attività='Attività Svolte' axis="y" values={done} onReorder={(ordine) => reorderDoneItems(ordine)} typeList={done} funzione={deleteDoneItems} footer='Hai svolto' icon={'❌'}
			/>
	);
}
