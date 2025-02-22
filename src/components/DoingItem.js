
import { useList } from "../context/ListContext";
import ReorderList from "./ReorderList";

export function DoingItem(){
  const {doing , reorderDoingItems , doneDoing} = useList()


  return (	<ReorderList attività='Attività in corso' axis="y" values={doing} onReorder={(ordine) => reorderDoingItems(ordine)} typeList={doing} funzione={doneDoing} footer='Stai svolgendo' icon={'✅'}
	/>)

}