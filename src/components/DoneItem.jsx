import { useList } from "../context/ListContext";
import ReorderList from "./ReorderList";

export function DoneItem() {
	const { longTerms, deleteDoneItems , reorderDoneItems } = useList();

	return (
			<ReorderList attività='Attività Svolte' axis="y" values={longTerms.done} onReorder={(ordine) => reorderDoneItems(ordine)} typeList={longTerms.done} funzione={deleteDoneItems} footer='Hai svolto' icon={'❌'}
			/>
	);
}
