import { DoneItem } from "./DoneItem";

export function ListDone({ done, onDeleteListDoneItem }) {
	return (
		<div
			style={{
				textAlign: "center",
				color: "white",
				width: "100%",
				background: "#282828",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<p>Cose prese</p>
				{done.map((doneItem) => (
					<DoneItem
						doneItem={doneItem}
						key={doneItem.id}
						onDeleteListDoneItem={onDeleteListDoneItem}
					/>
				))}
			</ul>
			<p>
				<span style={{ marginRight: "4px" }}>Hai preso</span>
				{done.length === 1 ? (
					<>
						{done.length}
						<span style={{ marginLeft: "3px" }}>oggetto che ti serve</span>
					</>
				) : (
					<>
						{done.length}
						<span style={{ marginLeft: "3px" }}>oggetti che ti servivano</span>
					</>
				)}
			</p>
		</div>
	);
}
