import { Button } from "./Button";
import { useList } from "../context/ListContext";

export function Item() {
	const { items, deleteItems } = useList();

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
				<p>Cose da Fare</p>
				{items.map((item) => (
					<li key={item.id}>
						<span>{item.description}</span>
						<Button
							onClick={() =>
								deleteItems(item.id)
							}
						>
							✅
						</Button>
					</li>
				))}
			</ul>
			<p>
				<span style={{ marginRight: "4px" }}>Devi fare</span>
				{items.length === 1 ? (
					<>
						{items.length}
						<span style={{ marginLeft: "3px" }}>cosa</span>
					</>
				) : (
					<>
						{items.length} <span style={{ marginLeft: "3px" }}>cose</span>
					</>
				)}
			</p>
		</>
	);
}
