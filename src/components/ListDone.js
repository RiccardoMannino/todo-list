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
				Hai preso
				{done.length === 1
					? `${done.length} cosa che ti serve`
					: `${done.length} cose che ti servivano`}
			</p>
		</div>
	);
}
