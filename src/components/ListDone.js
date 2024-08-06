import { DoneItem } from "./DoneItem";

export function ListDone() {
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
			<DoneItem />
		</div>
	);
}
