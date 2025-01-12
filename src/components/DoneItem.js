import { Button } from "./Button";
import { useList } from "../context/ListContext";

export function DoneItem() {
	const { done, deleteDoneItems } = useList();

	return (
		<>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<p>Cose fatte</p>
				{done.map((doneItem) => (
					<li key={doneItem.id}>
						<span style={{ textDecoration: "line-through" }}>
							{doneItem.description}
						</span>
						<Button onClick={() => deleteDoneItems(doneItem.id)}>
							❌
						</Button>
					</li>
				))}
			</ul>
			<p>
				<span style={{ marginRight: "4px" }}>Hai fatto</span>
				{done.length === 1 ? (
					<>
						{done.length}
						<span style={{ marginLeft: "3px" }}>cosa</span>
					</>
				) : (
					<>
						{done.length > 1 &&
							(done.length === 0 && (
								<span style={{ marginLeft: "3px" }}>{done.length}cose</span>
							))}
					</>
				)}
			</p>
		</>
	);
}
