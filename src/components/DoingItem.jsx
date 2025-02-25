
import { useList } from "../context/ListContext";
import ReorderList from "./ReorderList";

export function DoingItem(){
  const {longTerms , reorderDoingItems , doneDoing} = useList()


  return (	<ReorderList attività='Attività in corso' axis="y" values={longTerms.doing} onReorder={(ordine) => reorderDoingItems(ordine)} typeList={longTerms.doing} funzione={doneDoing} footer='Stai svolgendo' icon={'✅'}
	/>)

}