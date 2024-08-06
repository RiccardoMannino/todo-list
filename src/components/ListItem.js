import { Item } from "./Item";

export function ListItem() {
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
			<Item />
		</div>
	);
}
